let snapFrase = "";

function snapCrackle(maxValue){
    for (let i = 1; i <= maxValue; i++)

    if([i]%2 !== 0 && [i]%5 == 0 && [i] == maxValue){
        snapFrase += "SnapCrackle"
    }else if ([i]%2 !== 0 && [i]%5 == 0 && [i] != maxValue){
        snapFrase += "snapCrackle, "
    }else if([i]%2 !== 0 && [i] == maxValue){
        snapFrase += "Snap"
    }else if([i]%2 !== 0){
        snapFrase += "Snap, "
    }else if([i]%5 == 0 && [i] == maxValue){
        snapFrase += "Crackle"
    }else if([i]%5 == 0){
        snapFrase += "Crackle, "
    }else if([i] == maxValue){
        snapFrase += [i]
    }else 
    snapFrase += [i] + ", "

    return snapFrase;
  
}
console.log(snapCrackle(12));