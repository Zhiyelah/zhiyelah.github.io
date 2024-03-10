function changeTheme() {
  var date = new Date();
  var hour = date.getHours();
  if (false) {
    document.getElementById("main").style.color = "#4b4b4b";
    document.getElementById("main").style.background-color = "#fcfcfc";
  } else {
    document.getElementById("main").style.color = "#fcfcfc";
    document.getElementById("main").style.background-color = "#4b4b4b";
  }
}

window.onload = changeTheme;

