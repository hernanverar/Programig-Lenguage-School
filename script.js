

function clickQ1() {
  let answer1;
  let answers = document.querySelector("input[type=radio]:checked").value;

  if (answers == "transportq1") {
        document.getElementById("q2").style = "visible";
  }  else if (answers == "transportq2") {
        document.getElementById("q3").style = "visible";
  }  else if (answers == "transportq3") {
        document.getElementById("q4").style = "visible";
  }  else if (answers == "transportq4") {
        document.getElementById("q5").style = "visible";
  }  else if (answers == "transportq5") {
        document.getElementById("q6").style = "visible";
  }  else if (answers == "transportq6") {
        document.getElementById("q7").style = "visible";
  }  else if (answers == "transportq7") {
        document.getElementById("q8").style = "visible";
  }  else if (answers == "transportq8") {
    document.getElementById("q9").style = "visible";
  }  else if (answers == "transportq9") {
    document.getElementById("q10").style = "visible";
  }

}


