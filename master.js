
let teckSkills = document.querySelectorAll(".containerTeckSkill .skills");
let ldSkills = document.querySelector(".movingSkills");



// let cirOne = document.getElementById("CirOne");
// let CirTwo = document.getElementById("CirTwo");
// let CirThre = document.getElementById("CirThre");
// let CirFour = document.getElementById("CirFour");

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
        // cirOne.style.strokeDashoffset= "455";
        // CirTwo.style.strokeDashoffset= "325";
        // CirThre.style.strokeDashoffset= "410";
        // CirFour.style.strokeDashoffset= "435";
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


// for project btns change
let AllBtnsProject = document.querySelectorAll(".projectsCap .head .btChange a");
AllBtnsProject.forEach((btn)=> {
    btn.addEventListener("click", ()=> {
        AllBtnsProject.forEach((btn) => {
            btn.classList.remove("active");
            let getData = btn.dataset.clasg;
            let showBig = document.querySelector(`.${getData}`);
            showBig.classList.remove("active");
        });
        btn.classList.add("active");
        let getData = btn.dataset.clasg;
        let showBig = document.querySelector(`.${getData}`);
        showBig.classList.add("active");
    })
})

// let sliderProjects = document.querySelector(".projectsCap .sliderProjects");
// let test2 = document.querySelector(".projectsCap .testGrill");
// let test3 = document.querySelector(".projectsCap .Gap");

// let Abtn = document.querySelector(".projectsCap .head .btChange .btnA");
// let Bbtn = document.querySelector(".projectsCap .head .btChange .btnB");
// let Cbtn = document.querySelector(".projectsCap .head .btChange .btnC");
// console.log(Abtn);

// if (Abtn.classList.contains("active")) {
//     sliderProjects.style.display = "block";
// }else { sliderProjects.style.display = "none"; }
// if (Bbtn.classList.contains("active")) {
//     test2.style.display = "block";
// }else { test2.style.display = "none"; }
// if (Cbtn.classList.contains("active")) {
//     test3.style.display = "block";
// }else { test3.style.display = "none"; }