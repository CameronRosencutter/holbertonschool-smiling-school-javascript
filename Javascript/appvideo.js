document.addEventListener("DOMContentLoaded", function () {

    var carouselInner = document.querySelector(".videocarousel");
  
    function appendNewvideo(thumbnail1, title1, desc1, icon1, name1, thumbnail2, title2, desc2, icon2, name2, thumbnail3, title3, desc3, icon3, name3, thumbnail4, title4, desc4, icon4, name4,) {
      
        //thumbnai,title,desc,icon,name
      
        // This is what creates a new slide
      var newCard = document.createElement("div");
      newCard.classList.add("carousel-item");
  

      newCard.innerHTML = `
      <div class="carousel-item active">
      <div class="row align-items-center mx-auto">
        <div
          class="col-12 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center justify-content-md-end justify-content-lg-center"
        >
          <div class="card">
            <img
              src="../images/${thumbnail1}"
              class="card-img-top"
              alt="Video thumbnail"
            />
            <div class="card-img-overlay text-center">
              <img
                src="images/play.png"
                alt="Play"
                width="64px"
                class="align-self-center play-overlay"
              />
            </div>
            <div class="card-body">
              <h5 class="card-title font-weight-bold">
              ${title1}
              </h5>
              <p class="card-text text-muted">
                ${desc1}
              </p>
              <div class="creator d-flex align-items-center">
                <img
                  src="../images/${icon1}"
                  alt="Creator of
                  Video"
                  width="30px"
                  class="rounded-circle"
                />
                <h6 class="pl-3 m-0 main-color">${name1}</h6>
              </div>
              <div class="info pt-3 d-flex justify-content-between">
                <div class="rating">
                  <img
                    src="images/star_on.png"
                    alt="star on"
                    width="15px"
                  />
                  <img
                    src="images/star_on.png"
                    alt="star on"
                    width="15px"
                  />
                  <img
                    src="images/star_on.png"
                    alt="star on"
                    width="15px"
                  />
                  <img
                    src="images/star_on.png"
                    alt="star on"
                    width="15px"
                  />
                  <img
                    src="images/star_off.png"
                    alt="star on"
                    width="15px"
                  />
                </div>
                <span class="main-color">8 min</span>
              </div>
            </div>
          </div>
        </div>
        <div
          class="col-sm-6 col-md-6 col-lg-3 d-none d-sm-flex justify-content-md-start justify-content-lg-center"
        >
          <div class="card">
            <img
            src="../images/${thumbnail2}"
              class="card-img-top"
              alt="Video thumbnail"
            />
            <div class="card-img-overlay text-center">
              <img
                src="images/play.png"
                alt="Play"
                width="64px"
                class="align-self-center play-overlay"
              />
            </div>
            <div class="card-body">
              <h5 class="card-title font-weight-bold">${title2}</h5>
              <p class="card-text text-muted">
              ${desc2}
              </p>
              <div class="creator d-flex align-items-center">
                <img
                  src="../images/${icon2}"
                  alt="Creator of
                  Video"
                  width="30px"
                  class="rounded-circle"
                />
                <h6 class="pl-3 m-0 main-color">${name2}</h6>
              </div>
              <div class="info pt-3 d-flex justify-content-between">
                <div class="rating">
                  <img
                    src="images/star_on.png"
                    alt="star on"
                    width="15px"
                  />
                  <img
                    src="images/star_on.png"
                    alt="star on"
                    width="15px"
                  />
                  <img
                    src="images/star_on.png"
                    alt="star on"
                    width="15px"
                  />
                  <img
                    src="images/star_on.png"
                    alt="star on"
                    width="15px"
                  />
                  <img
                    src="images/star_off.png"
                    alt="star on"
                    width="15px"
                  />
                </div>
                <span class="main-color">8 min</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3 d-none d-lg-flex justify-content-center">
          <div class="card">
            <img
            src="../images/${thumbnail3}"
              class="card-img-top"
              alt="Video thumbnail"
            />
            <div class="card-img-overlay text-center">
              <img
                src="images/play.png"
                alt="Play"
                width="64px"
                class="align-self-center play-overlay"
              />
            </div>
            <div class="card-body">
              <h5 class="card-title font-weight-bold">
              ${title3}
              </h5>
              <p class="card-text text-muted">
              ${desc3}
              </p>
              <div class="creator d-flex align-items-center">
                <img
                  src="../images/${icon3}"
                  alt="Creator of
                  Video"
                  width="30px"
                  class="rounded-circle"
                />
                <h6 class="pl-3 m-0 main-color">${name3}</h6>
              </div>
              <div class="info pt-3 d-flex justify-content-between">
                <div class="rating">
                  <img
                    src="images/star_on.png"
                    alt="star on"
                    width="15px"
                  />
                  <img
                    src="images/star_on.png"
                    alt="star on"
                    width="15px"
                  />
                  <img
                    src="images/star_on.png"
                    alt="star on"
                    width="15px"
                  />
                  <img
                    src="images/star_on.png"
                    alt="star on"
                    width="15px"
                  />
                  <img
                    src="images/star_off.png"
                    alt="star on"
                    width="15px"
                  />
                </div>
                <span class="main-color">8 min</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3 d-none d-lg-flex justify-content-center">
          <div class="card">
            <img
              src="../images/${thumbnail4}"
              class="card-img-top"
              alt="Video thumbnail"
            />
            <div class="card-img-overlay text-center">
              <img
                src="images/play.png"
                alt="Play"
                width="64px"
                class="align-self-center play-overlay"
              />
            </div>
            <div class="card-body">
              <h5 class="card-title font-weight-bold">${title4}</h5>
              <p class="card-text text-muted">
              ${desc4}
              </p>
              <div class="creator d-flex align-items-center">
                <img
                  src="../images/${icon4}"
                  alt="Creator of
                  Video"
                  width="30px"
                  class="rounded-circle"
                />
                <h6 class="pl-3 m-0 main-color">${name4}</h6>
              </div>
              <div class="info pt-3 d-flex justify-content-between">
                <div class="rating">
                  <img
                    src="images/star_on.png"
                    alt="star on"
                    width="15px"
                  />
                  <img
                    src="images/star_on.png"
                    alt="star on"
                    width="15px"
                  />
                  <img
                    src="images/star_on.png"
                    alt="star on"
                    width="15px"
                  />
                  <img
                    src="images/star_on.png"
                    alt="star on"
                    width="15px"
                  />
                  <img
                    src="images/star_off.png"
                    alt="star on"
                    width="15px"
                  />
                </div>
                <span class="main-color">8 min</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      `;
  
      carouselInner.appendChild(newCard);
    }
  

    appendNewvideo(
    //thumbnai,title,desc,icon,name
      "thumbnail_2.jpg",
      "Somfetimes I smile upside-down",
      "A frown is an upside down smile! Or something along those lines. I dont know really...",
      "profile_2.jpg",
      "Jane Doe",

      
      //thumbnai,title,desc,icon,name
      "thumbnail_1.jpg",
      "Heartwarming Grin",
      "A grin is a smile too. It just means showing more teeth. but not too much.",
      "profile_3.jpg",
      "John Doe",

      //thumbnai,title,desc,icon,name
      "thumbnail_4.jpg",
      "Smile at an angle",
      "I was gonna write a description for my video, but I got distracted by a bug.",
      "profile_1.jpg",
      "Joe Dohn",

      //thumbnai,title,desc,icon,name
      "thumbnail_1.jpg",
      "Smile",
      "Smile smile smile smile smile smile smile smile smile smile smile smile smile",
      "profile_4.jpg",
      "Johnny Bravo",
    );
  });