const menuIcon = document.querySelector(".menu-icon"),
    close = document.querySelector(".cross"),
    menuBar = document.querySelector(".navbar"),
    links = document.querySelector("#links"),
    currentPage = window.location.pathname;

menuIcon.addEventListener("click", () => {
    menuBar.classList.add("active");
})

const removeActiveClass = () => {
    menuBar.classList.remove("active");
}

close.addEventListener("click", removeActiveClass);
links.addEventListener("mouseleave", removeActiveClass);



if (currentPage === '/' || currentPage.includes('index.html')) {
    // change menubar color on scroll 
    window.addEventListener('scroll', () => {
        if (window.scrollY >= window.innerHeight) {
            menuBar.style.background = 'rgb(0 0 0 / 70%)';
        } else {
            menuBar.style.background = 'rgb(255 255 255 / 40%)';
        }
    });
} else {
    menuBar.style.background = 'rgb(0 0 0 / 70%)';
}


// menubar swipe down animation 
gsap.from(".navbar", {
    y: -100,
    duration: .8,
    delay: .3
});



//   play and pause video 
document.querySelector("#playVideo").addEventListener('click', () => {
    let video = document.querySelector("#playVideo video"),
        playIcon = document.querySelector("#playIcon");

    if (video.paused) {
        video.play();
        playIcon.style.display = "none";
    } else {
        video.pause();
        playIcon.style.display = "block";
    }
})


        const body = document.querySelector("body"),
          nav = document.querySelector("nav"),
          modeToggle = document.querySelector(".dark-light"),
          searchToggle = document.querySelector(".searchToggle"),
          sidebarOpen = document.querySelector(".sidebarOpen"),
          siderbarClose = document.querySelector(".siderbarClose");
      
        // JS code to toggle dark and light mode
        modeToggle.addEventListener("click", () => {
          modeToggle.classList.toggle("active");
          body.classList.toggle("dark");
      
          if (!body.classList.contains("dark")) {
            localStorage.setItem("mode", "light-mode");
          } else {
            localStorage.setItem("mode", "dark-mode");
          }
        });
      
        // JS code to toggle search box
        searchToggle.addEventListener("click", () => {
          searchToggle.classList.toggle("active");
        });
      
        // JS code to toggle sidebar
        sidebarOpen.addEventListener("click", () => {
          nav.classList.add("active");
        });
      
        siderbarClose.addEventListener("click", () => {
          nav.classList.remove("active");
        });
      
        // To keep the user selected mode even when the page is refreshed
        const getMode = localStorage.getItem("mode");
        if (getMode && getMode === "dark-mode") {
          body.classList.add("dark");
          modeToggle.classList.add("active");
        }
