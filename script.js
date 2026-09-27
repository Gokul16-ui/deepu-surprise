const welcomeScreen =
    document.getElementById("welcomeScreen");

const surpriseScreen =
    document.getElementById("surpriseScreen");

const hearts =
    document.getElementById("hearts");

const song =
    document.getElementById("song");

const musicButton =
    document.getElementById("musicButton");


// OPEN SURPRISE

function openSurprise() {

    welcomeScreen.classList.add("hidden");

    surpriseScreen.classList.remove("hidden");

    createManyHearts();

}


// PLAY MUSIC

function playMusic() {

    if (song.paused) {

        song.play();

        musicButton.innerHTML =
            "Pause ⏸️";

    }

    else {

        song.pause();

        musicButton.innerHTML =
            "Play Song 🎵";

    }

}


// CREATE HEART

function createHeart() {

    const heart =
        document.createElement("div");

    heart.className = "heart";

    heart.innerHTML =
        Math.random() > 0.5
        ? "❤️"
        : "💗";

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.fontSize =
        (12 + Math.random() * 25) + "px";

    heart.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    hearts.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 10000);

}


// CONTINUOUS HEARTS

setInterval(
    createHeart,
    350
);


// EXTRA HEARTS AFTER OPENING

function createManyHearts() {

    for (
        let i = 0;
        i < 25;
        i++
    ) {

        setTimeout(
            createHeart,
            i * 100
        );

    }

}