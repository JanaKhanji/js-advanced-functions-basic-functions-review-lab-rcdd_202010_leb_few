// Your code here
function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity="go to the office") {
  return `This Monday, I will ${activity}.`
}


function wrapAdjective(visual  ="*") {
  return function(however ="special") {
    return `You are ${visual}${however}${visual}!`
  }
}
 wrapAdjective("%")("a dedicated programmer") 
 
 const Calculator = {
  add: function(a,b) {
    return a + b;
  },
  subtract: function(a,b) {
    return a - b
  },
  multiply: function(a,b) {
    return a * b
  },
  divide: function(a,b) {
    return a / b;
  }
}


