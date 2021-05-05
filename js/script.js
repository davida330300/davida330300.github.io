       //javascript for navigation bar effects on scroll
       window.addEventListener("scroll", function(){
        const header = document.querySelector("header");
        header.classList.toggle('sticky', window.scrollY > 0);
      });
            
      const menuBtn = document.querySelector(".menu-btn");
      const navigation = document.querySelector(".navigation");
      const navigationItems = document.querySelectorAll(".navigation a")
            
      menuBtn.addEventListener("click",  () => {
        menuBtn.classList.toggle("active");
        navigation.classList.toggle("active");
      });
            
      navigationItems.forEach((navigationItem) => {
        navigationItem.addEventListener("click", () => {
          menuBtn.classList.remove("active");
          navigation.classList.remove("active");
        });
      });
            

            const scrollBtn = document.querySelector(".scrollToTop-btn");
            
            window.addEventListener("scroll", function(){
              scrollBtn.classList.toggle("active", window.scrollY > 500);
            });
            
            scrollBtn.addEventListener("click", () => {
              document.body.scrollTop = 0;
              document.documentElement.scrollTop = 0;
            });
            
            window.addEventListener("scroll", reveal);
            
            function reveal(){
              var reveals = document.querySelectorAll(".reveal");
            
              for(var i = 0; i < reveals.length; i++){
                var windowHeight = window.innerHeight;
                var revealTop = reveals[i].getBoundingClientRect().top;
                var revealPoint = 50;
            
                if(revealTop < windowHeight - revealPoint){
                  reveals[i].classList.add("active");
                }
              }
            }
    var textWrapper = document.querySelector('.topic .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    
    anime.timeline({loop: true})
      .add({
        targets: '.topic .letter',
        scale: [0.3,1],
        opacity: [0,1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 600,
        delay: (el, i) => 70 * (i+1)
      }).add({
        targets: '.topic',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });
    
    let slideIndex = 1;
    showSlides();
    
    // Next/previous controls
    function plusSlides(n) {
      showSlides(slideIndex += n);
      console.log("wtf")
    }
    
    // Thumbnail image controls
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
    }
    