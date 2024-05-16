// esm module
import ollama from 'https://esm.sh/ollama/browser';
// get the elements from the index.html
const output = document.querySelector('div#output>pre>code');
const runButton = document.querySelector('button#run');

// checkl if the button really exists
if (runButton) {
  // run the code when the button is clicked
  runButton.addEventListener('click', async () => {
    // the button was clicked

    output.innerText = 'Loading weather data...';

    const response = await fetch(
      'https://api.brightsky.dev/weather?lat=52.266666&lon=10.516667&date=2024-05-14T12:00:00Z',
    );

    output.innerText += '\nData loaded.';
    // turn the text response th JSON. Since we know that brightsky gives us JSON
    const data = await response.json();

    console.log(data);
    // if there is some data in the response
    if (data.weather.length > 0) {
      const weather = data.weather[0];
      const condition = weather.condition;
      output.innerText += '\nCondition: ' + condition;
      output.innerText += '\nGenerating prompt...';
      // generate the prompt with the condition value
      const prompt = 'the weather is ' + condition + ' what should i do?';
      output.innerText += '\nPrompt generated: ' + prompt;
      console.log('sending prompt to ollama', prompt);

      output.innerText += '\nsending prompt to ollama...';
      // actually sending the data using the
      // ollama js library
      const response = await ollama.chat({
        model: 'llama3',
        stream: false,
        options: {
          temperature: 1,
        },

        messages: [
          {
            role: 'system',
            content:
              "You are a weather frog and you give tips what we can do on a specific weather condition. You always reply in text. You don't generate any other messages. Keep it short and add some quack quack or frog sounds to the your message. ",
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
      });
      // the promise is resolved we have some value in reponse
      output.innerText += '\nResponse received';
      console.log('response', response);
      output.innerText += '\n' + response.message.content;
    }
  });
}
