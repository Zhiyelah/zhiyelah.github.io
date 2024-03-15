(function(){
  var date=new Date();
  var hour=date.getHours();
  if(hour>18||hour<5){
    try{
      document.getElementById('primary').getElementsByTagName('h1')[0].style.color='#dedede';
      document.getElementById('primary').getElementsByTagName('h3')[0].style.color='#d1d1d1';
      var hovers = document.getElementsByClassName('hover');
      for (var i = 0; i < hovers.length; ++i) {
        hovers[i].style.color='#e1e1e1';
      }
      var fades = document.getElementsByClassName('fade');
      for (var i = 0; i < fades.length; ++i) {
        fades[i].onmouseover = function() {
          this.style.color='#e1e1e1';
        };
        fades[i].onmouseout = function() {
          this.style.color='#9b9b9b';
        }
      }
    }catch(e){}

    try{
      document.getElementById('main').getElementsByTagName('article')[0].getElementsByTagName('header')[0].getElementsByTagName('h1')[0].style.color='#f5f5f5';
      document.getElementById('main').getElementsByTagName('article')[0].getElementsByTagName('section')[0].style.color='#cfcfcf';

      var hovers = document.getElementsByClassName('hover');
      for (var i = 0; i < hovers.length; ++i) {
        hovers[i].style.color='#e1e1e1';
      }
      var fades = document.getElementsByClassName('fade');
      for (var i = 0; i < fades.length; ++i) {
        fades[i].onmouseover = function() {
          this.style.color='#e1e1e1';
        };
        fades[i].onmouseout = function() {
          this.style.color='#9b9b9b';
        }
      }
    }catch(e){}
  }
})()
