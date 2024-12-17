const images = document.querySelectorAll('.side_icons, .logo_img'); // All images
const texts = document.querySelectorAll('.text_hidden'); // All text elements
const navbar = document.querySelector('.navbar'); // Navbar element

// Flag to check if any text is already visible
let isTextVisible = false;

// Show all texts and add shadow to navbar when any image is clicked
images.forEach((img) => {
  img.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent the click from bubbling up
    if (!isTextVisible) {
      texts.forEach((text) => {
        text.classList.add('text_visible'); // Show all texts
      });
      navbar.classList.add('shadow'); // Add shadow to navbar
      navbar.classList.add('text-visible'); // Add class to enable hover background effect
      isTextVisible = true; // Set flag to true
    }
  });
});

// Hide all texts and remove shadow when clicked anywhere outside
document.addEventListener('click', (e) => {
  // Only hide texts if the click is outside the navbar
  if (!navbar.contains(e.target)) {
    texts.forEach((text) => text.classList.remove('text_visible')); // Hide all text
    navbar.classList.remove('shadow'); // Remove shadow from navbar
    navbar.classList.remove('text-visible'); // Remove class to disable hover effect
    isTextVisible = false; // Reset the flag
  }
});

// Prevent the click event on the images from propagating to the document
images.forEach((img) => {
  img.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent closing the text when clicking on the images
  });
});




// Pop-up JS
// Get the button, popup container, and the document element
const openPopupBtn = document.getElementById('open-popup-btn');
const popupContainer = document.getElementById('popup-container');

// Function to show the popup
function showPopup() {
    popupContainer.style.display = 'block'; // Show the popup
}

// Function to hide the popup
function hidePopup() {
    popupContainer.style.display = 'none'; // Hide the popup
}

// Open the popup when the button is clicked
openPopupBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent the click from propagating
    showPopup(); // Show the popup
});

// Close the popup when clicking outside of it
document.addEventListener('click', (e) => {
    if (!popupContainer.contains(e.target) && e.target !== openPopupBtn) {
        hidePopup(); // Hide the popup if clicked outside
    }
});

// Prevent closing the popup when clicking inside the popup
popupContainer.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent the click from propagating
});

