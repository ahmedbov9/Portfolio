    let menuBtn = document.getElementById("menu-btn");
    let menu = document.getElementById("nav-list-mobile-container");
    let upArrow = document.getElementById('upArrow');
    let isMenuOpen = false;
    menuBtn.addEventListener("click", function () {
        if (!isMenuOpen) {
            menu.classList.add("active-menu");
            isMenuOpen = true;
        }else{
            menu.classList.remove("active-menu");
            isMenuOpen = false;
        }
        
    });
    window.addEventListener("click", function () {
            closeMenu();
        
    });
    function closeMenu() { 
        menu.classList.remove("active-menu");
        isMenuOpen = false;
    }
    if (window.innerWidth > 768) {
        closeMenu();
    }
    window.addEventListener("resize", function () {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            upArrow.classList.add('show-up-arrow');
        } else {
            upArrow.classList.remove('show-up-arrow');
        }
    }   );

   
