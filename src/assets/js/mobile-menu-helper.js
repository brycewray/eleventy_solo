// based on https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/javascript/navbars

function toggleNavbar(collapseID){
  document.getElementById(collapseID).classList.toggle("hidden");
  document.getElementById(collapseID).classList.toggle("flex");
}