
window.onload = () =>{
  document.querySelector("form").onsubmit = (e) => {
    e.preventDefault();

  const Lenguage = document.getElementById("Lenguage").value;
  // const Lenguage1= document.getElementById("Lenguage1").value;

    let car = document.getElementById("car");
    car.setAttribute("class", "hidden");

    let bus = document.getElementById("bus");
    bus.setAttribute("class", "hidden");
    let bike = document.getElementById("bike");
    bike.setAttribute("class", "hidden");
    let train = document.getElementById("train");
    train.setAttribute("class", "hidden");
    

    if (Lenguage === "car") {
        car.removeAttribute("class", "hidden");
    } else if (Lenguage === "bus") {
        bus.removeAttribute("class", "hidden");
    } else if (Lenguage === "bike") {
        bike.removeAttribute("class", "hidden");
    } else if (Lenguage === "train") {
        train.removeAttribute("class", "hidden");
      }

  };

};