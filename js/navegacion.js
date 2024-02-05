
function changeBrand(brand) {
    
    document.getElementById("brandName").innerText = brand;
    
    toggleMenu();
}


function toggleMenu() {
    var menu = document.getElementById("menu");
    var screenWidth = window.innerWidth;

    if (screenWidth <= 768) {
       
        if (menu.style.display === "flex") {
            menu.style.display = "none";
        } else {
            menu.style.display = "flex";
        }
    } else {
        
        menu.style.display = "flex";
    }
}

