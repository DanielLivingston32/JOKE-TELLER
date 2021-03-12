<h1>JOKE TELLER APP</h1>
This is a simple training app based on HTML, CSS, JS and 2 APIs - <a href = "https://jokeapi.dev/">Joke API</a> and <a href = "http://www.voicerss.org/api/">Voice RSS Text-To-Speech API</a>.

- Upon clicking on the button, GET request is sent to the <a href = "https://jokeapi.dev/">Joke API</a> which return a JSON file.

- Joke from JSON is sent via the POST request to the <a href = "http://www.voicerss.org/api/">Voice RSS Text-To-Speech API</a> which returns an audio response.

- The audio response is then sent to the hidden audio tag and the audio is played.

## Tech Stack

![ForTheBadge uses-git](https://forthebadge.com/images/badges/made-with-javascript.svg)
![ForTheBadge uses-git](https://forthebadge.com/images/badges/uses-html.svg)
![ForTheBadge uses-js](https://forthebadge.com/images/badges/uses-css.svg)

<h1>Site Status</h1>

[![Netlify Status](https://api.netlify.com/api/v1/badges/00b1bb6a-6cbb-42fa-a4f3-7dae587fe4fa/deploy-status)](https://app.netlify.com/sites/joke-teller-app/deploys)

<h1>Live Preview</h1>

You can check out the live preview here: <button><a href="https://joke-teller-app.netlify.app/">Preview</a></button>

<h1>Running this Locally</h1>

- Go to the documentation page for the Voice RSS Text to Speech API page found here

- Click on 'Get API Key' on the left nav bar.

- Create a free account.

- When your account is created, you need to activate the account by clicking the 'Activate Account' button on the sign up page.

- Once your account is activated, you can copy your API key and paste it into the script.js file.

- Line 18, replace 'config.MY_KEY' with your API key contained in single quotes.
