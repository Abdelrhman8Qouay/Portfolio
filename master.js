let contSkills = document.querySelector('.containSkills');
    let imgScan = document.querySelector(".imgscan");
    let hTwo = document.querySelector (".infoCvSkills h4");
    let btnPosit = document.querySelector (".infoCvSkills button");


    let teckSkills = document.querySelectorAll(".containerTeckSkill .skills");
    let ldSkills = document.getElementById("ld");



    let cirOne = document.getElementById("CirOne");
    let CirTwo = document.getElementById("CirTwo");
    let CirThre = document.getElementById("CirThre");
    let CirFour = document.getElementById("CirFour");

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
        if (window.scrollY >= contSkills.offsetTop - 600) {
            imgScan.style.right = "0";
            hTwo.style.left = "0";
            btnPosit.style.left = "0";
        }

        if (window.scrollY >= contSkills.offsetTop - 500) {
            contSkills.style.left = "0";
        }

        if (window.scrollY >= ldSkills.offsetTop - 500) {
            teckSkills.forEach((skill) => {
                skill.style.width = skill.dataset.width;
            })
            cirOne.style.strokeDashoffset= "455";
            CirTwo.style.strokeDashoffset= "325";
            CirThre.style.strokeDashoffset= "410";
            CirFour.style.strokeDashoffset= "435";

        }
    }



