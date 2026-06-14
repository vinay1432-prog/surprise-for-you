const beginBtn = document.getElementById("beginBtn");

const title = document.querySelector(".title");
const subtitle = document.querySelector(".subtitle");

const infinityScreen = document.getElementById("infinityScreen");
const collegeScreen = document.getElementById("collegeScreen");
const reunionScreen = document.getElementById("reunionScreen");

const nextBtn = document.getElementById("nextBtn");
const continueBtn = document.getElementById("continueBtn");

const birthdayScreen = document.getElementById("birthdayScreen");
const birthdayMessage = document.getElementById("birthdayMessage");

const bgMusic = document.getElementById("bgMusic");
const celebrationMusic =
    document.getElementById("celebrationMusic");

function showText(message) {

    title.classList.remove("fade-in");

    void title.offsetWidth;

    title.innerHTML = message;

    title.classList.add("fade-in");
}

function switchToCelebrationMusic(){

    const fadeOut = setInterval(() => {

        if(bgMusic.volume > 0.02){

            bgMusic.volume -= 0.02;

        }else{

            clearInterval(fadeOut);

            bgMusic.pause();

            celebrationMusic.currentTime = 0;
            celebrationMusic.volume = 0.3;

            celebrationMusic.play().catch(err => {
                console.log(err);
            });
        }

    },150);
}

function launchCelebrationBlast(){

    confetti({
        particleCount:300,
        spread:180,
        startVelocity:60,
        origin:{
            x:0.5,
            y:0.6
        }
    });

    const duration = 8000;

    const end = Date.now() + duration;

    const interval = setInterval(() => {

        if(Date.now() > end){

            clearInterval(interval);
            return;
        }

        confetti({
            particleCount:80,
            spread:120,
            startVelocity:45,
            origin:{
                x:Math.random(),
                y:Math.random() * 0.5
            }
        });

    },700);

}

beginBtn.addEventListener("click", () => {
    bgMusic.volume = 0;
    bgMusic.play();

    let volume = 0;

    const fadeMusic = setInterval(() => {

        if(volume < 0.12){

            volume += 0.01;
            bgMusic.volume = volume;

        }else{

            clearInterval(fadeMusic);

        }

    }, 200);

    beginBtn.style.display = "none";
    subtitle.style.display = "none";

    showText("Every year has 365 days...");

    setTimeout(() => {
        showText("Most are ordinary...");
    }, 3000);

    setTimeout(() => {
        showText("But one day shines brighter...");
    }, 6000);

    setTimeout(() => {
        showText("15 June ❤️");
    }, 9000);

    setTimeout(() => {
        showText("Because today belongs to someone special...");
    }, 12000);

    setTimeout(() => {
        showText("Meghana SN ✨");
    }, 15000);

    setTimeout(() => {

        title.style.display = "none";

        infinityScreen.style.display = "flex";

    }, 19000);

    setTimeout(() => {

        infinityScreen.style.display = "none";

        collegeScreen.style.display = "flex";

    }, 26000);

});

nextBtn.addEventListener("click", () => {

    collegeScreen.style.display = "none";

    reunionScreen.style.display = "flex";

});

continueBtn.addEventListener("click", () => {

    reunionScreen.style.display = "none";

    birthdayScreen.style.display = "flex";

    const message = `Dear Meghana,

Life keeps changing.

People come and go.

Paths often become different.

But some friendships are simply too valuable to lose.

You were, are, and will always be irreplaceable.

I genuinely hope we continue sharing stories, celebrating victories, supporting each other through challenges, and creating more memories together.

Happy Birthday ❤️`;

    let index = 0;

    function typeWriter() {

        if(index < message.length){

            birthdayMessage.innerHTML += message.charAt(index);

            index++;

            setTimeout(typeWriter, 35);

        }else{

            document.querySelector(".final-infinity").style.display = "block";

            document.querySelector(".final-text").style.display = "block";

            switchToCelebrationMusic();

            launchCelebrationBlast();

        }
    }

    typeWriter();

});