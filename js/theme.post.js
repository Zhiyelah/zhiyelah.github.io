(function changeTheme(){
  var date=new Date();
  var hour=date.getHours();
  if(hour>18||hour<5){
    try {
      document.getElementById('main').getElementsByTagName('section')[0].getElementsByTagName('header')[0].getElementsByTagName('h1')[0].style.color = '#f5f5f5';
      document.getElementById('main').getElementsByTagName('section')[0].getElementsByTagName('section')[0].style.color = '#cfcfcf';
      document.getElementById('main').getElementsByTagName('section')[1].getElementsByTagName('div')[0].getElementsByTagName('article')[0].getElementsByTagName('header')[0].getElementsByTagName('h2')[0].style.color = '#f1f1f1';
    } catch (e) {}

    try {
      document.getElementById('main').getElementsByTagName('article')[0].getElementsByTagName('header')[0].getElementsByTagName('h1')[0].style.color = '#f5f5f5';
      document.getElementById('main').getElementsByTagName('article')[0].getElementsByTagName('section')[0].style.color = '#cfcfcf';
    } catch (e) {}
  }
})()
