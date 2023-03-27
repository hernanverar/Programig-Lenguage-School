

function clickQ1(){
  let answer1;
  let q1 = document.getElementById('q1');
  let q2 = document.getElementById('q2');
  let q3 = document.getElementById('q3');
  let q4 = document.getElementById('q4');

  let answer = document.getElementsByName("transport");

  for(i = 0; i < answer.length; i++) {
      if (answer[i].checked) {
          answer1 = answer[i].value;
      }
  }

  switch(answer1)
  {
      case 'transportq1':
          console.log('this was your answer ',answer1);
          q1.style.visibility = 'hidden';
          q2.style.visibility = 'visible';
          break;
      case 'transportq2':
          console.log('this was your answer  ',answer1);
          q1.style.visibility = 'hidden';
          q3.style.visibility = 'visible';
          break;
      case 'transportq3':
          console.log('answer was ',answer1);
          q1.style.visibility = 'hidden';
          q4.style.visibility = 'visible';
          break;
  }

  
};

function clickBtnBus(){
  let q5 = document.getElementById('q5');
  let answer1 = document.getElementById('answer1');
  let answer2 = document.getElementById('answer2');
  let answerTransport = document.getElementsByName("transport");

  for(i = 0; i < answerTransport.length; i++) {
      if (answerTransport[i].checked){
          answerTransport = answerTransport[i].value;
      }
  }

  let answerBus = document.getElementsByName("bus");

  for(i = 0; i < answerBus.length; i++) {
      if (answerBus[i].checked){
        
          answerBus = answerBus[i].value;
      }
  }

  q5.style.visibility = 'visible';

  answer1.innerHTML = answerTransport;
  answer2.innerHTML = answerBus;
}