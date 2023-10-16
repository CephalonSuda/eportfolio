import skills from "../jsons/skills.json" assert { type: "json" };
import projects from "../jsons/projects.json" assert { type: "json" };

const largeScreenSize = 990;
const mediumScreenSize = 672;

let amountScrolled;

const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

"use strict";

function changeSkillRowAmount(x) {
    const skillsContainer = document.querySelector("#skills ul.skills-container");
    const screenWidth = x?.currentTarget?.innerWidth ?? window.screen.width;
    
    if (screenWidth <= mediumScreenSize) {
        skillsContainer.style["grid-template-columns"] = `repeat(${Math.ceil(skills.length/3)}, 100px)`;
    } else if (screenWidth <= largeScreenSize) {
        skillsContainer.style["grid-template-columns"] = `repeat(${Math.ceil(skills.length/3)}, 150px)`;
    } else {
        skillsContainer.style["grid-template-columns"] = `repeat(${Math.ceil(skills.length/4)}, 150px)`;
    }
}

function fillSkills() {

    const skillsContainer = document.querySelector("#skills ul.skills-container");

    for (const skill of skills){

        const img = document.createElement("img");
        img.src = `images/logos/${skill.image}`;
        img.alt = skill.alt;

        const a = document.createElement("a");
        a.href = skill.link;
        a.target = "_blank";

        const li = document.createElement("li");
        li.classList.add("skill-item");

        a.append(img);
        li.append(a);

        skillsContainer.append(li)
    }

}

function observeHiddenElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        })
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
}

function fillProjects() {

    const projectsContainer = document.querySelector("#projects .projects-container");
    
    for (const project of projects) {

        projectsContainer.insertAdjacentHTML("beforeend", `
            <div class="project">
                <div class="project-img-container">
                    <img src="/images/projects/${project.image[0]}"/>
                </div>
                <p class="project-title">${project.name}</p>
                <div class="tags">
                    ${project.tags.map((tag) => {
                        return (`<p class="tag">${tag}</p>`)
                    }).join("")}
                </div>
                <svg width="251" height="341" viewBox="0 0 251 341" fill="none" xmlns="http://www.w3.org/2000/svg" class="arrowRightProject">
                    <path d="M0 338.027L188.889 169.976L250.361 169.976L65.1343 338.027L0 338.027Z" fill="currentColor"/>
                    <path d="M187.486 170.256L0.640621 2.20526L63.7308 2.20526L251.001 170.256L187.486 170.256Z" fill="currentColor"/>
                </svg>
            </div>       
        `)
    }
}

function showProjectInfo() {
    
}

function addProjectPopUp(title) {

    const project = projects.find((project) => project.name === title);

    document.body.insertAdjacentHTML("beforeend", `
        <div class="pop-up-project">
            <button class="close-project-btn">
                <svg width="332" height="332" viewBox="0 0 332 332" fill="none" xmlns="http://www.w3.org/2000/svg" class="close-project">
                    <path d="M88.5332 262.833L69.1665 243.467L146.633 166L69.1665 88.5334L88.5332 69.1667L166 146.633L243.467 69.1667L262.833 88.5334L185.366 166L262.833 243.467L243.467 262.833L166 185.367L88.5332 262.833Z" fill="currentColor  "/>
                </svg>
            </button>
            <ul class="tags-pop-up">
                ${project?.tags.map((tag) => {
                    return `<li><p>${tag}</p></li>`
                }).join("")}
            </ul>
            <div class="pop-up-info-container">
                <div class="pop-up-left">
                    <div class="pop-up-title">
                        <h2>Why</h2>
                        <div></div>
                    </div>
                    <p class="textblock-info">
                        ${project?.description}
                    </p>
                </div>
                ${project?.image && project?.image.length?
                    `
                    <div class="pop-up-right">
                        ${project.image.map((image) => {
                        return `<a href="images/projects/${image}" target="_blank"><img alt="${image.split(".")[0]}" src="images/projects/${image}"/></a>`
                        }).join("")}
                    </div>
                    `
                    :
                    ""
                }
            </div>
                ${project?.link && Object.entries(project?.link).length?
                    `
                    <div class="pop-up-links">
                        ${Object.entries(project.link).map((entry) => {
                            return `<a href="${entry[1]}" target="_blank">${entry[0]}</a>`
                        }).join("")}
                    </div>
                    `
                    :
                    ""
                }
        </div>
    `)

    const closePopUpBtn = document.querySelector(".pop-up-project .close-project-btn");
    closePopUpBtn.addEventListener("click", closePopup);

    const popUpContainer = document.querySelector(".pop-up-project");

    popUpContainer.animate([
        {opacity: 0},
        {opacity: 1}
    ], {
        fill: "forwards",
        duration: 500,
        iterations: 1,
    })

}

function handleProjectClick(project) {

    amountScrolled = window.scrollY;
    const circle = document.querySelector(".circle-cover");

    
    let target = project.target;

    while (target.tagName !== "DIV" && !target.classList.contains("project")){
        target = target.closest(".project");
    }

    const title = target.querySelector("p")?.innerText;
    const fastAnimate = {
        fill: "forwards",
        duration: 1,
        iterations: 1,
      }

    circle.style["left"] = `${project.clientX}px`;
    circle.style["top"] = `${project.clientY}px`; 

    circle.animate([
        { "zIndex": -100},
        { "zIndex": 90} 
    ],
    fastAnimate)
    circle.animate([
        { opacity: 0},  
        { opacity: 1}
    ],
    fastAnimate)
    circle.animate([
        { width: "50px"},
        { width: "1000%"}
    ], 
    {
        fill: "forwards",
        duration: 2000,
        iterations: 1,
    })

    header.style.display = "none";
    main.style.display = "none";
    footer.style.display = "none";
    


    setTimeout(() => {
        addProjectPopUp(title);

        //const popUpContainer = document.querySelector(".pop-up-project");
        //popUpContainer.style.display = "block";
    }, 1000)


    showProjectInfo();
}

function closePopup() {

    const popUpContainer = document.querySelector(".pop-up-project");

    popUpContainer.animate([
        {opacity: 1},
        {opacity: 0}
    ], {
        fill: "forwards",
        duration: 500,
        iterations: 1,
    })

    setTimeout(() => {
        popUpContainer.style.display = "none";
        popUpContainer.remove();
    }, 1000)


    const circle = document.querySelector(".circle-cover");
    const fastAnimate = {
        fill: "forwards",
        duration: 1,
        iterations: 1,
    }

    circle.animate([
        { width: "1000%"},
        { width: "50px"}
    ], 
    {
        fill: "forwards",
        duration: 1000,
        iterations: 1,

    });

    setTimeout(() => {
        circle.animate([
            { opacity: 1},  
            { opacity: 0}
        ],
        fastAnimate)
    
        circle.animate([
            { "zIndex": 90},
            { "zIndex": -100} 
        ],
        fastAnimate);
        
        header.style.display = "block";
        main.style.display = "flex";
        footer.style.display = "block";

        window.scrollTo({
            top : amountScrolled,
            behavior: "instant"
        });

    }, 1000)


}

function init() {
    observeHiddenElements();

    changeSkillRowAmount();
    window.addEventListener("resize", changeSkillRowAmount)
    
    fillSkills();
    fillProjects();

    const projectsAll = document.querySelectorAll("#projects .project");
    projectsAll.forEach((project) => project.addEventListener("click", handleProjectClick));

}

window.onload = init;