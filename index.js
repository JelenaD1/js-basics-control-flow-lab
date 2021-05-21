function scuberGreetingForFeet(someNumber){
  if (someNumber <=400){
    return "This one is on me!"
  } else if (someNumber > 2000 && someNumber <= 2500){
    return "I will gladly take your thirty bucks."
  }
  else if (someNumber > 2500){
    return "No can do."
  }
}


  // Write your code here!

function ternaryCheckCity(city){
  const checkCity = city === "NYC" ? "Ok, sounds good." : "No go."
  return checkCity

}

function switchOnCharmFromTip(tip){
  let comment;
  switch (tip) {
    case "generous":
      comment = "Thank you so much.";
      break;
    case "not as generous":
      comment = "Thank you.";
      break;
    case "thanks for everything":
      comment = "Bye.";
      break;
      }
      return comment 
    }
