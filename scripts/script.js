        // Mobile Navigation Toggle
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Image Slider Functionality
        const slides = document.querySelector('.slides');
        const slideItems = document.querySelectorAll('.slide');
        const prevBtn = document.querySelector('.prev');
        const nextBtn = document.querySelector('.next');
        const sliderBtns = document.querySelectorAll('.slider-btn');
        
        let currentSlide = 0;
        const slideCount = slideItems.length;
        
        function goToSlide(index) {
            if (index < 0) {
                currentSlide = slideCount - 1;
            } else if (index >= slideCount) {
                currentSlide = 0;
            } else {
                currentSlide = index;
            }
            
            slides.style.transform = `translateX(-${currentSlide * 100}%)`;
            
            // Update active button
            sliderBtns.forEach((btn, i) => {
                btn.classList.toggle('active', i === currentSlide);
            });
        }
        
        function nextSlide() {
            goToSlide(currentSlide + 1);
        }
        
        function prevSlide() {
            goToSlide(currentSlide - 1);
        }
        
        // Event listeners
        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);
        
        // Add click events to slider buttons
        sliderBtns.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                goToSlide(index);
            });
        });
        
        // Auto slide every 5 seconds
        setInterval(nextSlide, 5000);

        // Contact Form Validation
        const contactForm = document.getElementById('contactForm');
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const subjectInput = document.getElementById('subject');
        const messageInput = document.getElementById('message');
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;
            
            // Name validation
            if (nameInput.value.trim() === '') {
                showError(nameInput, 'nameError', 'Name is required');
                isValid = false;
            } else {
                clearError(nameInput, 'nameError');
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailInput.value.trim() === '') {
                showError(emailInput, 'emailError', 'Email is required');
                isValid = false;
            } else if (!emailRegex.test(emailInput.value)) {
                showError(emailInput, 'emailError', 'Please enter a valid email');
                isValid = false;
            } else {
                clearError(emailInput, 'emailError');
            }
            
            // Subject validation
            if (subjectInput.value.trim() === '') {
                showError(subjectInput, 'subjectError', 'Subject is required');
                isValid = false;
            } else {
                clearError(subjectInput, 'subjectError');
            }
            
            // Message validation
            if (messageInput.value.trim() === '') {
                showError(messageInput, 'messageError', 'Message is required');
                isValid = false;
            } else {
                clearError(messageInput, 'messageError');
            }
            
            if (isValid) {
                // Form is valid, you can submit it here
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
            }
        });
        
        function showError(input, errorId, message) {
            const errorElement = document.getElementById(errorId);
            input.parentElement.classList.add('invalid');
            errorElement.textContent = message;
            errorElement.style.display = 'block';
        }
        
        function clearError(input, errorId) {
            const errorElement = document.getElementById(errorId);
            input.parentElement.classList.remove('invalid');
            errorElement.style.display = 'none';
        }