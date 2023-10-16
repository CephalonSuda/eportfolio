import skills from "../jsons/skills.json" assert { type: "json" };
import projects from "../jsons/projects.json" assert { type: "json" };

const largeScreenSize = 990;
const mediumScreenSize = 672;

let currentPage = 0;

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

function handleProjectClick(project) {
    console.log(project.querySelector("p").innerText)
}



function init() {
    observeHiddenElements();

    changeSkillRowAmount();
    window.addEventListener("resize", changeSkillRowAmount)
    
    fillSkills();
    fillProjects();

    const projectsAll = document.querySelectorAll("#projects .project");
    projectsAll.forEach((project) => project.addEventListener("click", () => handleProjectClick(project)))

}

window.onload = init;