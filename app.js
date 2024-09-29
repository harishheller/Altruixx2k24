let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');
let seeMoreButtons = document.querySelectorAll('.seeMore');
let backButton = document.getElementById('back');

// Next and Previous button functionality
nextButton.onclick = function () {
    showSlider('next');
};
prevButton.onclick = function () {
    showSlider('prev');
};

// Function to switch between items
const showSlider = (type) => {
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';

    carousel.classList.remove('next', 'prev');
    let items = document.querySelectorAll('.carousel .list .item');
    if (type === 'next') {
        listHTML.appendChild(items[0]);
        carousel.classList.add('next');
    } else {
        listHTML.prepend(items[items.length - 1]);
        carousel.classList.add('prev');
    }

    setTimeout(() => {
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
    }, 2000);
};

// Handle arrow key navigation for next/prev
document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowRight') {
        showSlider('next');
    }
    if (event.key === 'ArrowLeft') {
        showSlider('prev');
    }
});

// Show detail view when 'See More' is clicked
seeMoreButtons.forEach((button) => {
    button.onclick = function () {
        carousel.classList.remove('next', 'prev');
        carousel.classList.add('showDetail');
        seeMoreButtons.forEach(btn => btn.style.display = 'none');
        // Show 'See All' button in the detail view
        document.querySelectorAll('#back').forEach(back => back.style.display = 'block');

    };
});

// Go back to carousel view when 'See All' is clicked
document.querySelectorAll('#back').forEach((button) => {
    button.onclick = function () {
        carousel.classList.remove('showDetail');
        seeMoreButtons.forEach(btn => btn.style.display = 'block');
        // Hide 'See All' button when returning to carousel
        document.querySelectorAll('#back').forEach(back => back.style.display = 'none');
    };
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'Backspace') {
        // Trigger the functionality of 'See All' button
        if (carousel.classList.contains('showDetail')) {
            carousel.classList.remove('showDetail');
            seeMoreButtons.forEach(btn => btn.style.display = 'block');
            // Hide 'See All' button when returning to carousel
            document.querySelectorAll('#back').forEach(back => back.style.display = 'none');
        }
    }
});

