//@ts-check
import { LLM } from './llm.js';
import { populateChat, saveToLocaStorage } from './utils.js';

/**
 * @type {Array<{role: 'user'|'system'|'assistant', content: string}>}
 */
let messages = [
  {
    role: 'system',
    content: `You are a story telling helper that creates consistent stories. Honor the heroes journey! The user gives you a topic and you start to tell a story segment. Don't try to reason or provide backstories if you are not asked to. Then the user will provide follow up questions to expand the story. Keep it short. Around 50 words per segment. Don't repeat the users prompt.`,
  },
];
let timerId = null;

const runButton = document.getElementById('run');
const clearButton = document.getElementById('clear');
const saveButton = document.getElementById('save');
/**
 * @type {HTMLElement|null}
 */
const systemTextArea = document.getElementById('sys-prompt');
const form = document.querySelector('form');

const valUrlInport = document.getElementById('url');
/**
 * @type {HTMLElement | null}
 */
const userTextArea = document.getElementById('message');
// sanity checks
//
//
//
//
if (!form || !(form instanceof HTMLFormElement)) {
  throw new Error('Could not find form');
}

if (!systemTextArea || !(systemTextArea instanceof HTMLTextAreaElement)) {
  throw new Error('Missing system text area');
}

if (!runButton || !clearButton || !saveButton) {
  throw new Error('Missing run, clear or save button');
}
if (
  !(runButton instanceof HTMLButtonElement) ||
  !(clearButton instanceof HTMLButtonElement) ||
  !(saveButton instanceof HTMLButtonElement)
) {
  throw new Error('Invalid button type');
}
if (!valUrlInport || !(valUrlInport instanceof HTMLInputElement)) {
  throw new Error('Missing url input');
}
if (!userTextArea || !(userTextArea instanceof HTMLTextAreaElement)) {
  throw new Error('Missing user text area');
}
// set ui state
//
//
//
//
systemTextArea.value = messages[0].content;
//
const storedMessages = localStorage.getItem('storyteller-messages');
if (storedMessages) {
  messages = JSON.parse(storedMessages);
  populateChat(messages);
}

// Restore form state from localStorage
const storedFormState = localStorage.getItem('storyteller-form-state');
if (storedFormState) {
  const formState = JSON.parse(storedFormState);
  systemTextArea.value = formState.systemMessage;
  systemTextArea.style.height = 'auto';
  systemTextArea.style.height = systemTextArea.scrollHeight + 'px';
  valUrlInport.value = formState.valUrl;
  userTextArea.value = formState.userMessage;
}

// Event listeners
//
//
//
//
saveButton.addEventListener('click', (e) => {
  e.preventDefault();

  const blob = new Blob(
    [messages.map((item) => `${item.role}\n${item.content}\n`).join('\n')],
    {
      type: 'text/plain;charset=utf-8',
    },
  );
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'storyteller-chat.txt';
  a.click();
});

clearButton.addEventListener('click', (e) => {
  e.preventDefault();
  const confirmClear = confirm('Are you sure you want to clear the chat?');
  if (confirmClear) {
    messages = [messages[0]];
    localStorage.setItem('storyteller-messages', JSON.stringify(messages));

    populateChat(messages);
  }
});

systemTextArea.addEventListener(
  'input',
  function autoResize() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
  },
  false,
);

systemTextArea.addEventListener('input', (e) => {
  clearTimeout(timerId); // clear the timer on each key stroke.
  messages[0].content = systemTextArea.value;
  timerId = setTimeout(() => {
    populateChat(messages);
  }, 300);
});
form.addEventListener('change', (e) => {
  e.preventDefault();
  saveToLocaStorage(messages);
});
form.addEventListener('input', (e) => {
  e.preventDefault();
  saveToLocaStorage(messages);
});

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  // Save messages to localStorage
  const { systemMessage, userMessage, valUrl } = saveToLocaStorage(messages);

  const dots = ['.', '..', '...'];
  let counter = 0;
  const runingInterval = setInterval(() => {
    runButton.disabled = true;
    runButton.textContent = `${dots[counter % 3]}`;
    counter++;
  }, 500);

  messages[0].content = systemMessage;
  if (systemMessage === '') {
    clearInterval(runingInterval);
    runButton.textContent = `Run`;
    runButton.disabled = false;
    return;
  }

  if (userMessage === '') {
    clearInterval(runingInterval);
    runButton.textContent = `Run`;
    runButton.disabled = false;
    return;
  }
  const llm = new LLM({ host: valUrl });
  messages.push({ role: 'user', content: userMessage });
  const response = await llm.chat({
    format: 'text',
    messages,
    options: {
      seed: 42,
      temperature: 0.8,
    },
  });
  clearInterval(runingInterval);
  runButton.textContent = `Run`;
  runButton.disabled = false;
  const chatBox = document.getElementById('chat');
  const { message } = response.completion.choices[0];
  messages.push(message);
  populateChat(messages, chatBox);
  saveToLocaStorage(messages);
});
