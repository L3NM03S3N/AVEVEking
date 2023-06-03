document.getElementById('basket').addEventListener('click', function() {
  window.location.href = 'cart.html';
});

document.getElementById('profile').addEventListener('click', function() {
  window.location.href = 'profile.html';
});


const slideshowContainer = document.getElementById('slideshow-container');
const slides = document.querySelectorAll('.slideshow');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
let slideIndex = 0;

showSlides(slideIndex);

function showSlides(n) {
  // wrap around to the last slide if at the beginning
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  // wrap around to the first slide if at the end
  if (n >= slides.length) {
    slideIndex = 0;
  }
  // hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  // show the current slide
  slides[slideIndex].style.display = 'block';
}

prevBtn.addEventListener('click', function() {
  showSlides(--slideIndex);
});

nextBtn.addEventListener('click', function() {
  showSlides(++slideIndex);
});

const rectangle = document.querySelector('#my-rectangle');


rectangle.addEventListener('click', function() {
  window.location.href = 'file:///C:/Users/moesen.len/OneDrive%20-%20campus%20de%20helix%20Maasmechelen/Documenten/Nieuwe%20map/gift_ideas.html';
});

/*store*/

document.addEventListener("DOMContentLoaded", function() {
  var detailsModal = document.getElementById("details-modal");
  var closeModal = document.getElementsByClassName("close")[0];
  var checkoutBtn = document.getElementById("checkout-btn");

  // Open details modal
  var detailsButtons = document.getElementsByClassName("details-btn");
  for (var i = 0; i < detailsButtons.length; i++) {
    detailsButtons[i].addEventListener("click", function() {
      detailsModal.style.display = "block";
    });
  }

  // Close details modal
  closeModal.addEventListener("click", function() {
    detailsModal.style.display = "none";
  });

  // Checkout button action
  checkoutBtn.addEventListener("click", function() {
    // Perform checkout process
  });
});

function showProductDetails(productName) {
  // Perform navigation to the details page using the selected product's name
  // You can modify this function to load specific product details dynamically
  window.location.href = "details.html?product=" + productName;
}

function hideProductDetails() {
  document.getElementById("details-modal").style.display = "none";
}