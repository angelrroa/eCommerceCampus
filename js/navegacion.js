// Función para cambiar la marca seleccionada
function changeBrand(brand) {
    // Lógica para cambiar la marca
    document.getElementById("brandName").innerText = brand;
    // Ocultar el menú después de hacer clic en un elemento
    toggleMenu();
}

// Función para mostrar u ocultar el menú desplegable
function toggleMenu() {
    var menu = document.getElementById("menu");
    var screenWidth = window.innerWidth;

    if (screenWidth <= 768) {
        // Si la pantalla es pequeña, se puede mostrar u ocultar el menú
        if (menu.style.display === "flex") {
            menu.style.display = "none";
        } else {
            menu.style.display = "flex";
        }
    } else {
        // Si la pantalla es grande, el menú debe permanecer visible
        menu.style.display = "flex";
    }
}