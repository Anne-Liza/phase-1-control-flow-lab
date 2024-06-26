function scuberGreetingForFeet(feet){
  // Write your code here!
  let result;
  if (feet <= 400){
     result="This one is on me!"
     return result;
    }
    else if (feet>400 && feet<2000){
      result="That will be twenty bucks."
      return result;
    }
    else if (feet>2000 && feet<=2500){
      result="I will gladly take your thirty bucks."
      return result;
    }
    else if(feet>=2500){
      result="No can do."
      return result;
    }
  }
  
    


function ternaryCheckCity(city){
  // Write your code here!
    const result =(city==="NYC")? "Ok, sounds good." : "No go.";
    return result;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip) {
    case "generous":
      return "Thank you so much."
      break;
    case "not as generous":
      return "Thank you."
      break;
    default:
      return "Bye."
  }
}