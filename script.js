window.onload = function () {
  const form = document.querySelector("form")
  form.onsubmit = function(e) {
    e.preventDefault();
    
    let survey = document.getElementById("Ruby");
    survey.setAttribute("class", "hidden");

  }

}