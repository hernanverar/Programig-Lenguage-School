
window.onload = function () {
  const form = document.querySelector("form")
  form.onsubmit = function(e) {
    e.preventDefault();
  const Lenguage = document.getElementById("Lenguage").value;
  

    let bike = document.getElementById("bike");
    bike.setAttribute("class", "hidden");

    let bus = document.getElementById("bus");
    bus.setAttribute("class", "hidden");

    if (Lenguage === "bike") {
      bike.removeAttribute("class", "hidden");

    } else if (bus) {
      bus.removeAttribute("class", "hidden");
    }
  };

};