// Query all relevant elements
const images = document.querySelectorAll('.side_icons, .logo_img'); // All images
const texts = document.querySelectorAll('.text_hidden'); // All text elements
const navbar = document.querySelector('.navbar'); // Navbar element
const openPopupBtn = document.getElementById('open-popup-btn');
const popupContainer = document.getElementById('popup-container');
const dropdownBtn = document.getElementById('dropdown-btn');
const dropdownMenu = document.getElementById('dropdown-menu');

// Flag to track if any text is visible
let isTextVisible = false;

// Toggle visibility of texts and add shadow to navbar on image click
images.forEach((img) => {
  img.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent event from bubbling up
    if (!isTextVisible) {
      texts.forEach((text) => text.classList.add('text_visible')); // Show text
      navbar.classList.add('shadow'); // Add shadow to navbar
      navbar.classList.add('text-visible'); // Enable hover background effect
      isTextVisible = true; // Set flag
    }
  });
});

// Hide texts and remove shadow on click outside the navbar
document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target)) {
    texts.forEach((text) => text.classList.remove('text_visible')); // Hide text
    navbar.classList.remove('shadow'); // Remove shadow from navbar
    navbar.classList.remove('text-visible'); // Disable hover effect
    isTextVisible = false; // Reset flag
  }
});

// Prevent closing texts when clicking on the images themselves
images.forEach((img) => {
  img.addEventListener('click', (e) => e.stopPropagation());
});

// Popup functionality
function showPopup() {
    popupContainer.style.display = 'block'; // Show popup
}

function hidePopup() {
    popupContainer.style.display = 'none'; // Hide popup
}

// Open popup when button is clicked
openPopupBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent event from bubbling up
    showPopup(); // Show popup
});

// Hide popup when clicking outside of it
document.addEventListener('click', (e) => {
    if (!popupContainer.contains(e.target) && e.target !== openPopupBtn) {
        hidePopup(); // Hide popup
    }
});

// Prevent closing popup when clicking inside it
popupContainer.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent event from bubbling up
});

// Dropdown menu functionality
dropdownBtn.addEventListener('click', () => {
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block'; // Toggle visibility
});

// Close dropdown if clicked outside
document.addEventListener('click', (e) => {
    if (!dropdownBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.style.display = 'none'; // Hide dropdown
    }
});
