
/**Script botão de voz */
const searchInput = document.getElementById('search-field');
const voiceButton = document.getElementById('voice-search-button');
const recognition = new webkitSpeechRecognition();

recognition.lang = 'pt-BR';
recognition.continuous = true;
recognition.interimResults = true;

let estareconhecendo = false; // Variável para controlar se o reconhecimento está ativo

voiceButton.addEventListener('click', () => {
  if (estareconhecendo) { // Verifica se o reconhecimento já está ativo
    recognition.stop();
    estareconhecendo = false;
  } else {
    recognition.start();
    estareconhecendo = true;
  }
});

recognition.addEventListener('result', (event) => {
  const transcription = event.results[event.results.length - 1][0].transcript;
  searchInput.value = transcription;
});

recognition.addEventListener('error', (event) => {
  alert.log('Erro ao reconhecer fala:', event.error);
});

recognition.addEventListener('end', () => {
  alert.log('Reconhecimento de fala encerrado');
  estareconhecendo = false; // Altera o valor da variável para indicar que o reconhecimento foi encerrado
});

/*Script do submenu*/
const submenuButton = document.getElementById("submenu-button");
const submenu = document.getElementById("nav-submenu");



submenuButton.addEventListener("click", function () {
  if (submenu.style.display === "" || submenu.style.display === "none") {
    submenu.style.display = "block";

  } else {
    submenu.style.display = "none";

  }
 
});
function fecharDiv() {
  submenu.style.display = "none";
}



