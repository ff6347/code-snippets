import { LLM } from './llm.js';

const llm = new LLM({ host: '<ADD YOUR VALTOWN HERE>' });
let messages = [
  {
    role: 'system',
    content:
      'You are a story telling helper that creates consistent stories. The user gives you a topic and you start to tell it. Then he will provide follow up questions to expand the story. Keep it short. Around 100 words per message.',
  },
];

const storedMessages = localStorage.getItem('storyteller-messages');
if (storedMessages) {
  messages = JSON.parse(storedMessages);
  populateChat(messages);
}

const runButton = document.getElementById('run');
const clearButton = document.getElementById('clear');
const saveButton = document.getElementById('save');

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
const systemTextArea = document.getElementById('sys-prompt');
const form = document.querySelector('form');
// Restore form state from localStorage
const storedFormState = localStorage.getItem('storyteller-form-state');
if (storedFormState) {
  const formState = JSON.parse(storedFormState);
  systemTextArea.value = formState.systemMessage;
  const userTextArea = document.getElementById('message');
  if (userTextArea) {
    userTextArea.value = formState.userMessage;
  }
}
systemTextArea.value = messages[0].content;

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
  const { systemMessage, userMessage } = saveToLocaStorage(messages);

  const dots = ['.', '..', '...'];
  let counter = 0;
  const runingInterval = setInterval(() => {
    runButton.disabled = true;
    runButton.textContent = `${dots[counter % 3]}`;
    counter++;
  }, 1000);

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
  messages.push({ role: 'user', content: userMessage });
  const response = await llm.chat({
    messages,
    options: {
      seed: 42,
    },
  });
  clearInterval(runingInterval);
  runButton.textContent = `Run`;
  runButton.disabled = false;

  const chatBox = document.getElementById('chat');

  console.log(response);
  const { message } = response.completion.choices[0];
  messages.push(message);
  populateChat(messages, chatBox);
});

function saveToLocaStorage(messages, form = document.querySelector('form')) {
  const formData = new FormData(form);
  const userMessage = formData.get('message');
  const systemMessage = formData.get('system');

  localStorage.setItem('storyteller-messages', JSON.stringify(messages));
  // Save form state to localStorage
  const formState = {
    systemMessage,
    userMessage,
  };
  localStorage.setItem('storyteller-form-state', JSON.stringify(formState));
  return { userMessage, systemMessage };
}
function populateChat(messages, chatBox = document.getElementById('chat')) {
  chatBox.innerHTML = '';
  messages.forEach((message) => {
    const messageBox = document.createElement('div');
    messageBox.classList.add('message', message.role);
    const roleSpan = document.createElement('span');
    roleSpan.classList.add('role');
    roleSpan.innerText = message.role;
    messageBox.appendChild(roleSpan);
    const messageContent = document.createElement('p');
    messageContent.classList.add('content');
    messageContent.innerText = message.content;
    messageBox.appendChild(messageContent);
    chatBox.appendChild(messageBox);
  });
}
