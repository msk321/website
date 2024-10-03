document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    // Initialize AOS animations
    AOS.init();
    console.log("AOS initialized");

    // Scroll Progress Bar Logic
    window.onscroll = function() {
        const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (scrollPosition / scrollHeight) * 100;
        document.getElementById('progress-bar').style.width = scrolled + '%';
    };
});
