
let teckSkills = document.querySelectorAll(".containerTeckSkill .skills");
let ldSkills = document.querySelector(".movingSkills");


let goBtns = document.querySelector (".btns");
let hireBtn = document.querySelector (".btns .hireBtn");
let cvBtn = document.querySelector (".btns .cvBtn");

window.onscroll = () => {
    // for hire and cv buttons
    if (window.scrollY >= goBtns.offsetTop ) {
        hireBtn.classList.add("floating");
        cvBtn.classList.add("floating");
    }else {
        hireBtn.classList.remove("floating");
        cvBtn.classList.remove("floating");
    }


    // for move at down

    if (window.scrollY >= ldSkills.offsetTop - 500) {
        teckSkills.forEach((skill) => {
            skill.style.width = skill.dataset.width;
            skill.textContent = skill.dataset.width;
        })
    } else if (window.scrollY < ldSkills.offsetTop - 500) {
        teckSkills.forEach((skill) => {
            skill.style.width = "0";
            skill.textContent = "0%";
        })
    }
}


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


