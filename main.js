{
  const setImage = [
    "./back-images/backimage1.JPG",
    "./back-images/backimage2.JPG",
    "./back-images/backimage3.JPG",
    "./back-images/backimage4.JPG",
    "./back-images/backimage5.JPG",
  ]
  
  let counter = 0;
  
  function slideimage() {
    if(counter >= (setImage.length)) {
      counter = 0;
    }
  
    document.getElementById("header-back").style.backgroundImage = "url(" + setImage[counter] + ")";
    counter++;
  }
    
  setInterval("slideimage()",3000);
  
  
  }