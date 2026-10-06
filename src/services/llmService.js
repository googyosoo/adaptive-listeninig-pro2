/**
 * 초고속 Gemini Flash 멀티 모델 체인 및 통합 AI 추론기
 * 1순위: flash-lite, 2순위: 3.5-flash-lite, 3순위: 3.7-flash, 4순위: flash-latest
 * 보조: Upstage Solar Pro
 */
export const callUnifiedLlm = async ({
  customApiKey,
  upstageApiKey,
  systemPrompt,
  userPrompt,
  responseFormatJson = false,
  geminiSchema = null
}) => {
  const gKey = (customApiKey || "").trim();
  const uKey = (upstageApiKey || "").trim();

  // 1. Google Gemini 최우선 초고속 모델 체인 호출
  if (gKey) {
    const geminiModels = ['gemini-flash-lite-latest', 'gemini-3.5-flash-lite', 'gemini-3.7-flash', 'gemini-flash-latest'];
    const fullPrompt = systemPrompt ? `${systemPrompt}\n\n${userPrompt}` : userPrompt;

    for (const modelName of geminiModels) {
      // 1단계: 스키마가 있으면 스키마 적용 시도
      const bodies = [];
      if (responseFormatJson) {
        if (geminiSchema) {
          bodies.push({
            contents: [{ parts: [{ text: fullPrompt }] }],
            generationConfig: { responseMimeType: "application/json", temperature: 0.35, responseSchema: geminiSchema }
          });
        }
        // 스키마 오류 발생 시 일반 JSON MimeType으로 폴백
        bodies.push({
          contents: [{ parts: [{ text: fullPrompt }] }],
          generationConfig: { responseMimeType: "application/json", temperature: 0.35 }
        });
      } else {
        bodies.push({ contents: [{ parts: [{ text: fullPrompt }] }] });
      }

      for (const bodyPayload of bodies) {
        try {
          const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${gKey}`;
          const res = await fetch(geminiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bodyPayload)
          });

          if (res.ok) {
            const data = await res.json();
            const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
            if (text && text.trim().length > 10) {
              return { success: true, text, engine: `Google Gemini (${modelName})` };
            }
          } else if (res.status === 503) {
            // 일시적 과부하 시 1.2초 대기 후 다음 시도
            await new Promise(r => setTimeout(r, 1200));
          }
        } catch (err) {
          console.warn(`Gemini model ${modelName} request exception:`, err);
        }
      }
    }
  }

  // 2. Upstage Solar Pro 보조 엔진 (Gemini 키가 없거나 전 모델 예외 발생 시)
  if (uKey) {
    try {
      const upstageUrl = 'https://api.upstage.ai/v1/solar/chat/completions';
      const messages = [];
      if (systemPrompt) messages.push({ role: 'system', content: systemPrompt });
      messages.push({ role: 'user', content: userPrompt });

      const bodyPayload = {
        model: 'solar-pro',
        messages: messages,
        temperature: 0.3
      };
      if (responseFormatJson) {
        bodyPayload.response_format = { type: 'json_object' };
      }

      const res = await fetch(upstageUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${uKey}`
        },
        body: JSON.stringify(bodyPayload)
      });

      if (res.ok) {
        const data = await res.json();
        const text = data.choices?.[0]?.message?.content;
        if (text) return { success: true, text, engine: 'Upstage Solar Pro' };
      }
    } catch (err) {
      console.warn("Upstage fallback call failed:", err);
    }
  }

  return { success: false, text: null, engine: null };
};
