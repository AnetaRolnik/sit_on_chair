document.addEventListener("DOMContentLoaded", function(){

    //Dropdown menu in header
    var dropdown = document.querySelectorAll(".page-nav-list>li");

    for (var i=0; i<dropdown.length; i++) {

      dropdown[i].addEventListener("mouseenter", function(){
          var dropdownContent = this.querySelector(".page-nav-sublist");
          if (dropdownContent!=null) {
              dropdownContent.style.opacity = "1";
              dropdownContent.style.visibility = "visible";
          }
      })

      dropdown[i].addEventListener("mouseleave", function(){
          var dropdownContent = this.querySelector(".page-nav-sublist");
          if (dropdownContent!=null) {
              dropdownContent.style.opacity = "0";
              dropdownContent.style.visibility = "hidden";
          }
      })

    }

    // Hiding a block with the name after hovering over the image
    var boxImg = document.querySelectorAll(".box-image");

    for (var i=0; i<boxImg.length; i++) {

        boxImg[i].addEventListener("mouseenter", function(){
            var boxTitle = this.querySelector(".image-title");
            boxTitle.style.opacity = "0";
            boxTitle.style.transition = "opacity 0.8s";
        })

        boxImg[i].addEventListener("mouseleave", function(){
            var boxTitle = this.querySelector(".image-title");
            boxTitle.style.opacity = "1";
            boxTitle.style.transition = "opacity 1.5s";
        })

    }
    

    //Slider in section with banner
    var prevBtn= document.querySelector(".banner-prev");
    var nextBtn= document.querySelector(".banner-next");
    var bannerSlide = document.querySelectorAll(".banner-slide");

    nextBtn.addEventListener("click", function(){
        if (bannerSlide[0].className.indexOf("banner--slide--active") != -1) {
            bannerSlide[0].classList.remove("banner--slide--active");
            bannerSlide[1].classList.add("banner--slide--active");
        } else {
            bannerSlide[1].classList.remove("banner--slide--active");
            bannerSlide[0].classList.add("banner--slide--active");
        }
    })

    prevBtn.addEventListener("click", function(){
      if (bannerSlide[0].className.indexOf("banner--slide--active") != -1) {
          bannerSlide[0].classList.remove("banner--slide--active");
          bannerSlide[1].classList.add("banner--slide--active");
      } else {
          bannerSlide[1].classList.remove("banner--slide--active");
          bannerSlide[0].classList.add("banner--slide--active");
      }

    })


})
