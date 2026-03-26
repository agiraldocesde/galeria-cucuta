# 🛋️ Arte y Estilo — E-Commerce de Mueblería

## 📖 Descripción del Proyecto

**Arte y Estilo** es un sistema de e-commerce en desarrollo para una mueblería. El objetivo es crear una plataforma que permita vender productos tanto de forma **digital** (página web) como **presencial** (tienda física), integrando el manejo de inventarios, ventas y clientes en un solo lugar.

Actualmente se tiene una **primera versión del frontend** desplegada, que incluye la página de inicio con las secciones principales del sitio.

---

## 🛍️ Productos que se venderán

- 🛏️ Camas
- 🪑 Sillas
- 🍽️ Comedores
- 🪵 Mesas
- 🛋️ Muebles en general

---

## 🎯 Objetivos del Proyecto

- Crear una tienda en línea donde los clientes puedan ver y comprar productos
- Gestionar las ventas realizadas en la tienda física
- Llevar un control del inventario de productos
- Registrar y fidelizar a los clientes

---

## 🛠️ Tecnologías que usaremos

| Tecnología    | ¿Para qué la usamos?                          |
|---------------|-----------------------------------------------|
| HTML5         | Estructura de las páginas web                 |
| JavaScript    | Interactividad y lógica del frontend          |
| Tailwind CSS  | Diseño y estilos visuales                     |
| Java          | Lógica del servidor (backend)                 |
| SQL Server    | Base de datos                                 |

---

## 📁 Estructura del Proyecto

```
arte-y-estilo/
│
└── public/
    └── src/
        │
        ├── css/                        # Archivos de estilos
        │   ├── inicio.css
        │   ├── esencia.css
        │   ├── colecciones.css
        │   └── contacto.css
        │
        ├── html/                       # Vistas y recursos visuales
        │   ├── images/                 # Imágenes de los productos
        │   └── views/                  # Páginas HTML
        │       ├── index.html          # Inicio
        │       ├── esencia.html        # Nuestra Esencia
        │       ├── colecciones.html    # Colecciones
        │       └── contacto.html      # Contacto
        │
        └── JS/                         # Lógica del frontend
            ├── controllers/            # Controladores de cada sección
            │   ├── inicioController.js
            │   ├── esenciaController.js
            │   ├── coleccionesController.js
            │   └── contactoController.js
            │
            └── models/                 # Modelos de datos
                ├── productosModel.js
                └── contactoModel.js
```

> ⚠️ La estructura puede crecer a medida que avance el desarrollo.

---

## 🚀 Estado actual

| Módulo                        | Estado         |
|-------------------------------|----------------|
| Estructura del proyecto       | ✅ Listo       |
| Página principal — Inicio     | ✅ Listo       |
| Sección Nuestra Esencia       | ✅ Listo       |
| Sección Colecciones           | 🔄 En progreso |
| Sección Contacto              | ✅ Listo       |
| Diseño de la base de datos    | 🔄 En progreso |
| Catálogo con detalle          | ⏳ Pendiente   |
| Registro de ventas            | ⏳ Pendiente   |
| Control de inventario         | ⏳ Pendiente   |
| Gestión de clientes           | ⏳ Pendiente   |

---

## 👥 Integrantes del equipo

| Nombre                | Rol                  |
|-----------------------|----------------------|
| Stiven Giraldo C      | Frontend             |
| Andres Giraldo B      | Backend              |
| Diego Herrera         | Base de datos        |
| Todos los integrantes | Documentación / QA   |

---

## 📅 Entregas

- **Primera entrega:** Planteamiento del proyecto, tecnologías, estructura inicial y página de inicio ✅
- **Segunda entrega:** Desarrollo de pantallas de secciones como Colecciones, nuestra esencia, contactanos, estructura de base de datos
- **Entrega final:** _(por definir)_

---

## 📬 Información del equipo

- **Institución:** Cesde
- **Materia:** Programación Web I
- **Semestre:** 2° Semestre — 2026
- **Docente:** Jaime

---

<p align="center">Proyecto académico — Arte y Estilo 🛋️</p>
