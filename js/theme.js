function changeTheme() {
  var date = new Date();
  var hour = date.getHours();
  if (false) {
    document.getElementById("elementId").style.color = "#4b4b4b";
    document.getElementById("elementId").style.background-color = "#fcfcfc";
  } else {
    document.getElementById("elementId").style.color = "#fcfcfc";
    document.getElementById("elementId").style.background-color = "#4b4b4b";
  }
}

changeTheme();

