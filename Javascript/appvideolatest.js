document.addEventListener("DOMContentLoaded", function () {

    var carouselInner = document.querySelector(".videocarousel2");
    var currentIndex = 0;

    function appendNewvideo(thumbnails, titles, descs, icons, names, ratings) {
      var newCard = document.createElement("div");
      newCard.classList.add("carousel-item");
      newCard.innerHTML = `<div class="row align-items-center mx-auto">${generateCards(thumbnails, titles, descs, icons, names, ratings)}</div>`;
      carouselInner.appendChild(newCard);
    }

    function generateCards(thumbnails, titles, descs, icons, names, ratings) {
      var cardsHtml = "";
      for (var i = 0; i < thumbnails.length; i++) {
        cardsHtml += `
          <div class="col-12 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center justify-content-md-end justify-content-lg-center">
            <div class="card">
              <img src="images/${thumbnails[i]}" class="card-img-top" alt="Video thumbnail" />
              <div class="card-img-overlay text-center">
                <img src="images/play.png" alt="Play" width="64px" class="align-self-center play-overlay" />
              </div>
              <div class="card-body">
                <h5 class="card-title font-weight-bold">${titles[i]}</h5>
                <p class="card-text text-muted">${descs[i]}</p>
                <div class="creator d-flex align-items-center">
                  <img src="images/${icons[i]}" alt="Creator of Video" width="30px" class="rounded-circle" />
                  <h6 class="pl-3 m-0 main-color">${names[i]}</h6>
                </div>
                <div class="info pt-3 d-flex justify-content-between">
                  <div class="rating">${generateStars(ratings[i])}</div>
                  <span class="main-color">8 min</span>
                </div>
              </div>
            </div>
          </div>`;
      }
      return cardsHtml;
    }

    function generateStars(rating) {
      var stars = "";
      for (var i = 1; i <= 5; i++) {
        stars += `<img src="images/${i <= rating ? 'star_on.png' : 'star_off.png'}" alt="star ${i <= rating ? 'on' : 'off'}" width="15px" class="star" />`;
      }
      return stars;
    }
    
    appendNewvideo(
      ["thumbnail_4.jpg", "thumbnail_3.jpg", "thumbnail_2.jpg", "thumbnail_1.jpg"],
      ["Fast Smile", "Jumping Smile", "Metroid Smile", "Triforce Smile"],
      ["Description 1", "Description 2", "Description 3", "Description 4"],
      ["profile_3.jpg", "profile_3.jpg", "profile_2.jpg", "profile_4.jpg"],
      ["Sonic", "Mario", "Samus", "Link"],
      [1, 5, 3, 4]  // Ratings for each video
    );

    var carousel = new bootstrap.Carousel(document.getElementById('carouselExampleControls3'), {
      interval: false
    });


  });

  function prevSlide() {
    var carousel = new bootstrap.Carousel(document.getElementById('carouselExampleControls3'));
    currentIndex = currentIndex > 0 ? currentIndex - 1 : 0;
    carousel.to(currentIndex);
  }

  function nextSlide() {
    var carousel = new bootstrap.Carousel(document.getElementById('carouselExampleControls3'));
    currentIndex = currentIndex < carouselInner.children.length - 1 ? currentIndex + 1 : carouselInner.children.length - 1;
    carousel.to(currentIndex);
  }