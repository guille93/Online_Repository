var user = {  

			}
var responses = []

function question1() {
  var name = prompt('What is your name?');
  user.name = name ;
responses.push(user);
}
question1();


function question2() {

  var firstQuestion = prompt('Does null === 0 ? (Yes or No)')

// why do you need to convert the answer to lowercase?
  if (firstQuestion.toLowerCase() === 'yes') {
    firstQuestion = true
  } else if (firstQuestion.toLowerCase() === 'no') {
    firstQuestion = false
  } else {
// what if the user writes something other than yes or no? 
// they will have to answer the question again
    alert("Please answer either Yes or No");
    return question2();
  }
  responses.push(firstQuestion); // add the true or false value to the responses array
}

question2();

function question3() {
  var js = prompt('What was the original name for JavaScript: Java, LiveScript, JavaLive, or ScriptyScript?');
  js = js.toLowerCase();
  switch (js.toLowerCase()) {
  	case "java":
  		js = false;
  		break;
  	case "livescript":
  		js = true;
  		break;

  	case "javalive":
  		js = false;
  		break;

  	case "scriptyscript":
  		js = false;
  		break;

  	default:
  		alert("Choice an option")
      return question3()

      

    // your own answers
  }
  responses.push(js);
}

question3();

function question4() {

  var secondQuestion = prompt('Do you live in Madrid? (Yes or No)')

// why do you need to convert the answer to lowercase?
  if (secondQuestion.toLowerCase() === 'yes') {
    secondQuestion = true
  } else if (secondQuestion.toLowerCase() === 'no') {
    secondQuestion = false
  } else {
// what if the user writes something other than yes or no? 
// they will have to answer the question again
    alert("Please answer either Yes or No");
    return question4();
  }
  responses.push(secondQuestion); // add the true or false value to the responses array
}

question4();

function question5() {
  var multi = prompt('what color is the sky? (red, blue or yellow)');
  multi = multi.toLowerCase();
  switch (multi) {
    case "red":
      multi = false
      break;
    case "blue":
      multi = true
      break;

    case "yellow":
      multi = false
      break;

    default:
      alert("Choice an option")
      return question5
    // your own answers
  }
  responses.push(multi);
}

question5();



function evaluate(responses) {
  var correct =  0
  var wrong = 0 
  
  for(i=1;i<=responses.length;i++){
  
  
    if (responses[i] === true){
           correct += 1;
       }else{
            wrong += 1;
       }
 user.correct = correct;
 user.wrong = wrong;
 }

  }
function showResults() {
    alert(user.name + ' ha tenido ' + user.correct + ' respuestas correctas y ha fallado  ' + user.wrong + ' preguntas.')
}

evaluate(responses);
showResults();



