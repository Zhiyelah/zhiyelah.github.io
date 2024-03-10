(function changeTheme(){
  var date=new Date();
  var hour=date.getHours();
  if(hour>18||hour<5){
    try {
      document.getElementById('main').getElementsByTagName('section')[0].getElementsByTagName('header')[0].getElementsByTagName('h1')[0].style.color = '#f5f5f5';
      document.getElementById('main').getElementsByTagName('section')[0].getElementsByTagName('section')[0].style.color = '#cfcfcf';
    } catch (error) {}

    try {
      document.getElementById('main').getElementsByTagName('article')[0].getElementsByTagName('header')[0].getElementsByTagName('h1')[0].style.color = '#f5f5f5';
      document.getElementById('main').getElementsByTagName('article')[0].getElementsByTagName('section')[0].style.color = '#cfcfcf';
    } catch (error) {}
  }
})()
