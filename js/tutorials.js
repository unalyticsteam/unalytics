// Tutorial Cards Interaction
(function() {
    'use strict';

    function initTutorialCards() {
        const tutorialCards = document.querySelectorAll('.tutorial-card');

        tutorialCards.forEach(card => {
            const header = card.querySelector('.tutorial-header');

            header.addEventListener('click', function() {
                // Toggle active class
                const wasActive = card.classList.contains('active');

                // Close all cards
                tutorialCards.forEach(c => c.classList.remove('active'));

                // Open clicked card if it wasn't active
                if (!wasActive) {
                    card.classList.add('active');
                }
            });
        });

        // Open first card by default
        if (tutorialCards.length > 0) {
            tutorialCards[0].classList.add('active');
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTutorialCards);
    } else {
        initTutorialCards();
    }
})();
