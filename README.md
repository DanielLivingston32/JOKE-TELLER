<style>

button {
  cursor: pointer;
  outline: none;
  font-family: "Courier New", Courier, monospace;
  font-size: 20px;
  border: none;
}

a {
    text-decoration: none;
}

</style>

<h1>JOKE TELLER APP</h1>
This is a simple training app based on HTML, CSS, JS and 2 APIs - <a href = "https://jokeapi.dev/">Joke API</a> and <a href = "http://www.voicerss.org/api/">Voice RSS Text-To-Speech API</a>.

- Upon clicking on the button, GET request is sent to the <a href = "https://jokeapi.dev/">Joke API</a> which return a JSON file.

- Joke from JSON is sent via the POST request to the <a href = "http://www.voicerss.org/api/">Voice RSS Text-To-Speech API</a> which returns an audio response.

- The audio response is then sent to the hidden audio tag and the audio is played.

<h1>Status</h1>

[![Netlify Status](https://api.netlify.com/api/v1/badges/00b1bb6a-6cbb-42fa-a4f3-7dae587fe4fa/deploy-status)](https://app.netlify.com/sites/joke-teller-app/deploys)

<h1>Live Preview</h1>

<button><a href="https://joke-teller-app.netlify.app/">Preview</a></button>

<h1>Running this Locally</h1>

- Go to the documentation page for the Voice RSS Text to Speech API page found here

- Click on 'Get API Key' on the left nav bar.

- Create a free account.

- When your account is created, you need to activate the account by clicking the 'Activate Account' button on the sign up page.

- Once your account is activated, you can copy your API key and paste it into the script.js file.

- Line 18, replace 'config.MY_KEY' with your API key contained in single quotes.
