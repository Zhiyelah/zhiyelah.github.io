(function(){
  var date=new Date();
  var hour=date.getHours();
  if(hour>18||hour<5){
    try{
      try{
        document.getElementById('primary').getElementsByTagName('h1')[0].style.color='#f5f5f5';
      }catch(e){}
      try{
        document.getElementById('primary').getElementsByTagName('h2')[0].style.color='#f5f5f5';
      }catch(e){}
      try{
        document.getElementById('primary').getElementsByTagName('h3')[0].style.color='#f5f5f5';
      }catch(e){}
      try{
        document.getElementById('primary').getElementsByTagName('h4')[0].style.color='#f5f5f5';
      }catch(e){}
      try{
        document.getElementById('primary').getElementsByTagName('h5')[0].style.color='#f5f5f5';
      }catch(e){}
      try{
        document.getElementById('primary').getElementsByTagName('h6')[0].style.color='#f5f5f5';
      }catch(e){}
      var i=0;
      try{
        while(1){
          document.getElementsByClassName('hover')[i].style.color='#f2f2f2';
          i++;
        }
      }catch(e){}
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
