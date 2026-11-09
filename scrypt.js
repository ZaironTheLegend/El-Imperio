// =====================================
// EL IMPERIO - FUNCIONES PRINCIPALES
// =====================================

const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

// Abrir y cerrar el menú
menuToggle.addEventListener("click", () => {

    navigation.classList.toggle("active");

    const isOpen = navigation.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.textContent = isOpen ? "✕" : "☰";

});

// Cerrar el menú al seleccionar una sección
const navigationLinks = document.querySelectorAll(".navigation a");

navigationLinks.forEach(link => {

    link.addEventListener("click", () => {

        navigation.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.textContent = "☰";

    });

});