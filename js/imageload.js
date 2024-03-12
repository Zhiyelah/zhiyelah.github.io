(function loadImg() {
  let img = new Image();
  img.src = 'url(\"images/overlay.png\"), url(\"../images/bg.jpg\")';
  img.onload = function(){
    document.getElementById('header').style.backgroundImage = img.src;
  };
})()

