// Example card structure
function createCard(title, content) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${content}</p>
        </div>
    `;
    return card;
}

// Function to append a card to the carousel
function appendCardToCarousel(title, content) {
    const tutorialCarousel = document.getElementById('tutorial-carousel');
    const card = createCard(title, content);
    tutorialCarousel.appendChild(card);
}

// Example usage
appendCardToCarousel('Card 1', 'This is the content of Card 1');
appendCardToCarousel('Card 2', 'This is the content of Card 2');
// Add more cards as needed...