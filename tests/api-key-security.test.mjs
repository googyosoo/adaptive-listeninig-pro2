import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import { runInNewContext } from 'node:vm';
import { callUnifiedLlm } from '../src/services/llmService.js';

const root = new URL('../', import.meta.url);
const read = (name) => readFileSync(new URL(name, root), 'utf8');
const app = read('src/App.jsx');
const presets = read('src/constants/examPresets.js');
const keyStates = ['customApiKey', 'apiKeyInput', 'upstageApiKey', 'upstageKeyInput'];

function initialize(name, savedValue) {
  const line = app.split('\n').find((entry) => entry.includes('const [' + name + ','));
  assert.ok(line, 'Missing API key state: ' + name);
  const match = line.match(/useState\(\(\) => (.+)\);/);
  assert.ok(match, 'Unrecognized API key initializer: ' + name);
  return runInNewContext(match[1], { localStorage: { getItem: () => savedValue } });
}

test('No shared AI key declarations remain', () => {
  assert.doesNotMatch(app + presets, /DEFAULT_SECURE_(?:UPSTAGE|GEMINI)/);
});

test('No literal or Base64-encoded Google API key remains in key configuration', () => {
  const text = app + '\n' + presets;
  assert.doesNotMatch(text, /AIza[A-Za-z0-9_-]{35}/);
  const candidates = text.match(/[A-Za-z0-9+/]{32,}={0,2}/g) || [];
  for (const candidate of candidates) {
    const decoded = Buffer.from(candidate, 'base64').toString('utf8');
    assert.ok(!/AIza[A-Za-z0-9_-]{35}/.test(decoded), 'Encoded Google API key detected');
  }
});

test('A browser without a personal key starts with empty API key states', () => {
  for (const name of keyStates) assert.equal(initialize(name, null), '', name);
});

test('Previously entered personal keys remain available', () => {
  for (const name of keyStates) assert.equal(initialize(name, 'personal-test-value'), 'personal-test-value', name);
});

test('API key notice states that requests send data to the provider', () => {
  assert.ok(app.includes('해당 제공자에게 전송됩니다.'));
  assert.ok(!app.includes('외부로 노출되지 않습니다.'));
});

test('Calling the LLM without keys does not make a network request', async () => {
  const originalFetch = globalThis.fetch;
  let calls = 0;
  globalThis.fetch = async () => { calls += 1; throw new Error('Unexpected network request'); };
  try {
    const result = await callUnifiedLlm({ userPrompt: 'Offline test' });
    assert.equal(result.success, false);
    assert.equal(calls, 0);
  } finally {
    globalThis.fetch = originalFetch;
  }
});
