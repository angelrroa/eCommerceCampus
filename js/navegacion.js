
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

function openModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}
window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
