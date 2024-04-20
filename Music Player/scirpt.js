// songs data saved in array of objects
let arr = [
  {
    songName: "Sawarne Lage",
    url: "./songs/sawarne-lage.mp3",
    img: "./images/sawarne.jpg",
  },
  {
    songName: "Halka Halka",
    url: "./songs/halka-halka.mp3",
    img: "./images/halka.jpeg",
  },
  { songName: "Tum", url: "./songs/tum.mp3", img: "./images/euphoria.jpg" },
  {
    songName: "Aahista",
    url: "./songs/aahista.mp3",
    img: "./images/aahista.jpg",
  },
  {
    songName: "Tum",
    url: "./songs/tum-ft-ronit.mp3",
    img: "./images/tum.jpg",
  },
];
let allSongs = document.querySelector("#all-songs");

let poster = document.querySelector("#left");

let play = document.querySelector("#play");
let backward = document.querySelector("#backward");
let forward = document.querySelector("#forward");

let audio = new Audio();

let selectedSong = 0;

function mainFunction() {
  let clutter = "";
  arr.forEach(function (elem, index) {
    clutter += `<div class="song-card" id=${index}>
  <div class="part1">
    <img src=${elem.img} alt="">
    <h2>${elem.songName}</h2>
  </div>
  <h6>3:56</h6>
</div>`;
  });
  allSongs.innerHTML = clutter;

  audio.src = arr[selectedSong].url;

  poster.style.backgroundImage = `url(${arr[selectedSong].img})`;
}
mainFunction();
//dets means details

allSongs.addEventListener("click", function (dets) {
  selectedSong = dets.target.id;
  mainFunction();
  play.innerHTML = `<i class="ri-pause-fill"></i>`;
  flag = 1;
  audio.play();
});

let flag = 0;
play.addEventListener("click", function () {
  if (flag == 0) {
    play.innerHTML = `<i class="ri-pause-fill"></i>`;
    mainFunction();
    audio.play();
    flag = 1;
  } else {
    play.innerHTML = `<i class="ri-play-fill"></i>`;
    mainFunction();
    audio.pause();
    flag = 0;
  }
});

forward.addEventListener("click", function () {
  if (selectedSong < arr.length - 1) {
    selectedSong++;
    mainFunction();
    audio.play();
  } else {
    forward.style.opacity = 0.4;
  }
});

backward.addEventListener("click", function () {
  if (selectedSong > 0) {
    selectedSong--;
    mainFunction();
    audio.play();
  } else {
    backward.style.opacity = 0.4;
  }
});
