/**
 * ============================================
 * MAIN NAVIGATION FUNCTIONALITY
 * ============================================
 * Handles mobile menu toggle and dropdown interactions
 */

// Wait for DOM to fully load before executing JavaScript
// This ensures all HTML elements are available before we try to access them
document.addEventListener('DOMContentLoaded', () => {
    
    // ============================================
    // ELEMENT SELECTORS
    // ============================================
    
    // Select the hamburger menu button (☰ icon) - Only visible on mobile
    const hamburgerBtn = document.querySelector('.header__menu-toggle');
    
    // Select the main navigation container
    const navContainer = document.querySelector('.header__nav');
    
    // Select all dropdown menu links (Our Services and Resources)
    // This finds all navigation items that have dropdown functionality
    const dropdownToggles = document.querySelectorAll('.header__nav-item--dropdown > .header__nav-link');

    // ============================================
    // MOBILE MENU TOGGLE FUNCTIONALITY
    // ============================================
    // When hamburger button is clicked, open/close the mobile menu
    hamburgerBtn.addEventListener('click', () => {
        // Toggle the 'is-open' class on navigation container
        // This class controls the visibility of the mobile menu
        navContainer.classList.toggle('is-open');

        // Change hamburger icon between ☰ (hamburger) and ✕ (close)
        // If menu is open, show X icon; if closed, show hamburger icon
        hamburgerBtn.textContent = navContainer.classList.contains('is-open') ? '✕' : '☰';
    });

    // ============================================
    // MOBILE DROPDOWN TOGGLE FUNCTIONALITY
    // ============================================
    // Handle dropdown menu clicks on mobile devices
    // On desktop, dropdowns work with CSS hover, but on mobile we need click events
    dropdownToggles.forEach(toggle => {
        // Add click event listener to each dropdown link
        toggle.addEventListener('click', (e) => {
            // Only execute this on mobile screens (width <= 950px)
            // On desktop, dropdowns are handled by CSS :hover
            if (window.innerWidth <= 950) {
                // Prevent default link behavior (prevent navigation)
                e.preventDefault();
                
                // Get the dropdown content div (next sibling element)
                const dropdownContent = toggle.nextElementSibling;
                
                // Check if dropdown content exists
                if (dropdownContent) {
                    // Toggle visibility: if visible, hide it; if hidden, show it
                    const isVisible = dropdownContent.style.display === 'block';
                    dropdownContent.style.display = isVisible ? 'none' : 'block';
                }
            }
        });
    });

    // ============================================
    // WINDOW RESIZE HANDLER
    // ============================================
    // Reset mobile menu state when window is resized to desktop size
    // This ensures clean transition between mobile and desktop views
    window.addEventListener('resize', () => {
        // If window width is greater than 950px (desktop size)
        if (window.innerWidth > 950) {
            // Remove 'is-open' class to close mobile menu
            navContainer.classList.remove('is-open');
            // Reset hamburger icon to default state
            hamburgerBtn.textContent = '☰';
        }
    });
});

/**
 * ============================================
 * MODAL FUNCTIONALITY
 * ============================================
 * Handles opening and closing of the registration form modal
 */

// Select all buttons that trigger the modal (buttons with class "modal-trigger")
// This includes buttons in header and hero section
const modalTriggers = document.querySelectorAll(".modal-trigger");

// Select the modal overlay (dark background)
const modal = document.getElementById("modal-wrapper");

// Select the close button (X) inside the modal
const modalClose = document.getElementById("modal-close");

// ============================================
// OPEN MODAL FUNCTIONALITY
// ============================================
// Loop through all modal trigger buttons and add click event
modalTriggers.forEach(button => {
    // When any trigger button is clicked, show the modal
    // Display is set to "flex" to center the modal content
    button.onclick = () => modal.style.display = "flex";
});

// ============================================
// CLOSE MODAL FUNCTIONALITY
// ============================================
// Close modal when X button is clicked
modalClose.onclick = () => modal.style.display = "none";

// Close modal when user clicks outside the modal content (on the dark overlay)
window.onclick = (e) => {
    // Check if the click target is the modal overlay itself (not the content inside)
    if (e.target === modal) {
        // Hide the modal
        modal.style.display = "none";
    }
}
