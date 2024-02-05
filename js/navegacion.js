function changeBrand(brand) {
    document.getElementById('brandName').innerText = brand;
  }
  
  const menuIcon = document.getElementById('menuIcon');
  const menu = document.getElementById('menu');
  
  menuIcon.addEventListener('click', function() {
    if (menu.style.display === 'block') {
      menu.style.display = 'none';
    } else {
      menu.style.display = 'block';
    }
  });
  