const button = document.getElementById("button");
const audioElement = document.getElementById("audio");

// Disable/Enable Audio button
function toggleButton() {
  button.disabled = !button.disabled;
}

// Passing Joke to VoiceRSS
function tellMe(joke) {
  VoiceRSS.speech({
    key: "99a379b8f2ab445ca4e52e0794e8d532",
    src: joke,
    hl: "en-us",
    v: "Linda",
    r: 0,
    c: "mp3",
    f: "44khz_16bit_stereo",
    ssml: false,
  });
}

// Get Jokes from Joke API

async function getJokes() {
  joke = "";
  const apiUrl =
    "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    if (data.setup) {
      joke = `${data.setup} ... ${data.delivery}`;
    } else {
      joke = data.joke;
    }
    // Text-to-Speech
    tellMe(joke);
    // Disable Button
    toggleButton();
  } catch (error) {
    console.log("Fetch request failed: ", error);
  }
}

// Event Listeners
button.addEventListener("click", getJokes);
audioElement.addEventListener("ended", toggleButton);
