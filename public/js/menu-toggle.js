document.addEventListener("DOMContentLoaded", function() {
    const btn  = document.getElementById("togglemeu");
    const menu = document.getElementById("primary-menu");
    if (!btn || !menu) return;
  
    btn.addEventListener("click", function(e) {
      e.preventDefault();
      menu.classList.toggle("active");
    });
  });
  