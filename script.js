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
// ===============================
// WAIT FUNCTION
// ===============================

function wait(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

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
// ======================================
// RANDOM METEOR LOOP
// ======================================

function meteorLoop() {

    createMeteor();

    const nextTime =
        5000 + Math.random() * 18000;

    setTimeout(meteorLoop, nextTime);

}

setTimeout(meteorLoop, 4000);



// ======================================
// SUBTLE MOON GLOW
// ======================================

const moon =
document.getElementById("moon");

setInterval(() => {

    moon.style.filter =
        "brightness(" +
        (1 + Math.random() * 0.08) +
        ")";

}, 1800);



// ======================================
// TITLE SHIMMER
// ======================================

const title =
document.getElementById("title");

setInterval(() => {

    title.animate(

        [

            {
                opacity:0.92,
                transform:"scale(1)"
            },

            {
                opacity:1,
                transform:"scale(1.015)"
            },

            {
                opacity:0.92,
                transform:"scale(1)"
            }

        ],

        {

            duration:2600

        }

    );

},3200);



// ======================================
// SHOOTING STAR ON LOAD
// ======================================

setTimeout(() => {

    createMeteor();

},2500);



// ======================================
// END OF CHAPTER 1
// ======================================

console.log(
"🌙 Project Moonlight — Chapter 1 Loaded Successfully ❤️"
);
// ===============================
// CHAPTER 2
// ===============================

const chapter2Message =
`The boy you've treated as a human for the first time, making him realise he matters and how he deserves everything in this world is returning all that in the form of love to the most gorgeous, creative and the most beautiful woman I know.

This gift is just a really short reminder of my love for you.

I can't express it in any way because love is felt, not expressed.

I wonder what my life would've been like without you.

And now here I am...

Reminding you of everything you once reminded me.

Everyone deserves to be loved.

Everyone.

And I'll love you till the end of the Doomsday Clock, ensuring I take this love of mine for you to our graves.`;

const chapter2Typing =
document.getElementById("chapter2Typing");

let chapter2Started = false;

window.addEventListener("scroll",()=>{

    if(chapter2Started) return;

    const section =
    document.getElementById("chapter2");

    const top =
    section.getBoundingClientRect().top;

    if(top < window.innerHeight-150){

        chapter2Started = true;

        typeText(
            chapter2Typing,
            chapter2Message,
            28
        );

    }

});
function openPhoto(photo) {
    const popup = document.getElementById("expandedPhoto");
    const largeImage = document.getElementById("largeImage");

    largeImage.src = photo.src;
    popup.style.display = "flex";

    document.body.style.overflow = "hidden";
}


function closePhoto() {
    const popup = document.getElementById("expandedPhoto");

    popup.style.display = "none";
    document.body.style.overflow = "auto";
}


/* Add a small floating movement to the scattered photos */

const photos = document.querySelectorAll(".memory-photo");

photos.forEach((photo) => {

    photo.addEventListener("mousemove", () => {
        photo.style.transform += " translateY(-8px)";
    });

    photo.addEventListener("mouseleave", () => {
        photo.style.transform = "";
    });

});


/* Make photos appear when the gallery enters the screen */

const gallery = document.querySelector(".memory-gallery");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting) {
            photos.forEach(photo => {
                photo.style.animationPlayState = "running";
            });
        }

    });

}, {
    threshold: 0.3
});


if(gallery) {
    observer.observe(gallery);
}
/* VINYL RECORD FLIP */

function flipRecord(record) {
    record.classList.toggle("flipped");
}
/* TIMELINE SCROLL ANIMATION */

const timelineItems = document.querySelectorAll(".timeline-item");

const timelineObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });

}, {
    threshold: 0.2
});


timelineItems.forEach(item => {
    timelineObserver.observe(item);
});



/* Animate timeline line when section appears */

const timeline = document.querySelector(".timeline");

const lineObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting) {
            timeline.classList.add("timeline-active");
        }

    });

}, {
    threshold: 0.3
});


if(timeline) {
    lineObserver.observe(timeline);
}
/* 50 THINGS SCROLL REVEAL */

const promiseCards = document.querySelectorAll(".promise-card");


const promiseObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});


promiseCards.forEach(card => {
    promiseObserver.observe(card);
});
/* OPEN WHEN LETTERS */

