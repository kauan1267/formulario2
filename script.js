const questions = [
  "Nome + ID Discord",
  "Qual seu horário disponível pra ajudar na log?",
  "Atua em alguma área da staff? Se sim, quais?",
  "Já teve experiência como Equipe. LOG? Se sim, me diga mais sobre.",
  "Pra que serve o comando hackperma? E quando ele deve ser usado?",
  "Em quais situações o propmanager seria ideal para achar hacker?",
  "Pra que serve o delobjs? E em quais situações seria necessário usá-lo?",
  "Pra que serve o forcedelete? E porque ele pode ser usado quando o delobjs não funcionar?",
  "Como você poderia achar o hack que usa função do mod menu pra falar alto?",
  "Se você banir um hacker e ele não for kikado da cidade, o que poderia fazer?",
  "Se você ver um hacker zaralhando na cidade, o que faria?",
  "Está ciente que se entrar pra log, terá uma meta semanal de 50 banimentos? (Sim ou Não)",
  "Se alguém te marcar num ticket falando que o dinheiro dele sumiu, o que faria?"
];

let currentQuestion = 0;
const answers = [];

function startSlides() {
  const slides = document.querySelectorAll('.slide');
  let index = 0;

  const interval = setInterval(() => {
    if (index < slides.length - 1) {
      slides[index].classList.remove('active');
      slides[++index].classList.add('active');
    } else {
      clearInterval(interval);
    }
  }, 10000); // 10s por slide
}

function startForm() {
  document.getElementById("intro").classList.add("hidden");
  document.getElementById("form").classList.remove("hidden");
  showQuestion();
  startTimer(12 * 60); // 12 minutos
}

function showQuestion() {
  const questionContainer = document.getElementById("question-container");
  questionContainer.innerHTML = `
    <label>${questions[currentQuestion]}</label><br>
    <textarea required onpaste="return false;"></textarea>
  `;

  document.getElementById("nextBtn").classList.toggle("hidden", currentQuestion >= questions.length - 1);
  document.getElementById("submitBtn").classList.toggle("hidden", currentQuestion < questions.length - 1);
}

function nextQuestion() {
  const textarea = document.querySelector("#question-container textarea");
  answers.push(textarea.value.trim());
  currentQuestion++;
  showQuestion();
}

function submitForm(event) {
  event.preventDefault();
  const textarea = document.querySelector("#question-container textarea");
  answers.push(textarea.value.trim());

  // Aqui você envia para seu servidor ou backend
  console.log("Respostas:", answers);
  alert("Formulário enviado com sucesso!");

  // Redireciona ou trava a página
  document.body.innerHTML = "<h2 style='text-align:center;color:white;margin-top:50px;'>Obrigado por preencher o formulário.</h2>";
}

function startTimer(duration) {
  let timer = duration;
  const countdown = setInterval(() => {
    timer--;
    if (timer <= 0) {
      clearInterval(countdown);
      alert("Tempo esgotado! O formulário será encerrado.");
      window.location.reload();
    }
  }, 1000);
}

window.onload = startSlides;
