/*main tab*/
function openInNewTab(url){
  window.open(url, '_blank').focus();
}

/* slide show*/
let slideIndex=0;
const slides= document.getElementsByClassName("mySlides");

function nextSlide(){
  if(slideIndex < slides.length -1){
    slideIndex++;
  } else{
    slideIndex=0;
  }
  showSlides();
}

function previousSlide(){
  if(slideIndex < slides.length){
    slideIndex--;
  } else{
    slideIndex=slides.length;
  }
  showSlides();
}

function showSlides(){
    for (let slide of slides) {
      slide.classList.remove("active");
    }
    
  slides[slideIndex].classList.add("active");
}