function openLetter(letter) {
    letter.classList.toggle("open");
}
/* 15 THINGS I LIKE ABOUT YOU - TYPEWRITER */
/* 15 THINGS I LIKE - SIMPLE VERSION */

window.addEventListener("load", function () {

    const likeBox = document.getElementById("likeText");

    if (!likeBox) return;

    const likes = [
        "The way you care about people.",
        "Your laughter.",
        "Your ambitions which are really strong.",
        "You always make my ordinary days better.",
        "You never give up on me.",
        "You make me laugh.",
        "Even at your worst you try to be good for everyone.",
        "You love people deeply.",
        "You understand the line between morality and legality.",
        "You stand for what's right, not for who's right.",
        "You never leave my side.",
        "You are the best daughter.",
        "You are the best sister.",
        "You are the bestest friend.",
        "And you are the bestest bestest bestest girlfriend Aaratrikaaa ❤️"
    ];

    let index = 0;

    function addLine() {

        if (index < likes.length) {

            likeBox.innerHTML += likes[index] + "<br><br>";

            index++;

            setTimeout(addLine, 800);
        }

    }

    addLine();

});
/* 10 THINGS I HATE - SIMPLE VERSION */

window.addEventListener("load", function () {

    const hateBox = document.getElementById("hateText");

    if (!hateBox) return;

    const hates = [
        "I hate how you're so far from me.",
        "I hate how you're so much more beautiful than me.",
        "I hate how you always force me to confront my fears.",
        "I hate whenever I'm the cause of your tears.",
        "I hate how you're always feeling that you're not good.",
        "I hate how you never forcefully snatch my food.",
        "I hate the way you're always being treated.",
        "I hate the way you're never nicely greeted.",
        "And what I hate the most is the fact that every cell and every fragment of my soul could never hate you.",
        "For they'll love you and will always do. ❤️"
    ];


    let index = 0;


    function addHateLine() {

        if (index < hates.length) {

            hateBox.innerHTML += hates[index] + "<br><br>";

            index++;

            setTimeout(addHateLine, 900);

        }

    }


    addHateLine();

});
/* FINAL LETTER TYPEWRITER */

const finalLetter = `
And when I die, the bugs are gonna feel the taste of guilt, kindness and most importantly, the taste of a certain person, who courses through my veins as blood, who stays in my heart and with every beat, I'm reminded of her.

To this day I have no idea what I have done without you. From the moment I met you, not a single day has gone by when I haven't thought of you.

You are in my very soul. If anything good ever happened in my life it was you.

You make me who I am Aaratrika even if you don't realise it.

You made me realise how important it is to stand up to others and to your problems.

You complete me.

I know I'm not the bf you deserve. Ik I'm ungrateful and a whiny brat, who keeps on crying and hurting you.

But even if you got a new bf, he would not love you the same way I do.

He would not eat with the same pace I do. He would never see you with the fine details I see you with.

I always work upon myself, using your advice and I'll keep on doing that.

Ik I'm a manchild but I'll change that.

If I ever go wrong somewhere, promise me you'll slap me and remind me who I really am.

You are my Mary, my Gwen, my Hannah, my Ae sun.

You're my everything Aaratrika, my everything.

I love you and I'll always do.

I promise I'll never leave you.

To you till the next 2000 years.

-Aarav
`;


let finalIndex = 0;
let finalTimer;


function startFinalLetter() {

    const box = document.getElementById("finalText");

    if(!box) return;

    box.innerHTML = "";
    finalIndex = 0;

    clearInterval(finalTimer);

    finalTimer = setInterval(() => {

        if(finalIndex < finalLetter.length) {

            box.innerHTML += finalLetter[finalIndex];
            finalIndex++;

        } else {

            clearInterval(finalTimer);
            launchConfetti();

        }

    }, 40);
}


function restartLetter() {
    startFinalLetter();
}


function launchConfetti() {

    for(let i = 0; i < 80; i++) {

        let piece = document.createElement("div");

        piece.className = "confetti";

        piece.style.left = Math.random() * 100 + "vw";
        piece.style.top = "-20px";

        document.body.appendChild(piece);

        setTimeout(() => {
            piece.remove();
        },3000);
    }

}


window.addEventListener("load", startFinalLetter);
