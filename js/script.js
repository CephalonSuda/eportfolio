"use strict";

// import skills from "../jsons/skills.json" assert { type: "json" };
// import projects from "../jsons/projects.json" assert { type: "json" };


const skills = [
    {
        "alt" : "Python logo",
        "image" : "python.png",
        "link": "https://www.python.org/"
    },
    {
        "alt" : "HTML5 logo",
        "image" : "html5.png",
        "link": "https://developer.mozilla.org/en-US/docs/Web/HTML"
    },
    {
        "alt" : "CSS3 logo",
        "image" : "css3.png",
        "link": "https://developer.mozilla.org/en-US/docs/Web/CSS"
    },
    {
        "alt" : "JS logo",
        "image" : "javascript.png",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    {
        "alt" : "React logo",
        "image" : "react.png",
        "link": "https://react.dev/"
    },
    {
        "alt" : "React Native logo",
        "image" : "react-native.png",
        "link": "https://reactnative.dev/docs/getting-started"
    },
    {
        "alt" : "ChartJS logo",
        "image" : "chartjs.png",
        "link": "https://www.chartjs.org/docs/latest/"
    },
    {
        "alt" : "Cypress logo",
        "image" : "cypress.png",
        "link": "https://docs.cypress.io/guides/overview/why-cypress"
    },
    {
        "alt" : ".NET Blazor logo",
        "image" : "dotnet-blazor.png",
        "link": "https://learn.microsoft.com/en-us/aspnet/core/blazor/?view=aspnetcore-7.0"
    },
    {
        "alt" : "C# logo",
        "image" : "csharp.png",
        "link": "https://learn.microsoft.com/en-us/dotnet/csharp/"
    },
    {
        "alt" : "TypeScript logo",
        "image" : "typescript.png",
        "link": "https://www.typescriptlang.org/docs/"
    },
    {
        "alt" : "Expo logo",
        "image" : "expo.png",
        "link": "https://docs.expo.dev/"
    },
    {
        "alt" : "Appium logo",
        "image" : "appium.png",
        "link": "https://appium.io/docs/en/2.1/"
    },
    {
        "alt" : "NodeJS logo",
        "image" : "nodejs.png",
        "link": "https://nodejs.org/en/docs"
    },
    {
        "alt" : "Jest logo",
        "image" : "jest.png",
        "link": "https://jestjs.io/docs/getting-started"
    },
    {
        "alt" : "Java logo",
        "image" : "java.png",
        "link": "https://docs.oracle.com/en/java/"
    },
    {
        "alt" : "JavaFX logo",
        "image" : "javafx.png",
        "link": "https://openjfx.io/"
    },
    {
        "alt" : "Kotlin logo",
        "image" : "kotlin.png",
        "link": "https://kotlinlang.org/docs/home.html"
    },
    {
        "alt" : "Scenebuilder logo",
        "image" : "scenebuilder.png",
        "link": "https://docs.oracle.com/javafx/scenebuilder/1/user_guide/jsbpub-user_guide.htm"
    },
    {
        "alt" : "MySQL logo",
        "image" : "mysql.png",
        "link": "https://dev.mysql.com/doc/"
    },
    {
        "alt" : "PostgreSQL logo",
        "image" : "postgresql.png",
        "link": "https://www.postgresql.org/docs/"
    },
    {
        "alt" : "MongoDB logo",
        "image" : "mongodb.png",
        "link": "https://www.mongodb.com/docs/"
    },
    {
        "alt" : "Neo4J logo",
        "image" : "neo4j.png",
        "link": "https://neo4j.com/docs/"
    },
    {
        "alt" : "Seaborn logo",
        "image" : "seaborn.png",
        "link": "https://seaborn.pydata.org/"
    },
    {
        "alt" : "Git logo",
        "image" : "git.png",
        "link": "https://git-scm.com/doc"
    },
    {
        "alt" : "Figma logo",
        "image" : "figma.png",
        "link": "https://www.figma.com"
    }
];

const projects = [
    {
        "name": "Vic",
        "image": ["vic_blazor.png", "vic_kotlin.png"],
        "description": "Group project in my second year of Applied Informatics. We were given the choice between two companies to create a project for. Ultimately, we were assigned a company within the school itself, 'VIC'. For this project, we needed to develop a web application that enabled them to keep track of virtual machine orders. As a group, we used .NET Blazor and C# to create a functional front-end and back-end. We encountered some challenges, particularly with lengthy forms on certain pages. However, in the end, we provided them with a working and excellent-looking web application.",
        "tags": [".NET Blazor", "Kotlin", "C#", "Figma", "Git"]
    },
    {
        "name": "Fluvius",
        "image": ["fluvius_java.png", "fluvius_react.png"],
        "description": "Group project in my second year of Applied Informatics. We had the opportunity to develop a web application for Fluvius. This application would serve as their dashboard for sustainability goals. Using React for the front-end and Node.js for the back-end, we created just that. Alongside the web app, we also developed a desktop application using Java. This application was more for administrative use, where an admin could change information within the system.",
        "tags": ["Java", "React", "NodeJS", "MySQL", "Figma", "Git"]
    },
    {
        "name": "Game webshop",
        "image": ["webshop.png"],
        "description": "Solo project during my second year in my course. We were given the option to choose what we were building. After struggling to find a creative idea, I came up with a webshop where you could search, look at, and 'buy' games. There was a login and register system to keep track of orders. I used React to create the front-end and also made a REST API with Node.js to keep track of all the data. Using MySQL, I stored everything necessary. The result was a responsive and clean webshop.",
        "tags": ["React", "NodeJS", "MySQL", "Git"]
    },
    {
        "name": "Rummikub",
        "image": ["rummikub_java.png"],
        "description": "Group project during my first year in my Applied Informatics course. We used Java along with JavaFX, and we employed Scenebuilder to create Rummikub. It was as good as we could make it with our skills back then and our knowledge of Java. The application needed to connect to an external database. We were told to use MySQL, which we did. The end result was a very rudimentary, but working application that simulated a very basic Rummikub game.",
        "tags": ["Java", "JavaFX", "Scenebuilder", "NodeJS", "MySQL", "Git"]
    }
]

const largeScreenSize = 990;
const mediumScreenSize = 672;

let amountScrolled;

const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

const goToTopButton = document.querySelector('.go-to-top-btn');



function openNav() {
    document.getElementById("navigation-overlay").style.height = "100%";
}
  
function closeNav() {
    document.getElementById("navigation-overlay").style.height = "0%";
}

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

function handleScrolling(e) {
    checkOffset();
    const scrollToTopBtn = document.querySelector(".go-to-top-btn");

    if (window.scrollY > 200) {
        scrollToTopBtn.style.display = "grid";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

function checkOffset() {
    function getRectTop(el){
      var rect = el.getBoundingClientRect();
      return rect.top;
    }
    
    if((getRectTop(goToTopButton) + document.body.scrollTop) + goToTopButton.offsetHeight >= (getRectTop(footer) + document.body.scrollTop) - 10)
      goToTopButton.style.position = 'absolute';
    if(document.body.scrollTop + window.innerHeight < (getRectTop(footer) + document.body.scrollTop))
      goToTopButton.style.position = 'fixed';
    
}


function init() {
    observeHiddenElements();

    changeSkillRowAmount();
    window.addEventListener("resize", changeSkillRowAmount)
    
    fillSkills();
    fillProjects();

    const projectsAll = document.querySelectorAll("#projects .project");
    projectsAll.forEach((project) => project.addEventListener("click", handleProjectClick));

    window.addEventListener('scroll', handleScrolling);
}


window.onload = init;
window.openNav = openNav
window.closeNav = closeNav;