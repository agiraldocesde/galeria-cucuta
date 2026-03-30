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

const cardProducts = [
    {
        id: 1,
        cardImagenes: [
            "/src/html/images/catalogo/card-venta3.jpg"
        ],
        title: "Banco Bambú Natural",
        paragraph: "Mueble de madera con almacenamiento y diseño nórdico elegante."
    },
    {
        id: 2,
        cardImagenes: [
            "../images/catalogo/mueble-1.jpg"
        ],
        title: "Sofá moderno de 2 puestos azul",
        paragraph: "Sofá de 2 puestos azul, cómodo y de estilo moderno."
    },
    {
        id: 3,
        cardImagenes: [
            "/src/html/images/catalogo/mesa-1.jpg"
        ],
        title: "Aparador de madera estilo nórdico",
        paragraph: "Aparador minimalista de madera con cajón y puertas laterales."
    } 
    
];

document.addEventListener("DOMContentLoaded", () => {
    const cardsContainer = document.getElementById("cardsContainer");

    if (!cardsContainer) {
        console.error("No se encontró el contenedor cardsContainer");
        return;
    }

    cardProducts.forEach(product => {
        const link = document.createElement("a");
        link.href = `infoCardProduct.html?id=${product.id}`;
        link.classList.add(
            "relative", "w-full","h-60", "md:h-120", "rounded-lg", "overflow-hidden",
            "group", "hover:scale-105", "transition-transform", "duration-300", "block", "flex", "items-center", "justify-center"
        );

        // Fondo dinámico
        link.style.backgroundImage = `url(${product.cardImagenes[0]})`;
        link.style.backgroundSize = "cover";
        link.style.backgroundPosition = "center";
        link.style.backgroundRepeat = "no-repeat";

        // Overlay con efecto hover
        const overlay = document.createElement("div");
        overlay.classList.add(
            "absolute", "inset-0", "bg-black/70", "opacity-70",
            "md:opacity-0", "md:group-hover:opacity-100",
            "transition-opacity", "duration-300"
        );

        // Texto
        const textContainer = document.createElement("div");
        textContainer.className = "relative z-10 flex flex-col justify-end h-full text-center p-4 gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300";

        const title = document.createElement("h2");
        title.className = "text-title-alt font-cormorant font-bold tracking-wide text-xl md:text-4xl";
        title.textContent = product.title;

        const paragraph = document.createElement("p");
        paragraph.className = "text-form font-montserrat text-xs md:text-lg";
        paragraph.textContent = product.paragraph;

        textContainer.appendChild(title);
        textContainer.appendChild(paragraph);

        link.appendChild(overlay);
        link.appendChild(textContainer);

        cardsContainer.appendChild(link);
    });
});