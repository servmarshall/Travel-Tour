// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Modal Functionality for Learn More and Book Now Buttons
const learnMoreBtns = document.querySelectorAll('.btn-dest');
const bookNowBtns = document.querySelectorAll('.btn-pack');

function createModal(content) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="modal-content">
            <button class="close-modal">X</button>
            <p>${content}</p>
        </div>
    `;

    document.body.appendChild(modal);

    // Close modal functionality
    modal.querySelector('.close-modal').addEventListener('click', () => {
        document.body.removeChild(modal);
    });

    return modal;
}

learnMoreBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const destinationName = e.target.parentElement.querySelector('h3').textContent;
        const modal = createModal(`Learn more about ${destinationName} - Coming soon!`);
        modal.style.display = 'block';
    });
});

bookNowBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const packageName = e.target.parentElement.querySelector('h3').textContent;
        const modal = createModal(`Book ${packageName} - Coming soon!`);
        modal.style.display = 'block';
    });
});

// Form Submission Handling (Placeholder)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Form submission is not yet implemented.');
        // Here you would typically handle the form submission using fetch or AJAX
    });
}