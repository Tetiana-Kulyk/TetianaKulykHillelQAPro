function probability(count){
    let min = 100;
    let max = 1000;
    let evenInt = 0
    let oddInt = 0
    for (let i = 0; i < count; i++){
        let randInt = Math.floor(Math.random() * (max - min + 1)) + min
        if (randInt % 2 === 0){
            evenInt ++
        }
        else{
            oddInt ++
        }
    }
    let evenPercent = (evenInt / count) * 100
    let oddPercent = (oddInt / count) * 100
    return `Intergers generated: ${count}\nEven integers: ${evenInt}\nOdd integers: ${oddInt}\nPercentage ratio: ${evenPercent} to ${oddPercent}`
}
console.log(probability(5))