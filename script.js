
window.onload = function () {
  const form = document.querySelector("form")
  form.onsubmit = function(e) {
    e.preventDefault();
  const Ruby = document.getElementById("Ruby").value;
  // const Javascript = document.getElementById("Javascript").value;

    let car = document.getElementById("car");
    car.setAttribute("class", "hidden");
    // let bus = document.getElementById("bus");
    // bus.setAttribute("class", "hidden");

    if (Ruby === "car") {
      car.removeAttribute("class", "hidden");
    // }else if (Javascript === bus) {
    //   bus.removeAttribute("class", "hidden");
    }
  }

}