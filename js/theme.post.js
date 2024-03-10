(function changeTheme(){
  var date=new Date();
  var hour=date.getHours();
  if(hour>18){
    for (eles in document.getElementById('main').getElementsByTagName('section')) {
      eles.getElementsByTagName('section').style.color = '#fcfcfc';
    }
  }
})()
