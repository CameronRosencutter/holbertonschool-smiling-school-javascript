document.addEventListener("DOMContentLoaded", function () {

    var carouselInner = document.querySelector(".carousel-inner");
  
    function appendNewSlide(imageSrc, quote, personName, personTitle) {
      
      
        // This is what creates a new slide
      var newSlide = document.createElement("div");
      newSlide.classList.add("carousel-item");
  

      newSlide.innerHTML = `
        <div class="row mx-auto align-items-center">
          <div class="col-12 col-sm-2 col-lg-2 offset-lg-1 text-center">
            <img src="${imageSrc}" class="d-block align-self-center" alt="Carousel Pic">
          </div>
          <div class="col-12 col-sm-7 offset-sm-2 col-lg-9 offset-lg-0">
            <div class="quote-text">
              <p class="text-white">${quote}</p>
              <h4 class="text-white font-weight-bold">${personName}</h4>
              <span class="text-white">${personTitle}</span>
            </div>
          </div>
        </div>
      `;
  
      carouselInner.appendChild(newSlide);
    }
  

    appendNewSlide(
      "images/profile_2.jpg",
      "Allow me to speak the language of my people. ThoseLorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod. Lorem ipsum dolor sit amet, sed do eiusmod!",
      "The other Persons Name",
      "Presenter Weather"
    );

    appendNewSlide(
      "images/profile_1.jpg",
      "What the...? Where am I? Whats going on?",
      "Who even knows who this is",
      "Guy"
    );
  });
