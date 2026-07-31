/* ==========================================================
   PROJECT MOONLIGHT - CHAPTER 1
   Part 3A
========================================================== */

// ===============================
// CANVAS
// ===============================

const canvas = document.getElementById("sky");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// ===============================
// STARS
// ===============================

const stars = [];

for (let i = 0; i < 600; i++) {

    stars.push({

        x: Math.random() * canvas.width,

        y: Math.random() * canvas.height,

        radius: Math.random() * 1.8 + 0.2,

        alpha: Math.random(),

        speed: Math.random() * 0.02 + 0.003,

        direction: Math.random() > 0.5 ? 1 : -1

    });

}

function drawStars() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const gradient = ctx.createLinearGradient(
        0,
        0,
        0,
        canvas.height
    );

    gradient.addColorStop(0, "#02030a");
    gradient.addColorStop(1, "#071124");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    stars.forEach(star => {

        star.alpha += star.speed * star.direction;

        if (star.alpha >= 1) {

            star.direction = -1;

        }

        if (star.alpha <= 0.15) {

            star.direction = 1;

        }

        ctx.beginPath();

        ctx.fillStyle =
            "rgba(255,255,255," + star.alpha + ")";

        ctx.arc(
            star.x,
            star.y,
            star.radius,
            0,
            Math.PI * 2
        );

        ctx.fill();

    });

    requestAnimationFrame(drawStars);

}

drawStars();

// ===============================
// INTRO TEXT
// ===============================

const introLines = [

    "Hey...",

    "I made something for you.",

    "Wear your prettiest smile...",

    "Because tonight...",

    "I have a story to tell."

];

const storyLines = [

    "We've known each other since 2013.",

    "Thirteen years.",

    "We weren't always lovers.",

    "For years...",

    "We kept chasing the wrong people.",

    "Trying to earn love from people who never truly cared.",

    "Yet somehow...",

    "Life kept bringing us back together.",

    "Again.",

    "And again.",

    "Every single time.",

    "Until one day...",

    "We finally realised what we truly meant to each other."

];

const typewriter =
document.getElementById("typewriter");

const storyLine =
document.getElementById("storyLine");

const intro =
document.getElementById("intro");

const story =
document.getElementById("story");

const reveal =
document.getElementById("titleReveal");

const music =
document.getElementById("music");

let started = false;

// ===============================
// TYPEWRITER
// ===============================

function typeText(element, text, speed = 55) {

    return new Promise(resolve => {

        element.innerHTML = "";

        let i = 0;

        function typing() {

            if (i < text.length) {

                element.innerHTML += text.charAt(i);

                i++;

                setTimeout(typing, speed);

            }

            else {

                resolve();

            }

        }

        typing();

    });

}
// ======================================
// PLAY INTRO
// ======================================

async function playIntro() {

    document.getElementById("tapAnywhere").style.display = "none";

    for (const line of introLines) {

        await typeText(typewriter, line);

        await wait(1700);

        typewriter.classList.add("fadeOut");

        await wait(800);

        typewriter.classList.remove("fadeOut");

        typewriter.innerHTML = "";

    }

    intro.style.display = "none";

    playStory();

}



// ======================================
// PLAY STORY
// ======================================

async function playStory() {

    story.style.display = "flex";

    for (const line of storyLines) {

        await typeText(storyLine, line, 45);

        await wait(1900);

        storyLine.classList.add("fadeOut");

        await wait(700);

        storyLine.classList.remove("fadeOut");

        storyLine.innerHTML = "";

    }

    story.style.display = "none";

    showTitle();

}



// ======================================
// TITLE REVEAL
// ======================================

function showTitle() {

    reveal.style.display = "flex";

}



// ======================================
// START EVERYTHING
// ======================================

document.body.addEventListener("click", () => {

    if (started) return;

    started = true;

    music.play().catch(() => {});

    playIntro();

}, { once: true });



// ======================================
// METEORS
// ======================================

const meteorContainer =
document.getElementById("meteorContainer");

function createMeteor() {

    const meteor =
    document.createElement("div");

    meteor.className = "meteor";

    meteor.style.top =
        Math.random() * 35 + "%";

    meteor.style.left =
        60 + Math.random() * 30 + "%";

    meteorContainer.appendChild(meteor);

    setTimeout(() => {

        meteor.remove();

    }, 2200);

}
