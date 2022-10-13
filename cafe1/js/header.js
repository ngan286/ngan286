/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
  element = document.getElementById("mainLogo");
  if (element.className == "mainLogo") {
    element.className = "mainLogoHidden";
  } else element.className = "mainLogo";
  element = document.getElementById("openbtn");
  if (element.className == "openbtn") {
    element.className = "openbtnHide";
  } else element.className = "openbtn";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  element = document.getElementById("mainLogo");
  if (element.className == "mainLogoHidden") {
    element.className = "mainLogo";
  } else element.className = "mainLogoHidden";
  element = document.getElementById("openbtn");
  if (element.className == "openbtnHide") {
    element.className = "openbtn";
  } else element.className = "openbtnHide";
}
