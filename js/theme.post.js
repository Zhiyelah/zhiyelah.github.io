(function(){
  var date=new Date();
  var hour=date.getHours();
  if(hour>18||hour<5){
    try{
      document.getElementById('primary').getElementsByTagName('h1')[0].style.color='#f8f8f8';
      document.getElementById('primary').getElementsByTagName('h3')[0].style.color='#f5f5f5';
    }catch(e){}
    try{
      document.getElementById('main').getElementsByTagName('article')[0].getElementsByTagName('header')[0].getElementsByTagName('h1')[0].style.color='#f5f5f5';
      document.getElementById('main').getElementsByTagName('article')[0].getElementsByTagName('section')[0].style.color='#cfcfcf';
      try{
        document.getElementById('main').getElementsByTagName('article')[0].getElementsByTagName('footer')[0].getElementsByTagName('div')[0].getElementsByTagName('article')[0].getElementsByTagName('header')[0].getElementsByTagName('h2')[0].getElementsByTagName('a')[0].style.color='#f2f2f2';
      }catch(e){}
      try{
        document.getElementById('main').getElementsByTagName('article')[0].getElementsByTagName('footer')[0].getElementsByTagName('div')[0].getElementsByTagName('article')[1].getElementsByTagName('header')[0].getElementsByTagName('h2')[0].getElementsByTagName('a')[0].style.color='#f2f2f2';
      }catch(e){}
    }catch(e){}
  }
})()
