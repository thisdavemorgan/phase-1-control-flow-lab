function scuberGreetingForFeet(someNumber){
  let result;
  if (someNumber <= 400){
    result = "This one is on me!";
  }
  else if (someNumber <= 2000){
    result = "That will be twenty bucks.";
  }
  else if (someNumber <= 2500){
  result = "I will gladly take your thirty bucks.";
  }
  else if (someNumber > 2500){
    result = "No can do.";
  }
  return result;
}

function ternaryCheckCity(city){
  let result = (city == "NYC") ? "Ok, sounds good." : "No go.";
return result;
}
ternaryCheckCity("NYC");



function switchOnCharmFromTip(charm){
  let charmMessage 
  switch (charm){
    case "generous":
      charmMessage = "Thank you so much.";
        break;
  case "not as generous":
    charmMessage = "Thank you.";
      break;
  default:
    charmMessage = "Bye.";
    break;
  }
  return charmMessage;
}