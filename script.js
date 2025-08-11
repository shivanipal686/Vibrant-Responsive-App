// Testimonial slider functionality
        let slideIndex = 1;
        
        function showSlides(n) {
            let i;
            let slides = document.querySelectorAll(".testimonial-slide");
            let dots = document.querySelectorAll(".dot");
            
            if (n > slides.length) {slideIndex = 1;}
            if (n < 1) {slideIndex = slides.length;}
            
            for (i = 0; i < slides.length; i++) {
                slides[i].classList.remove("active");
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].classList.remove("active");
            }
            
            slides[slideIndex-1].classList.add("active");
            dots[slideIndex-1].classList.add("active");
        }
        
        function currentSlide(n) {
            showSlides(slideIndex = n);
        }
        
        // Auto slide change every 5 seconds
        setInterval(() => {
            showSlides(slideIndex += 1);
        }, 5000);
        
        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
        // Animation on scroll
        const animateOnScroll = () => {
            const elements = document.querySelectorAll('.feature-card, .gallery-item');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                
                if (elementPosition < screenPosition) {
                    element.classList.add('fade-in');
                }
            });
        };
        
        window.addEventListener('scroll', animateOnScroll);
        
        // Initialize animations on page load
        document.addEventListener('DOMContentLoaded', () => {
            animateOnScroll();
        });