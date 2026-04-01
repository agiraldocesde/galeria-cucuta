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

// seccion de categorías

const categorias = [
    {
        id: 1,
        nombre: "Muebles",
        imagen: "../images/muebles.jpg",
        span: "col-span-2 md:col-span-2"
    },
    {
        id: 2,
        nombre: "Comedores",
        imagen: "../images/comedores.jpg",
        span: "col-span-1 row-span-2 md:col-span-2 md:row-span-2"
    },
    {
        id: 3,
        nombre: "Mesas",
        imagen: "../images/mesa.jpg",
        span: ""
    },
    {
        id: 4,
        nombre: "Sillas",
        imagen: "../images/silla.jpg",
        span: ""
    }
];

const cardProductsFavoritos = [
    {
        id: 1,
        productFavoriteImg: [
            "../images/catalogo/card-venta3.jpg"
        ],
        title: "Banco Bambú Natural",
        paragraph: "Banco en bambú con tapizado y estante inferior, estilo nórdico."
    },
    {
        id: 2,
        productFavoriteImg: [
            "../images/catalogo/mueble-1.jpg"
        ],
        title: "Sofá moderno de 2 puestos azul",
        paragraph: "Sofá azul de 2 puestos, cómodo, moderno y con cojines amplios."
    },
    {
        id: 3,
        productFavoriteImg: [
            "../images/catalogo/mesa-1.jpg"
        ],
        title: "Aparador de madera estilo nórdico",
        paragraph: "Aparador de madera con cajón y puertas, diseño nórdico elegante."
    },
    {
        id: 4,
        productFavoriteImg: [
            "../images/catalogo/comedor2-1.jpg"
        ],
        title: "Mesa redonda con sillas de ratán",
        paragraph: "Mesa redonda con 4 sillas de ratán, ideal para espacios modernos."
    },
    {
        id: 5,
        productFavoriteImg: [
            "../images/catalogo/mueble-1.jpg"
        ],
        title: "Sofá moderno de 2 puestos azul",
        paragraph: "Sofá azul de 2 puestos, cómodo, moderno y con cojines amplios."
    },
    {
        id: 6,
        productFavoriteImg: [
            "../images/catalogo/mesa-1.jpg"
        ],
        title: "Aparador de madera estilo nórdico",
        paragraph: "Aparador de madera con cajón y puertas, diseño nórdico elegante."
    }
];

const promocionesData = [
    {
        id: 1,
        productPromoImg: [
            "../images/catalogo/card-venta3.jpg"
        ],
        title: "Banco Bambú Natural",
        paragraph: "¡20% OFF! Solo por hoy · $1,200,000"
    },
    {
        id: 2,
        productPromoImg: [
            "../images/catalogo/mueble-1.jpg"
        ],
        title: "Sofá 2 Puestos Azul",
        paragraph: "¡Ahorra $500.000! Oferta por tiempo limitado"
    },
    {
        id: 3,
        productPromoImg: [
            "../images/catalogo/mesa-1.jpg"
        ],
        title: "Aparador Nórdico",
        paragraph: "¡Últimas unidades! 25% OFF · $1,800,000"
    },
    {
        id: 4,
        productPromoImg: [
            "../images/catalogo/comedor2-1.jpg"
        ],
        title: "Mesa Redonda con Sillas Ratán",
        paragraph: "¡La más buscada! 20% OFF · $1,200,000"
    },
    {
        id: 5,
        productPromoImg: [
            "../images/catalogo/mueble-1.jpg"
        ],
        title: "Sofá 2 Puestos Azul",
        paragraph: "¡No te lo pierdas! Ahorra $500.000 hoy"
    },
    {
        id: 6,
        productPromoImg: [
            "../images/catalogo/mesa-1.jpg"
        ],
        title: "Aparador Nórdico",
        paragraph: "¡Precio especial! Solo quedan 3 unidades"
    }
];

window.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("gridCategorias");

    categorias.forEach((cat) => {
        const card = document.createElement("div");

        card.className = `${cat.span} relative overflow-hidden rounded-xl group cursor-pointer`;

        card.innerHTML = `
            <img src="${cat.imagen}"
                class="h-full w-full object-cover hover:scale-105 transition-transform duration-300">   

            <div class="absolute inset-0 flex items-center justify-center bg-black/60">
                <p class="relative text-lg md:text-3xl text-stone-200 font-semibold">
                    ${cat.nombre}
                </p>
            </div>
        `;
        card.addEventListener("click", () => {
            window.location.href = `../views/colecciones.html?id=\${cat.id}`;
        });

        contenedor.appendChild(card);
    });


    // sección de favoritos

    
    const productFavoritos = document.getElementById("productFavorito");
    cardProductsFavoritos.forEach((product) => {
        const link = document.createElement("a");
        link.href = `infoCardProduct.html?id=${product.id}`;
        link.className = "max-w-[280px] md:max-w-[350px] h-[400px] relative group overflow-hidden rounded-2xl snap-start flex-shrink-0 hover:scale-105 transition-transform duration-300";

        link.style.backgroundImage = `url(${product.productFavoriteImg[0]})`;
        link.style.backgroundSize = "cover";
        link.style.backgroundPosition = "center";
        link.style.backgroundRepeat = "no-repeat";

        const overlay = document.createElement("div");
        overlay.classList.add(
            "absolute", "inset-0", "bg-black/80", "opacity-80",
            "md:opacity-0", "md:group-hover:opacity-100",
            "transition-opacity", "duration-300"
        );

        textContainer = document.createElement("div");
        textContainer.className = "relative z-10 flex flex-col w-full justify-end h-full text-center p-4 gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300";
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

        productFavoritos.appendChild(link);
    });  
    
    // sección de promociones

    const promocionesContainer = document.getElementById("promociones");

    if (!promocionesContainer) {
        console.error("No se encontró el contenedor 'promociones'");
        return;
    }

    promocionesData.forEach(promo => {
        const link = document.createElement("a");
        link.href = `descuentosProducts.html?id=${promo.id}`;
        link.className = "max-w-[280px] md:max-w-[350px] h-[400px] relative group overflow-hidden rounded-2xl snap-start flex-shrink-0 hover:scale-105 transition-transform duration-300";

        link.style.backgroundImage = `url(${promo.productPromoImg[0]})`;
        link.style.backgroundSize = "cover";
        link.style.backgroundPosition = "center";
        link.style.backgroundRepeat = "no-repeat";

        const overlay = document.createElement("div");
        overlay.classList.add(
            "absolute", "inset-0", "bg-black/80", "opacity-80",
            "md:opacity-0", "md:group-hover:opacity-100",
            "transition-opacity", "duration-300"
        );

        const textContainer = document.createElement("div");
        textContainer.className = "relative z-10 flex flex-col w-full justify-end h-full text-center p-4 gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300";
    
        const title = document.createElement("h2");
        title.className = "text-title-alt font-cormorant font-bold tracking-wide text-xl md:text-4xl";
        title.textContent = promo.title;
    
        const paragraph = document.createElement("p");
        paragraph.className = "text-form font-montserrat text-xs md:text-lg";
        paragraph.textContent = promo.paragraph;
    
        textContainer.appendChild(title);
        textContainer.appendChild(paragraph);
    
        link.appendChild(overlay);
        link.appendChild(textContainer);
        promocionesContainer.appendChild(link);
    });
});