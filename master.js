
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

// get the function of skills ( createSkill ) and put it
createSkill();

// get the function of skills ( createSkill ) and put it
createProject();


async function createSkill() {
    try {
        // get with fetch the json file and make it as object with parse
        let x = await fetch("./jsonFiles/skills.json");
        let textVal = await x.text();
        let Values = await JSON.parse(textVal);

        // make the empty content that will containing all skills from json file
        let contentDiv = "";

        // for loop with all objects of json file of skills
        for(let i = 0; i < Values.length; i++) {
            contentDiv +=  `<div class="boxS" data-aos="fade-down" data-aos-duration="2000" data-bs-toggle="tooltip" data-bs-placement="top" title="${Values[i].describe}">
                                <div class="imgBox">
                                    <img src="${Values[i].image}" loading="lazy" alt="${Values[i].name}">
                                </div>
                            </div>`;
        }
        // put the variable content to html file and make it life
        let static = document.querySelector(".staticSkills");
        static.innerHTML = contentDiv;

        // for tooltip of bootstrap for skills with title to work with them
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
})
    }
    catch(err) {
        console.log(err.message);
    }
}

async function createProject() {
    try {
        // get with fetch the json file and make it as object with parse
        let x = await fetch("./jsonFiles/projects.json");
        let textVal = await x.text();
        let Values = await JSON.parse(textVal);

        // make the empty content that will containing all skills from json file
        let contentDiv = "";

        // for loop with all objects of json file of skills
        for(let i = 0; i < Values.length; i++) {
            contentDiv +=  `<div class="proBox" data-aos="fade-down" data-aos-duration="2000">
                                <div class="mainCard">
                                    <div class="imgProB">
                                        <img src="${Values[i].image}" alt="${Values[i].name}">
                                    </div>
                                </div>
                                <div class="bodyCard">
                                    <div class="title">${Values[i].name}</div>
                                    <p>${Values[i].describe}</p>
                                    <div class="btnsCard">
                                        <a href="${Values[i].viewPage}"><ion-icon name="eye-outline"></ion-icon> View</a>
                                        <a href="${Values[i].codePage}"><ion-icon name="code-slash-outline"></ion-icon> Code</a>
                                    </div>
                                </div>
                            </div>`;
        }
        // put the variable content to html file and make it life
        let conProject = document.querySelector(".projectsCap .testGrill");
        conProject.innerHTML = contentDiv;

        // for tooltip of bootstrap for skills with title to work with them
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
})
    }
    catch(err) {
        console.log(err.message);
    }
}
