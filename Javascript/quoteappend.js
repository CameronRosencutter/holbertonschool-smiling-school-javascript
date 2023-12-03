function appendCarouselItem(profileImage, quoteText, personName, personRole) {
    // Create a new carousel item
    var newItem = document.createElement('div');
    newItem.classList.add('carousel-item');

    // Create the inner structure for the new carousel item
    newItem.innerHTML = `
      <div class="row mx-auto align-items-center">
        <div class="col-12 col-sm-2 col-lg-2 offset-lg-1 text-center">
          <img src="${profileImage}" class="d-block align-self-center" alt="Carousel Pic">
        </div>
        <div class="col-12 col-sm-7 offset-sm-2 col-lg-9 offset-lg-0">
          <div class="quote-text">
            <p class="text-white">${quoteText}</p>
            <h4 class="text-white font-weight-bold">${personName}</h4>
            <span class="text-white">${personRole}</span>
          </div>
        </div>
      </div>
    `;

    // Append the new carousel item to the carousel inner container
    document.querySelector('#myCarousel .carousel-inner').appendChild(newItem);
  }

  // Call the function with specific content
  appendCarouselItem(
    'images/profile_6.jpg',
    '« Another great testimonial. »',
    'Another Person',
    'another role'
  );