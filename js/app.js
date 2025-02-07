const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const forwardBtn = document.getElementById("forward");
const backwardBtn = document.getElementById("backward");
const voice = document.getElementById("voice");
const container = document.getElementById("container");
const audioVolum = document.getElementById("audio-valume");
const cover = document.getElementById("cover")

let indexContent = 0
const content = {
    "Abrobey- Qimmat Dunyo",
    "Jah Khalib - Медина",
    "Konsta-Qahramonlar",
    "Sherali Jo'rayev - Inson o'zing"
}

function changeMusic(index) {
    cover.src = `../images/${content[index]}.jpg`
}

changeMusic(indexContent)

audio.volume = voice.value / 100;
audio.currentTime = 150;

voice.addEventListener("input", () => {
    audio.volume = voice.value / 100;
    audioVolum.textContent = voice.value;
});

function play() {
    container.classList.add("playing");
    audio.play();
    playBtn.innerHTML = `<i class="fa-solid fa-pause">`;
}

function pause() {
    container.classList.remove("playing");
    audio.pause();
    playBtn.innerHTML = `<i class="fa-solid fa-play">`;
}

playBtn.addEventListener("click", () => {
    const isPlaying = container.classList.contains("playing");

    if (isPlaying) {
        pause();
    } else {
        play();
    }
});