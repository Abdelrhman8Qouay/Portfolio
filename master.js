
let teckSkills = document.querySelectorAll(".containerTeckSkill .skills");
let ldSkills = document.querySelectorAll(".movingSkills");

// Not Used Variables
let goBtns = document.querySelector (".btns");
let hireBtn = document.querySelector (".btns .hireBtn");
let cvBtn = document.querySelector (".btns .cvBtn");

window.onscroll = () => {
    // for move at down

    // moving each skill alone with scrolling
    teckSkills.forEach((skill) => {
        if (skill.getBoundingClientRect().top < 700) {
            skill.style.width = skill.dataset.width;
            skill.textContent = skill.dataset.width;
        } else if (skill.getBoundingClientRect().top > 700) {
            skill.style.width = "0";
            skill.textContent = "0%";
        }
    })
}

// for tooltip of bootstrap on page
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
})


// change the mode of page
let BtnMode = document.querySelector(".colorMode");
BtnMode.addEventListener("click", () => {
    document.body.classList.toggle("tmode");
})

// for effect of Location Box
let BtnLocation = document.querySelector(".containAllAbove .LocationBtn");
let LocationBox = document.querySelector("main .contentLoc");
let closeBtnLoc = document.querySelector(".closeLocation");

BtnLocation.addEventListener("click", () => {
    LocationBox.classList.toggle("active");
})
closeBtnLoc.addEventListener("click", () => {
    LocationBox.classList.remove("active");
})

// add the audio for any where in the page'
var onlineSound = new Audio("./assets/audios/notification1.mp3");

window.ononline = () => { onlineSound.play(); }

var sendingSound = new Audio("./assets/audios/notificationSending.mp3");

document.getElementById("subCont").onclick = () => {
    sendingSound.play();
}

// ------------------------------

// const skillsObj = [
//     {
//         name: "Bootstrap5",
//         image: "./assets/Icons/bootstrap-5-logo-icon.png",
//         describe: "Bootstrap: my favorite framework with css"
//     },
//     {
//         name: "HTML5",
//         image: "./assets/Icons/html-icon.png",
//         describe: "HTML:"
//     },
//     {
//         name: "CSS3",
//         image: "./assets/Icons/css-icon.png",
//         describe: "CSS:"
//     },
//     {
//         name: "VueJS",
//         image: "./assets/Icons/vue-js-icon.png",
//         describe: "VueJs: with version 2 or 3"
//     },
//     {
//         name: "JavaScript",
//         image: "./assets/Icons/javascript-programming-language-icon.png",
//         describe: "JavaScript: your page dancing 😂"
//     },
//     {
//         name: "MySql",
//         image: "./assets/Icons/mysql-icon.png",
//         describe: "MySql: Work on it was weak but I understand it without a problem"
//     },
//     {
//         name: "GitHup",
//         image: "./assets/Icons/github-icon.png",
//         describe: "GitHup: I need a little more digging but the basic work is excellent don't worry 😂"
//     },
//     {
//         name: "Git VCS",
//         image: "./assets/Icons/git-icon.png",
//         describe: "Git: I was very close to getting a mastery badge but unfortunately next time"
//     },
//     {
//         name: "Sass",
//         image: "./assets/Icons/sass-icon.png",
//         describe: "Sass: A little dealing and patience with a master"
//     },
//     {
//         name: "Wordpress",
//         image: "./assets/Icons/wordpress-icon.png",
//         describe: "Wordpress: One or more pages, but do not worry, mastering it is simple with another project. Try and you will see, but make sure that you are on your simple path"
//     },
//     {
//         name: "GulpJs",
//         image: "./assets/Icons/gulp-js-icon.png",
//         describe: "GulpJs:"
//     },
//     {
//         name: "TypeScript",
//         image: "./assets/Icons/typescript-programming-language-icon.png",
//         describe: "TypeScript: A little dealing and patience with a master"
//     },
//     {
//         name: "Pinia",
//         image: "./assets/Icons/Pinia-img.svg",
//         describe: "Pinia: get master now"
//     },
//     {
//         name: "ViteJs",
//         image: "./assets/Icons/viteJs-image.png",
//         describe: "ViteJs: A little dealing and patience with a master"
//     },
//     {
//         name: "PugJs",
//         image: "./assets/Icons/pugjs_logo_icon_170825.svg",
//         describe: "PugJs:"
//     },
//     {
//         name: "NuxtJs",
//         image: "./assets/Icons/nuxt-js-icon.png",
//         describe: "NuxtJs: A little dealing and patience with a master"
//     },
//     {
//         name: "Json",
//         image: "./assets/Icons/json160-min.gif",
//         describe: "Json:"
//     },
//     {
//         name: "Json",
//         image: "./assets/Icons/json160-min.gif",
//         describe: "Json:"
//     }
// ];


// for tooltip of bootstrap on page
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
})


