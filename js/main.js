// 1. توليد قلوب متساقطة في الخلفية بشكل عشوائي
const heartsContainer = document.getElementById("hearts-container");
const heartSymbols = ["❤️", "💖", "✨", "🌸"];

for (let i = 0; i < 30; i++) {
  const heart = document.createElement("div");
  heart.classList.add("heart-fall");
  heart.innerText =
    heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.top = Math.random() * -20 + "px";
  heart.style.fontSize = Math.random() * 15 + 15 + "px";
  heart.style.animationDuration = Math.random() * 5 + 5 + "s";
  heart.style.animationDelay = Math.random() * 5 + "s";
  heartsContainer.appendChild(heart);
}
// music
const music = document.querySelector('audio');
const playBtn = document.getElementById('play-btn');
const backward = document.getElementById('backward');
const forward = document.getElementById('forward');
const progressBar = document.getElementById('range');
// play and pause music
playBtn.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    playBtn.innerHTML = '<i class="fas fa-pause"></i>'
  } else if (!music.paused) {
    music.pause();
    playBtn.innerHTML = '<i class="fas fa-play"></i>'
  }
});
// forward and backward music
backward.addEventListener('click', () => {
  music.currentTime -= 10;
});
forward.addEventListener('click', () => {
  music.currentTime += 10;
});
// progress bar
progressBar.min=0
progressBar.max=music.duration
music.addEventListener('timeupdate', () => {
  progressBar.value=music.currentTime
});
// change time by progress bar
progressBar.addEventListener('input', () => {
  music.currentTime = progressBar.value;
});
// calculate the days we met
const count = document.getElementById('count');
const startDate = new Date('2026-05-18');
function updateCount() {
  const now = new Date();
  const diffTime = Math.abs(now - startDate);
  const Days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diffTime % (1000 * 60)) / 1000);
  const current = `<span>${Days} يوم</span>
  <span>${hours} ساعة</span>
  <span>${minutes} دقيقة</span>
  <span>${seconds} ثانية</span>`;
  count.innerHTML = `${current}`;
}
setInterval(updateCount, 1000);
updateCount();
// sections
const sections = document.querySelectorAll('section');
function removeActive() {
  sections.forEach(section => {
    section.classList.remove('active');
  });
}
// gift
const giftBox = document.getElementById('gift-box');
const secretMessage = document.getElementById('secret-message');

giftBox.addEventListener('click', () => {
    if(secretMessage.classList.contains('hidden')) {
        secretMessage.classList.remove('hidden');
        giftBox.innerHTML = '❤️'; // يتغير الصندوق لقلب عند الفتح
    } else {
        secretMessage.classList.add('hidden');
        giftBox.innerHTML = '🎁';
    }
});
// imgs
const memoImgs = document.querySelectorAll('#memo img');
const preview = document.getElementById('img-preview');
const imgShow = document.getElementById('img-show');
const closePreview = document.getElementById('close');
memoImgs.forEach(img => {
  img.addEventListener('click', () => {
    imgShow.src = img.src;
    preview.classList.add('show');
  });
});
closePreview.addEventListener('click', () => {
  preview.classList.remove('show');
});