document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    // Initialize AOS animations
    AOS.init();
    console.log("AOS initialized");

    // FAQ Accordion Logic
    const accordions = document.querySelectorAll('.accordion');
    accordions.forEach(acc => {
        acc.addEventListener('click', function() {
            this.classList.toggle('active');
            const panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    });

    // Smooth Scroll for Navigation Links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll Progress Bar Logic
    window.onscroll = function() {
        const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (scrollPosition / scrollHeight) * 100;
        document.getElementById('progress-bar').style.width = scrolled + '%';
    };
});
