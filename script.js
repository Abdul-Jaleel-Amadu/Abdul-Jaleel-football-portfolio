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
}const galleryImages = document.querySelectorAll(".gallery-img");
const imageModal = document.getElementById("imageModal");
const popupImage = document.getElementById("popupImage");
const closeImage = document.querySelector(".close-image");


galleryImages.forEach(image => {

    image.onclick = function(){

        imageModal.style.display="flex";
        popupImage.src=this.src;

    }

});


closeImage.onclick=function(){

    imageModal.style.display="none";

};const galleryImages = document.querySelectorAll(".gallery-img");
const imageModal = document.getElementById("imageModal");
const popupImage = document.getElementById("popupImage");
const closeImage = document.querySelector(".close-image");

galleryImages.forEach(image => {

    image.onclick = function(){
        imageModal.style.display = "flex";
        popupImage.src = this.src;
    }

});


closeImage.onclick = function(){
    imageModal.style.display = "none";
};// Scroll Animation

const hiddenElements = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

});

hiddenElements.forEach((el)=>{
    el.classList.add("hidden");
    observer.observe(el);
});
// ===== Animated Counters =====

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;

        const increment = Math.ceil(target / 50);

        if (current < target) {
            counter.innerText = current + increment;
            setTimeout(updateCounter, 30);
        } else {
            counter.innerText = target;
        }

    };

    updateCounter();

});// ===== IMAGE POPUP =====

function openImage(image){

    let viewer = document.getElementById("imageViewer");
    let viewerImage = document.getElementById("viewerImage");

    viewer.style.display = "flex";

    viewerImage.src = image.src;

}


let closeViewer = document.querySelector(".close-viewer");

closeViewer.onclick = function(){

    document.getElementById("imageViewer").style.display = "none";

};
