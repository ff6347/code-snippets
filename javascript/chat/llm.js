export class LLM {
  constructor({ host }) {
    this.host = host;
  }

  /**
   * Sends a chat request to the host and returns the response.
   *
   * @param {Object} params - The chat parameters.
   * @param {string} params.format - The format of the response, 'json' for JSON format. Make sure to instruct the assistant to always respond in JSON.
   * @param {Object} params.options - The options for the chat.
   * @param {number} params.options.seed - The seed for the chat.
   * @param {number} params.options.temperature - The temperature for the chat.
   * @param {Array<{role: 'system' | 'assistant' | 'user', content: string}>} params.messages - The messages for the chat.
   * @returns {Promise<Object>} The response from the chat request.
   * @throws {Error} If the fetch request fails.
   */
  async chat({ format, options, messages }) {
    const body = {
      messages,
      response_format: format === 'json' ? { type: 'json_object' } : undefined,
      seed: options.seed ? options.seed : undefined,
      temperature: options.temperature ? options.temperature : undefined,
    };
    const response = await fetch(this.host, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      const txt = await response.text();
      throw new Error(txt);
    }
  }
}
