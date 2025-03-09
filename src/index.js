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
  let result = document.querySelector("#result");
  result.innerHTML = "Generating answer, please wait a minute...";

  let apiKey = "103e0470750babf36f99e08ddo7f31ta";
  let context = "You are a medical doctor,provide precise and accurate information";
  let prompt = "#symptom(s)";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}
  &context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayResult);
}
let buttonElement = document.querySelector("button");
buttonElement.addEventListener("click", getAnswer);
