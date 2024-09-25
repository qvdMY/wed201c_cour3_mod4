// Function to update the image and text when hovering
function updateImage(event) {
  const imageDisplay = document.getElementById('image');
  const altText = event.target.alt;
  const imgSrc = event.target.src;

  imageDisplay.style.backgroundImage = `url(${imgSrc})`;
  imageDisplay.innerHTML = altText;
}

// Function to reset the image and text when not hovering
function resetImage() {
  const imageDisplay = document.getElementById('image');
  imageDisplay.style.backgroundImage = '';
  imageDisplay.innerHTML = 'Hover over an image below to display here.';
}

// Function to handle focus on an image
function imageFocus(event) {
  console.log('Image focused:', event.target.alt);
  event.target.style.border = '3px solid blue'; // Add border on focus
}

// Function to handle blur (unfocus) on an image
function imageBlur(event) {
  console.log('Image lost focus:', event.target.alt);
  event.target.style.border = ''; // Reset border on blur
}

// Add event listeners to all images in the gallery
function addEventListeners() {
  const images = document.querySelectorAll('#image-gallery img');

  images.forEach((img, index) => {
    // Add event listeners for mouse hover
    img.addEventListener('mouseover', updateImage);
    img.addEventListener('mouseleave', resetImage);

    // Add event listeners for focus and blur (for keyboard access)
    img.addEventListener('focus', imageFocus);
    img.addEventListener('blur', imageBlur);

    // Set tabindex for keyboard accessibility
    img.setAttribute('tabindex', index + 1);
  });
}

// Function to run when the page loads
window.onload = function () {
  console.log('Page loaded. Adding event listeners.');
  addEventListeners();
};
