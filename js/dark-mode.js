// Dark Mode Toggle
(function() {
    'use strict';

    // Check for saved theme preference or default to 'light' mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);

    // Create toggle button
    const toggleButton = document.createElement('button');
    toggleButton.className = 'dark-mode-toggle';
    toggleButton.setAttribute('aria-label', 'Toggle dark mode');
    toggleButton.innerHTML = currentTheme === 'dark' ? '☀️' : '🌙';

    // Add button to page when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            document.body.appendChild(toggleButton);
        });
    } else {
        document.body.appendChild(toggleButton);
    }

    // Toggle theme function
    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);

        // Update button icon
        toggleButton.innerHTML = newTheme === 'dark' ? '☀️' : '🌙';
    }

    // Add click event listener
    toggleButton.addEventListener('click', toggleTheme);
})();
