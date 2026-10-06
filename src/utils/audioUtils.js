// Web Audio API 기반 수능 오리지널 시그널 차임벨 (딩동댕~) 합성기
export function playChimeAudio() {
  return new Promise((resolve) => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) {
        resolve();
        return;
      }
      const ctx = new AudioCtx();
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // 수능 차임벨 4음 주파수: Sol(G4: 392Hz) -> Si(B4: 493.88Hz) -> Re(D5: 587.33Hz) -> Sol(G5: 783.99Hz)
      const notes = [392.00, 493.88, 587.33, 783.99];
      const noteDuration = 0.22;
      const now = ctx.currentTime;

      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * noteDuration);

        // 감쇠 엔벨로프 (맑은 종소리 잔향)
        gain.gain.setValueAtTime(0, now + idx * noteDuration);
        gain.gain.linearRampToValueAtTime(0.25, now + idx * noteDuration + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * noteDuration + noteDuration + 0.35);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + idx * noteDuration);
        osc.stop(now + idx * noteDuration + noteDuration + 0.4);
      });

      setTimeout(() => {
        try {
          ctx.close();
        } catch (e) {}
        resolve();
      }, (notes.length * noteDuration + 0.4) * 1000);
    } catch (e) {
      console.error("Chime Error:", e);
      resolve();
    }
  });
}

// Gemini 오디오 PCM 24000Hz -> 브라우저 표준 WAV Blob 변환기
export const pcmToWavBlobUrl = (base64Pcm, sampleRate = 24000) => {
  try {
    const binaryString = atob(base64Pcm);
    const len = binaryString.length;
    const pcmData = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      pcmData[i] = binaryString.charCodeAt(i);
    }

    const wavHeader = new ArrayBuffer(44);
    const view = new DataView(wavHeader);

    // RIFF identifier
    view.setUint32(0, 0x52494646, false); // "RIFF"
    view.setUint32(4, 36 + pcmData.length, true); // Chunk size
    view.setUint32(8, 0x57415645, false); // "WAVE"

    // fmt sub-chunk
    view.setUint32(12, 0x666d7420, false); // "fmt "
    view.setUint32(16, 16, true); // Subchunk1Size (16 for PCM)
    view.setUint16(20, 1, true); // AudioFormat (1 for PCM)
    view.setUint16(22, 1, true); // NumChannels (1: Mono)
    view.setUint32(24, sampleRate, true); // SampleRate
    view.setUint32(28, sampleRate * 2, true); // ByteRate
    view.setUint16(32, 2, true); // BlockAlign
    view.setUint16(34, 16, true); // BitsPerSample

    // data sub-chunk
    view.setUint32(36, 0x64617461, false); // "data"
    view.setUint32(40, pcmData.length, true); // Subchunk2Size

    const wavBlob = new Blob([wavHeader, pcmData], { type: 'audio/wav' });
    return URL.createObjectURL(wavBlob);
  } catch (e) {
    console.error("PCM to WAV Conversion Error:", e);
    return null;
  }
};
