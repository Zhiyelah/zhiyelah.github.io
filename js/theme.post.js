(function(){
  var date=new Date();
  var hour=date.getHours();
  if(hour>18||hour<5){
    try{
      document.getElementById('primary').getElementsByTagName('h1')[0].style.color='#dedede';
      document.getElementById('primary').getElementsByTagName('h3')[0].style.color='#d1d1d1';
      var hovers = document.getElementsByClassName('hover');
      for (var i = 0; i < hovers.length; ++i) {
        hovers[i].style.color='#e8e8e8';
      }
      var fades = document.getElementsByClassName('fade');
      for (var i = 0; i < fades.length; ++i) {
        fades[i].onmouseover = function() {
          this.style.color='#e8e8e8';
        };
        fades[i].onmouseout = function() {
          this.style.color='#9b9b9b';
        }
      }
    }catch(e){}

    try{
      document.getElementById('main').getElementsByTagName('article')[0].getElementsByTagName('header')[0].getElementsByTagName('h1')[0].style.color='#f5f5f5';
      document.getElementById('main').getElementsByTagName('article')[0].getElementsByTagName('section')[0].style.color='#cfcfcf';

      var articles = document.getElementById('main').getElementsByTagName('article')[0].getElementsByTagName('footer')[0].getElementsByTagName('div')[0].getElementsByTagName('article');
      for (var i = 0; i < articles.length; ++i) {
        articles[i].getElementsByTagName('header')[0].getElementsByTagName('h2')[0].getElementsByTagName('a')[0].style.color='#e8e8e8';
      }
      
    }catch(e){}
  }
})()
