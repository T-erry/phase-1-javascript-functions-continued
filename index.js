// code your solution here
      function saturdayFun(activity = "roller-skate"){
        return `This Saturday, I want to ${activity}!`;
      }
      
      function mondayWork(activity = "go to the office"){
      return `This Monday, I will ${activity}.`;
      }
      mondayWork(" I will work from home.");

      const wrapAdjective = (paramOut = "*") => {
        return function (paramIn = "special") {
            return (`You are ${paramOut}${paramIn}${paramOut}!`)
        }
    }
    wrapAdjective("||")("a dedicated programmer")