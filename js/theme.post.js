(function(){
  var date=new Date();
  var hour=date.getHours();
  if(hour>18||hour<5){
    try{
      try{
        var h1s = document.getElementsByTagName('h1');
        for (var i = 0; i < h1s.length; ++i) {
          h1s[i].style.color='#dedede';
        }
      }catch(e){}
      try{
        var h2s = document.getElementsByTagName('h2');
        for (var i = 0; i < h2s.length; ++i) {
          h2s[i].style.color='#dcdcdc';
        }
      }catch(e){}
      try{
        var h3s = document.getElementsByTagName('h3');
        for (var i = 0; i < h3s.length; ++i) {
          h3s[i].style.color='#d1d1d1';
        }
      }catch(e){}
      try{
        var h4s = document.getElementsByTagName('h4');
        for (var i = 0; i < h4s.length; ++i) {
          h4s[i].style.color='#cfcfcf';
        }
      }catch(e){}
      try{
        var h5s = document.getElementsByTagName('h5');
        for (var i = 0; i < h5s.length; ++i) {
          h5s[i].style.color='#cdcdcd';
        }
      }catch(e){}
      try{
        var h6s = document.getElementsByTagName('h6');
        for (var i = 0; i < h6s.length; ++i) {
          h6s[i].style.color='#cacaca';
        }
      }catch(e){}
      var codes = document.getElementsByClassName('language-plaintext highlighter-rouge');
      for (var i = 0; i < codes.length; ++i) {
        codes[i].style.backgroundColor='#494949';
        codes[i].style.color='#d6d6d6';
        codes[i].style.borderColor='#494949';
      }
      var hovers = document.getElementsByClassName('hover');
      for (var i = 0; i < hovers.length; ++i) {
        hovers[i].style.color='#e1e1e1';
      }
      var fades = document.getElementsByClassName('fade');
      for (var i = 0; i < fades.length; ++i) {
        fades[i].style.color='#adadad';
        fades[i].onmouseover = function() {
          this.style.color='#e1e1e1';
        };
        fades[i].onmouseout = function() {
          this.style.color='#adadad';
        };
      }
    }catch(e){}

    try{
      document.getElementById('main').getElementsByTagName('article')[0].getElementsByTagName('header')[0].getElementsByTagName('h1')[0].style.color='#f5f5f5';
      document.getElementById('main').getElementsByTagName('article')[0].getElementsByTagName('section')[0].style.color='#d6d6d6';

      try{
        var h1s = document.getElementsByTagName('h1');
        for (var i = 0; i < h1s.length; ++i) {
          h1s[i].style.color='#dedede';
        }
      }catch(e){}
      try{
        var h2s = document.getElementsByTagName('h2');
        for (var i = 0; i < h2s.length; ++i) {
          h2s[i].style.color='#dcdcdc';
        }
      }catch(e){}
      try{
        var h3s = document.getElementsByTagName('h3');
        for (var i = 0; i < h3s.length; ++i) {
          h3s[i].style.color='#d1d1d1';
        }
      }catch(e){}
      try{
        var h4s = document.getElementsByTagName('h4');
        for (var i = 0; i < h4s.length; ++i) {
          h4s[i].style.color='#cfcfcf';
        }
      }catch(e){}
      try{
        var h5s = document.getElementsByTagName('h5');
        for (var i = 0; i < h5s.length; ++i) {
          h5s[i].style.color='#cdcdcd';
        }
      }catch(e){}
      try{
        var h6s = document.getElementsByTagName('h6');
        for (var i = 0; i < h6s.length; ++i) {
          h6s[i].style.color='#cacaca';
        }
      }catch(e){}
      var codes = document.getElementsByClassName('language-plaintext highlighter-rouge');
      for (var i = 0; i < codes.length; ++i) {
        codes[i].style.backgroundColor='#494949';
        codes[i].style.color='#d6d6d6';
        codes[i].style.borderColor='#494949';
      }
      var codesC = document.getElementsByClassName('language-C');
      for (var i = 0; i < codesC.length; ++i) {
        codesC[i].style.backgroundColor='#494949';
        codesC[i].style.color='#d6d6d6';
      }
      var hovers = document.getElementsByClassName('hover');
      for (var i = 0; i < hovers.length; ++i) {
        hovers[i].style.color='#e1e1e1';
      }
      var fades = document.getElementsByClassName('fade');
      for (var i = 0; i < fades.length; ++i) {
        fades[i].style.color='#adadad';
        fades[i].onmouseover = function() {
          this.style.color='#e1e1e1';
        };
        fades[i].onmouseout = function() {
          this.style.color='#adadad';
        };
      }
    }catch(e){}
  }
})()
