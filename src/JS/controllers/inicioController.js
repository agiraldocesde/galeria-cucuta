window.addEventListener("load", () => {
    const bannerText = document.querySelector("section p");

    bannerText.classList.remove("opacity-0", "translate-y-10");
    bannerText.classList.add("opacity-100", "translate-y-0");
});
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const menuP = document.getElementById("menuP");
const links = menu.querySelectorAll("a");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("opacity-0");
    menu.classList.toggle("scale-95");
    menu.classList.toggle("pointer-events-none");
    menu.classList.toggle("backdrop-blur-sm");
    menu.classList.toggle("bg-black/70");

    // links.forEach(link => {
    //     link.classList.toggle("text-white");
    //     link.classList.toggle("text-black");
    // });

    if (menu.classList.contains("opacity-0")) {
        menuP.textContent = "Menú";
    } else {
        menuP.textContent = "";
    }



});


const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-10");
            entry.target.classList.add("opacity-100", "translate-y-0");
        }
    });
}, {
    threshold: 0.2
});

reveals.forEach(reveal => {
    observer.observe(reveal);
});
const navbar = document.getElementById("navbar");
const logo = document.getElementById("logo");
const banner = document.querySelector("section");
const navContainer = document.getElementById("navContainer");
const navContents = document.getElementById("navContents");
const navIcons = document.querySelectorAll("#navContents svg");

window.addEventListener("scroll", () => {

    const bannerHeight = banner.offsetHeight;
    const scrollY = window.scrollY;

    let progress = scrollY / (bannerHeight / 2);

    if (progress > 1) progress = 1;

    if (progress) {
        navContainer.classList.add("py-0");
        navContainer.classList.remove("py-6");
    } else {
        navContainer.classList.add("py-6");
        navContainer.classList.remove("py-3");
    }




    // Blur progresivo
    navbar.style.backdropFilter = `blur(${progress * 15}px)`;
    navbar.style.backgroundColor = `rgba(58,74,63,${progress * 0.5})`;
    // Cambiar color del texto
    if (progress > 0.99) {
        navIcons.forEach(icon => {
            icon.classList.remove("fill-gray-200,");
            icon.classList.add("fill-gray-100 ");
            icon.classList.add("hover:fill-gray-100");
        });
    } else {
        navIcons.forEach(icon => {
            icon.classList.remove("fill-black");
            icon.classList.add("fill-gray-200");
        });
    }


    // Reducir tamaño del navbar y logo
    const scale = 1 - (progress * 0.25);

    logo.style.transform = `scale(${scale})`;
    navIcons.forEach(icon => {
        icon.style.transform = `scale(${scale})`;
    });
    menuText.style.transform = `scale(${scale})`;
});
