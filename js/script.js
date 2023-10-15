import skills from "../jsons/skills.json" assert { type: "json" };

const largeScreenSize = 990;
const mediumScreenSize = 672;

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
            } else {
                entry.target.classList.remove("visible");
            }
        })
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
}

function init() {
    observeHiddenElements();

    changeSkillRowAmount();
    window.addEventListener("resize", changeSkillRowAmount)
    
    fillSkills();

}

window.onload = init;