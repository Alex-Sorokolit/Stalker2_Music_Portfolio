new Swiper(".swiper", {
  // direction: "vertical",
  speed: 2400,
  mousewheel: {
    enabled: true,
    sensitivity: 1,
  },
  loop: true,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  // spaceBetween: 50,
  // grabCursor: true,
  parallax: true,
  // freeMode: true,
});

const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("playPauseBtn");
let count = 0;

function playPause() {
  if (count == 0) {
    count = 1;
    audio.play();
    playPauseBtn.classList.toggle("play");
  } else {
    count = 0;
    audio.pause();
    playPauseBtn.classList.toggle("play");
  }
}
