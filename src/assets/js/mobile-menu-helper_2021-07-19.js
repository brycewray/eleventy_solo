// based on https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/javascript/navbars

document.getElementById('collapse-button').addEventListener("click", function() {
  document.getElementById('collapse-navbar').classList.toggle("hidden")
  document.getElementById('collapse-navbar').classList.toggle("flex")
})