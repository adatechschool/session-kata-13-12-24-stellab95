function isColorsCorrect(mastermindColors){
    let colors = ["blue", "red", "yellow", "green"]
    
    for (let i = 0; i < colors.length; i++){
    if (mastermindColors.includes(colors[i])){
        console.log('correct');
    } else {
        console.log('incorrect');
    }
    }
    }
    isColorsCorrect(["red", "blue", "purple", "green"])

    
    function isCodebreakerCorrect(codebreakerChoice){
     let goodCombination = ["red", "blue", "yellow", "green"]

    for (let i = 0; i < codebreakerChoice.length; i++){
        if(!goodCombination.includes(codebreakerChoice[i])){
            return false
        }
    }
    return true
    }
    let result = isCodebreakerCorrect(["purple", "red", "yellow", "green"])
    console.log(result);