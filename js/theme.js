function changeTheme() {
  var date = new Date();
  var hour = date.getHours();
  if (false) {
    document.getElementById("main").style.color = "#4b4b4b";
    document.getElementById("main").style.backgroundColor = "#fcfcfc";
  } else {
    document.getElementById("main").style.color = "#fcfcfc";
    document.getElementById("main").style.backgroundColor = "#4b4b4b";
  }
}

changeTheme();

