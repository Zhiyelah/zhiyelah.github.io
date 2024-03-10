(function changeTheme(){
  var date=new Date();
  var hour=date.getHours();
  if(hour>18){
    document.getElementById('main').getElementsByTagName('section')[0].getElementsByTagName('header')[0].style.color = '#fafafa';
    document.getElementById('main').getElementsByTagName('section')[0].getElementsByTagName('section')[0].style.color = '#dfdfdf';
  }
})()
