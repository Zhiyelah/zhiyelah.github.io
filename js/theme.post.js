(function(){
  var date=new Date();
  var hour=date.getHours();
  if(hour>18||hour<5){
    try{
      for(let hs in ['h1','h2','h3','h4','h5','h6']){
        try{
          document.getElementById('primary').getElementsByTagName(hs)[0].style.color='#f5f5f5';
        }catch(e){
          continue;
        }
      }
      document.getElementById('postitle').style.color='#f2f2f2';
    }catch(e){}
    try{
      document.getElementById('main').getElementsByTagName('article')[0].getElementsByTagName('header')[0].getElementsByTagName('h1')[0].style.color='#f5f5f5';
      for(let hs in ['h1','h2','h3','h4']){
        try{
          document.getElementById('main').getElementsByTagName('article')[0].getElementsByTagName('section')[0].getElementsByTagName(hs)[0].style.color='#f5f5f5';
        }catch(e){
          continue;
        }
      }
      document.getElementById('main').getElementsByTagName('article')[0].getElementsByTagName('section')[0].style.color='#cfcfcf';
    }catch(e){}
  }
})()
