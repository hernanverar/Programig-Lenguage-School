

window.onload = () =>{
  document.querySelector("form").onsubmit = (e) => {
    e.preventDefault();
  const Lenguage = document.getElementById("Lenguage").value;
  
    let car = document.getElementById("car");
    car.setAttribute("class","hidden");
    let bus = document.getElementById("bus");
    bus.setAttribute("class", "hidden");
    
    if (Lenguage === "car") {
        car.removeAttribute("class", "hidden");
    } else if (Lenguage === "bus") {
        bus.removeAttribute("class", "hidden");
    } 
  }

    const Lenguage = document.getElementById("lenguage").value;

    let Mexican = document.getElementById("Mexican");
      Mexican.setAttribute("class","hidden");

    if (Lenguage + "car" === "Mexican") {
      Mexican.removeAttribute("class", "hidden");
    } else if (Lenguage === "Italian") {
      Italian.removeAttribute("class", "hidden");
    
    } 

};
