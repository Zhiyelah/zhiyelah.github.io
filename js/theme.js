function changeTheme() {
  var date = new Date();
  var hour = date.getHours();
  document.getElementById('header').style.color = "#fcfcfc";
  document.getElementById('top').style.backgroundColor = "#4b4b4b";
}

window.onload = changeTheme;

