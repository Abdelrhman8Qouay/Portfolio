
const dataProjects = [
    {
        "name": "E,commerce Product Page",
        "image": "./assets/projects/ecomPageChallenge.png",
        "describe": "E,commerce Page, with frontend mentor challenge I used HTML & CSS & JavaScript.",
        "viewPage":"https://qouaynt.github.io/E-commerce-product-page-Challenge-KD/",
        "codePage":"https://github.com/qouaynt/E-commerce-product-page-Challenge-KD"
    },
    {
        "name": "Tong Template",
        "image": "./assets/projects/TongTem.png",
        "describe": "without any css frameworks, I used for this Template HTML & CSS & JavaScript.",
        "viewPage":"https://qouaynt.github.io/TONG-template/",
        "codePage":"https://github.com/qouaynt/TONG-template"
    },
    {
        "name": "Simple Weather App F1",
        "image": "./assets/projects/weatherImg.png",
        "describe": "this is Weather from rest Api using HTML & CSS & JavaScript.",
        "viewPage":"https://qouaynt.github.io/SimpleWeather/",
        "codePage":"https://github.com/qouaynt/SimpleWeather"
    },
    {
        "name": "Rest Countries Mentor",
        "image": "./assets/projects/restCountries.png",
        "describe": "this is an app show all countries with search and filtering from rest Api using HTML & CSS & JavaScript & VueJs.",
        "viewPage":"",
        "codePage":"https://github.com/qouaynt/api-countries"
    },
    {
        "name": "Quiz App QACS",
        "image": "./assets/projects/QACS.png",
        "describe": "this is an app for simple quiz for each tool and language programming",
        "viewPage":"https://qouaynt.github.io/Quiz-APP-QACS/",
        "codePage":"https://github.com/qouaynt/Quiz-APP-QACS"
    },
    {
        "name": "Video Template Page Youtube",
        "image": "./assets/projects/undifBack.png",
        "describe": "a simple template of videos for youtube",
        "viewPage":"https://qouaynt.github.io/Quiz-APP-QACS/",
        "codePage":"https://github.com/qouaynt/show-video-template-of-youtube"
    }
];

const dataSkills = [
    {
        "name": "Bootstrap5",
        "image": "./assets/Icons/bootstrap-5-logo-icon.png",
        "describe": "Bootstrap: my favorite framework with css"
    },
    {
        "name": "HTML5",
        "image": "./assets/Icons/html-icon.png",
        "describe": "HTML:"
    },
    {
        "name": "CSS3",
        "image": "./assets/Icons/css-icon.png",
        "describe": "CSS:"
    },
    {
        "name": "VueJS",
        "image": "./assets/Icons/vue-js-icon.png",
        "describe": "VueJs: with version 2 or 3"
    },
    {
        "name": "JavaScript",
        "image": "./assets/Icons/javascript-programming-language-icon.png",
        "describe": "JavaScript: your page dancing 😂"
    },
    {
        "name": "MySql",
        "image": "./assets/Icons/mysql-icon.png",
        "describe": "MySql: Work on it was weak but I understand it without a problem"
    },
    {
        "name": "GitHup",
        "image": "./assets/Icons/github-icon.png",
        "describe": "GitHup: I need a little more digging but the basic work is excellent don't worry 😂"
    },
    {
        "name": "Git VCS",
        "image": "./assets/Icons/git-icon.png",
        "describe": "Git: I was very close to getting a mastery badge but unfortunately next time"
    },
    {
        "name": "Sass",
        "image": "./assets/Icons/sass-icon.png",
        "describe": "Sass: A little dealing and patience with a master"
    },
    {
        "name": "Wordpress",
        "image": "./assets/Icons/wordpress-icon.png",
        "describe": "Wordpress: One or more pages, but do not worry, mastering it is simple with another project. Try and you will see, but make sure that you are on your simple path"
    },
    {
        "name": "GulpJs",
        "image": "./assets/Icons/gulp-js-icon.png",
        "describe": "GulpJs:"
    },
    {
        "name": "TypeScript",
        "image": "./assets/Icons/typescript-programming-language-icon.png",
        "describe": "TypeScript: A little dealing and patience with a master"
    },
    {
        "name": "Pinia",
        "image": "./assets/Icons/Pinia-img.svg",
        "describe": "Pinia: get master now"
    },
    {
        "name": "ViteJs",
        "image": "./assets/Icons/viteJs-image.png",
        "describe": "ViteJs: A little dealing and patience with a master"
    },
    {
        "name": "PugJs",
        "image": "./assets/Icons/pugjs_logo_icon_170825.svg",
        "describe": "PugJs:"
    },
    {
        "name": "NuxtJs",
        "image": "./assets/Icons/nuxt-js-icon.png",
        "describe": "NuxtJs: A little dealing and patience with a master"
    },
    {
        "name": "Json",
        "image": "./assets/Icons/json160-min.gif",
        "describe": "Json:"
    },
    {
        "name": "C++",
        "image": "./assets/Icons/c-plus-plus-programming-language-icon.png",
        "describe": "C++: Not Good but i do not need except the old syntax"
    },
    {
        "name": "Python",
        "image": "./assets/Icons/python-programming-language-icon.png",
        "describe": "Python: get professional for the rest of life"
    }
];


// get all skills from json ( create_object ) and put it
create_object(dataSkills, "skill");

// get all projects from json ( create_object ) and put it
create_object(dataProjects, "project");


function create_object(Values, forE) {
    try {
        // make the empty content that will containing all skills from json file
        let contentDiv = "";

        if (forE === "skill") {
            // for loop with all objects of json file of skills
            for(let i = 0; i < Values.length; i++) {
                contentDiv +=  `<div class="boxS" data-aos="fade-down" data-aos-duration="2000" data-bs-toggle="tooltip" data-bs-placement="top" title="${Values[i].describe}">
                                    <div class="imgBox">
                                        <img src="${Values[i].image}" alt="${Values[i].name}">
                                    </div>
                                </div>`;
            }
            // put the variable content to html file and make it life
            let sicat = document.querySelector(".container .staticSkills");
            sicat.innerHTML = contentDiv;
        } else if (forE === "project") {
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
        }

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
