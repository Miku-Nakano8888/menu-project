let advices = [
  `В разделе 'скидки' вы не сможете полуить скидку`,
  `Даже если вы видели цену ниже, мы не сделаем вам скидку`,
  `За свою улетность берем деньги. А за красоту — тем более.`,
  `Чтобы жить, нужно солнце, свобода и маленький цветок, а вот скидка - нет`,
  `skidok.net`,
  `Часто случается, что именно с первой поездки начинаются самые важные в мире вещи.`,
];
let advice = document.querySelector(".advice");
let clicks = 0;
advice.innerText = advices[Math.floor(Math.random() * advices.length)];
advice.addEventListener("click", () => {
  clicks++;
  if (advice.innerText != advices[Math.floor(Math.random() * advices.length)]) {
    advice.innerText = advices[Math.floor(Math.random() * advices.length)];
  } else advice.innerText = advices[0];
  if (clicks == 6) {
    advice.innerText = "Вы сейчас сломаете мышку! Прекратите!";
  }
});

let timeOut = setTimeout(function(){
  window.location.href = '../html/index.html';
}, 60000)
