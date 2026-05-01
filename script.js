const questions = [
  { emoji: "🐒 + 👑 + 2️⃣", answer: "Monkey King 2" },
  { emoji: "🦁 + 👑", answer: "Lion King" },
  { emoji: "🚗 + ⚡", answer: "Cars" },
  { emoji: "🕷 + 🧑", answer: "Spiderman" },
  { emoji: "👑+ 🦁", answer: "Rajahuli" },

  { emoji: "🧑‍🚀 + 🌕", answer: "First Man" },
  { emoji: "🐯 + 👳", answer: "Tiger Zinda Hai" },
  { emoji: "👩‍❤‍👨 + 🚢", answer: "Titanic" },
  { emoji: "🦖 + 🌴", answer: "Jurassic Park" },
  { emoji: "🧙‍♂ + 💍", answer: "Lord of the Rings" },

  { emoji: "🤖 + 🚗", answer: "Transformers" },
  { emoji: "👊 + 🥊", answer: "Rocky" },
  { emoji: "👨‍✈ + ✈", answer: "Top Gun" },
  { emoji: "🦇 + 👨", answer: "Batman" },
  { emoji: "👑 + ⚔", answer: "Bahubali" },

  { emoji: "🏹 + 👩", answer: "Brave" },
  { emoji: "🧊 + 👸", answer: "Frozen" },
  { emoji: "🐼 + 🥋", answer: "Kung Fu Panda" },
  { emoji: "🧑‍🎤 + 🎤", answer: "Rockstar" },
  { emoji: "👨‍🚒 + 🔥", answer: "Fireman" },

  { emoji: "👮 + 🚓", answer: "Police Story" },
  { emoji: "👻 + 🏠", answer: "Haunted House" },
  { emoji: "🧑‍⚖ + ⚖", answer: "Jolly LLB" },
  { emoji: "🕶 + 🤵", answer: "Men in Black" },
  { emoji: "🧑‍🍳 + 🍝", answer: "Chef" }
];

let current = 0;
let score = 0;

const emojiBox = document.getElementById("emojiBox");
const answerInput = document.getElementById("answer");
const result = document.getElementById("result");
const scoreText = document.getElementById("score");

emojiBox.textContent = questions[current].emoji;

function checkAnswer() {
  let userAnswer = answerInput.value.trim().toLowerCase();
  let correctAnswer = questions[current].answer.toLowerCase();

  if (userAnswer === correctAnswer) {
    result.textContent = "✅ Correct!";
    result.style.color = "green";
    score++;
  } else {
    result.textContent = "❌ Wrong! Answer: " + questions[current].answer;
    result.style.color = "red";
  }

  scoreText.textContent = "Score: " + score;
}

function nextQuestion() {
  current++;

  if (current >= questions.length) {
    alert("🎉 Game Over! Your Score: " + score);
    current = 0;
    score = 0;
    scoreText.textContent = "Score: 0";
  }

  emojiBox.textContent = questions[current].emoji;
  answerInput.value = "";
  result.textContent = "";
}