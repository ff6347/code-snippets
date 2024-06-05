import { LLM } from './llm.js';

const llm = new LLM({ host: '<ENTER YOUR OWN VAL TOWN URL HERE>' });
const messages = [
  {
    role: 'system',
    content:
      'You are a story telling helper that creates consistent stories. The user gives you a topic and you start to tell it. Then he will provide follow up questions to expand the story. Keep it short. Around 100 words per message.',
  },
];

const runButton = document.getElementById('run');
const systemTextArea = document.getElementById('sys-prompt');
const form = document.querySelector('form');

systemTextArea.value = messages[0].content;
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const dots = ['.', '..', '...'];
  let counter = 0;
  const runingInterval = setInterval(() => {
    runButton.disabled = true;
    runButton.textContent = `${dots[counter % 3]}`;
    counter++;
  }, 1000);

  const formData = new FormData(form);
  const userMessage = formData.get('message');
  const systemMessage = formData.get('system');
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
  chatBox.innerHTML = '';
  console.log(response);
  const { message } = response.completion.choices[0];
  messages.push(message);

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
});
