(function changeTheme(){
  var date=new Date();
  var hour=date.getHours();
  if(hour>18){
    var tags = document.getElementById('main').getElementsByTagName('section');
    for (var i = 0; i < arr.length; ++i) {
      tags[i].getElementsByTagName('section')[0].style.color = '#fcfcfc';
    }
  }
})()
