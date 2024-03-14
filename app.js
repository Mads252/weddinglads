var elements = document.getElementsByClassName('countdown');


var countDownDate = new Date("Mar 22, 2024 00:00:00").getTime();


var x = setInterval(function() {


  var now = new Date().getTime();


  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

 
  for (var i = 0; i < elements.length; i++) {
    elements[i].innerHTML = + days + " dage til dit bryllup ";
  }


  if (distance < 0) {
    clearInterval(x);
    for (var i = 0; i < elements.length; i++) {
      elements[i].innerHTML = "EXPIRED";
    }
  }
}, 1000);

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader--hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader);
  });
});











let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("billeder_slides");
  let dots = document.getElementsByClassName("prik");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" aktiv_prik", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " aktiv_prik";
  setTimeout(showSlides, 5000); 
}




// dette er vores firebase test til ønskelisten
