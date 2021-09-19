/*main tab*/
function openInNewTab(url){
  window.open(url, '_blank').focus();
}

/* slide show*/
function nextSlide(){
  showSlides(slideIndex +=1);
}

function previousSlide(){
  showSlides(slideIndex -=1);
}

function currentSlide(n){
  showSlides(slideIndex=n);
}

/* Flip function: */
function showSlides(n) {
  let i;

  let slides = document.getElementsByClassName("mySlides");
  
  /* Checking the number of slides: */
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
      slideIndex = slides.length
  }

  /* Loop through each slide in a for loop: */
  for (let slide of slides) {
      slide.style.display = "none";
  }

  /* Making an element block: */
  slides[slideIndex - 1].style.display = "block";    
}

let slideIndex= 0;
showSlides(slideIndex);