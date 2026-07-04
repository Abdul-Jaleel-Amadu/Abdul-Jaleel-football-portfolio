"use strict";

// ===== Smooth scroll for navigation =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// ===== Simple fade-in effect on scroll =====
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});// ===== VIDEO POPUP =====

function openVideo(){
    document.getElementById("videoModal").style.display = "flex";
}

function closeVideo(){
    document.getElementById("videoModal").style.display = "none";
}// ===== DARK MODE =====

function toggleDarkMode(){
    document.body.classList.toggle("dark");
}// ===== ANIMATED STATS COUNTER =====

const stats = document.querySelectorAll(".stat-box h3");

const speed = 50;

stats.forEach(stat => {
    const updateCount = () => {
        const target = +stat.innerText.replace("+", "");
        const count = +stat.getAttribute("data-count") || 0;

        if (count < target) {
            stat.setAttribute("data-count", count + 1);
            stat.innerText = (count + 1) + "+";
            setTimeout(updateCount, speed);
        }
    };

    updateCount();
});// OPEN IMAGE
function openImage(img){
    document.getElementById("imageModal").style.display = "flex";
    document.getElementById("modalImg").src = img.src;
}

function closeImage(){
    document.getElementById("imageModal").style.display = "none";
}

// OPEN VIDEO (TV BUTTON FIX)
function openVideo(){
    document.getElementById("videoModal").style.display = "flex";
}

function closeVideo(){
    document.getElementById("videoModal").style.display = "none";
        }// ===== BACK TO TOP =====

function scrollToTop(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}
