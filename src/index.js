alert("Welcome to AI medical chatbox👋🏻");

function displayResult(response) {
  let result = response.data.answer;
  new Typewriter("#result", {
    strings: result,
    autoStart: true,
    delay: 100,
  });
}

function getAnswer() {
  let inputField = document.querySelector("#symptoms");
  let result = document.querySelector("#result");
   if (!inputField.value.trim()) {
     result.innerHTML = "Please enter your symptom(s)!";
     return;
   }
  result.innerHTML = "Generating answer, please wait a minute...";

  let apiKey = "103e0470750babf36f99e08ddo7f31ta";
  let context = "You are a medical doctor,provide precise and accurate information";
  let prompt = inputField.value;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}
  &context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayResult).catch((error) => {
      result.innerHTML = "An error occurred. Please try again later.";
      console.error(error);
    });
}
let buttonElement = document.querySelector("input[type='button']");
buttonElement.addEventListener("click", getAnswer);


document.addEventListener("DOMContentLoaded", () => {
  alert("Welcome to AI medical chatbox 👋🏻");
});


