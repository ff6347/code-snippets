export function saveToLocaStorage(
  messages,
  form = document.querySelector('form'),
) {
  const formData = new FormData(form);
  const userMessage = formData.get('message');
  const systemMessage = formData.get('system');
  const valUrl = formData.get('url');
  if (!userMessage || !systemMessage || !valUrl) {
    throw new Error('Missing user, system or url value from form');
  }

  // check that the formDataEntryValue is not a File
  if (
    userMessage instanceof File ||
    systemMessage instanceof File ||
    valUrl instanceof File
  ) {
    throw new Error('Form data cannot be a file');
  }

  localStorage.setItem('storyteller-messages', JSON.stringify(messages));
  // Save form state to localStorage
  const formState = {
    systemMessage,
    userMessage,
    valUrl,
  };
  localStorage.setItem('storyteller-form-state', JSON.stringify(formState));
  return { userMessage, systemMessage, valUrl };
}

export function populateChat(
  messages,
  chatBox = document.getElementById('chat'),
) {
  chatBox.innerHTML = '';
  messages.forEach((message) => {
    const messageBox = document.createElement('div');
    messageBox.classList.add('message', message.role);
    const roleSpan = document.createElement('span');
    roleSpan.classList.add('role');
    roleSpan.innerText = capitalize(message.role);
    messageBox.appendChild(roleSpan);
    const messageContent = document.createElement('p');
    messageContent.classList.add('content');
    messageContent.innerText = message.content;
    messageBox.appendChild(messageContent);
    chatBox.appendChild(messageBox);
  });
  chatBox.scrollTop = chatBox.scrollHeight;
}

export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
