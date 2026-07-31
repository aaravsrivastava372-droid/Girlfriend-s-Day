// =========================
// INTRO MESSAGES
// =========================

const introMessages = [
    "Hey...",
    "I made something for you.",
    "Wear your prettiest smile...",
    "And scroll slowly."
];

const storyMessages = [
    "We've known each other since 2013.",
    "Thirteen years.",
    "For years...",
    "We kept chasing the wrong people.",
    "Trying to earn love from people who never truly cared.",
    "Yet somehow...",
    "Life kept bringing us back to each other.",
    "Again.",
    "And again.",
    "Every single time.",
    "Maybe...",
    "We were always meant to find our way back.",
    "Then one day...",
    "We finally realised what we truly meant to each other.",
    "Our friendship became something even more beautiful."
];

const introText = document.getElementById("intro-text");
const storyText = document.getElementById("storyText");

const introSection = document.getElementById("intro");
const storySection = document.getElementById("story");
const revealSection = document.getElementById("titleReveal");

const tapMessage = document.getElementById("tap-message");

const music = document.getElementById("bgMusic");

storySection.style.display = "none";
revealSection.style.display = "none";

let started = false;


// =========================
// TYPEWRITER
// =========================

function typeWriter(element, text, speed = 55) {

    return new Promise(resolve => {

        element.innerHTML = "";

        let i = 0;

        function typing() {

            if(i < text.length){

                element.innerHTML += text.charAt(i);

                i++;

                setTimeout(typing, speed);

            }

            else{

                resolve();

            }

        }

        typing();

    });

}


// =========================
// INTRO
// =========================

async function playIntro(){

    tapMessage.style.display="none";

    for(const line of introMessages){

        await typeWriter(introText,line);

        await new Promise(r=>setTimeout(r,1800));

        introText.innerHTML="";

    }

    introSection.style.display="none";

    playStory();

}



// =========================
// STORY
// =========================

async function playStory(){

    storySection.style.display="flex";

    for(const line of storyMessages){

        await typeWriter(storyText,line);

        await new Promise(r=>setTimeout(r,1800));

        storyText.style.opacity=".25";

        await new Promise(r=>setTimeout(r,400));

        storyText.style.opacity="1";

        storyText.innerHTML="";

    }

    storySection.style.display="none";

    revealSection.style.display="flex";

}



// =========================
// MUSIC
// =========================

document.body.addEventListener("click",()=>{

    if(started) return;

    started=true;

    music.play().catch(()=>{});

    playIntro();

});



// =========================
// SHOOTING STARS
// =========================

const shootingContainer=document.getElementById("shooting-stars");

function createStar(){

    const star=document.createElement("div");

    star.className="shooting-star";

    star.style.top=Math.random()*40+"%";

    star.style.left=(60+Math.random()*30)+"%";

    shootingContainer.appendChild(star);

    setTimeout(()=>{

        star.remove();

    },2000);

}

setInterval(createStar,12000);
