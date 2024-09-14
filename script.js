document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("mouseover", function() {
            this.classList.add("hovered");
        });

        card.addEventListener("mouseout", function() {
            this.classList.remove("hovered");
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slides');
    const slides = document.querySelectorAll('.slide');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    let currentIndex = 0;

    function updateSlider() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    leftArrow.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    rightArrow.addEventListener('click', function() {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
            updateSlider();
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slides');
    const slides = document.querySelectorAll('.slide');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const thumbnailContainer = document.querySelector('.thumbnails');
    let currentIndex = 0;
    
    
    slides.forEach((slide, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = slide.querySelector('img').src;
        thumbnail.classList.add('thumbnail');
        thumbnail.addEventListener('click', () => {
            currentIndex = index;
            updateSlider();
            updateThumbnails();
        });
        thumbnailContainer.appendChild(thumbnail);
    });

    function updateSlider() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        updateThumbnails();
    }

    function updateThumbnails() {
        document.querySelectorAll('.thumbnail').forEach((thumb, index) => {
            if (index === currentIndex) {
                thumb.classList.add('active');
            } else {
                thumb.classList.remove('active');
            }
        });
    }

    leftArrow.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    rightArrow.addEventListener('click', function() {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
            updateSlider();
        }
    });

    updateThumbnails();
});