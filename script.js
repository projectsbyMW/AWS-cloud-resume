/* ======================================================
   VISITOR COUNTER
====================================================== */

function getLambdaAPI() {

    const request = new XMLHttpRequest();

    request.onreadystatechange = function () {

        if (this.readyState === 4 && this.status === 200) {

            const counter = document.getElementById("my-demo");

            if (counter) {
                counter.innerHTML = this.responseText;
            }

        }

    };

    request.open(
        "GET",
        "https://ak86hn50r4.execute-api.us-east-1.amazonaws.com/dev1/Website_Visitors_Count",
        true
    );

    request.send();

}

/* ======================================================
   SMOOTH SCROLL
====================================================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

/* ======================================================
   HEADER BACKGROUND ON SCROLL
====================================================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.style.background = "rgba(11,11,11,.92)";
        header.style.backdropFilter = "blur(18px)";
        header.style.borderBottom = "1px solid rgba(255,255,255,.08)";

    } else {

        header.style.background = "rgba(11,11,11,.75)";
        header.style.borderBottom = "1px solid rgba(255,255,255,.05)";

    }

});

/* ======================================================
   ACTIVE NAVIGATION
====================================================== */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 140;

        if (window.pageYOffset >= sectionTop) {

            currentSection = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {

            link.classList.add("active");

        }

    });

});

/* ======================================================
   FADE UP ANIMATION
====================================================== */

const fadeElements = document.querySelectorAll(

    ".experience-item, .project, .cert, .award, .edu-item, .contact-links, .section-header"

);

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {

        threshold: 0.15

    }

);

fadeElements.forEach(el => {

    el.classList.add("fade-up");

    observer.observe(el);

});

/* ======================================================
   PROJECT HOVER EFFECT
====================================================== */

document.querySelectorAll(".project").forEach(project => {

    project.addEventListener("mouseenter", () => {

        project.style.transform = "translateX(10px)";

    });

    project.addEventListener("mouseleave", () => {

        project.style.transform = "translateX(0)";

    });

});

/* ======================================================
   CURRENT YEAR
====================================================== */

const footerYear = document.querySelector(".footer-year");

if (footerYear) {

    footerYear.textContent = new Date().getFullYear();

}

/* ======================================================
   PAGE LOADED
====================================================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

/* ======================================================
   CONSOLE MESSAGE
====================================================== */

console.log(
    "%cWelcome 👋",
    "font-size:22px;font-weight:bold;color:#5ea2ff;"
);

console.log(
    "%cThanks for checking out my portfolio!",
    "font-size:14px;color:#999;"
);

console.log(
    "%cCloud • Splunk • AWS • Automation",
    "font-size:14px;color:#5ea2ff;"
);
