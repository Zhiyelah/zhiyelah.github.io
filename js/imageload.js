(function loadImg() {
  let img = new Image();
  img.src = '../images/bg.jpg';
  img.onload = function(){
    document.getElementById('header').append(img);
  };
})()

