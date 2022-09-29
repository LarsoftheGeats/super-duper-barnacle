let backpack=[];
/*
backpack.push("sword")
backpack.push("shield")
backpack.push("food")*/

backpack.push("sword","shield","food")
let externalItems=[];
//externalItems.push(backpack.pop())
console.log(backpack)

let furCoat="Fur Coat";
backpack.push(furCoat);
//backpack.unshift(furCoat);
//console.log(backpack)
externalItems.push(backpack.pop())

backpack.pop()
let itemCount = backpack.length
//console.log(backpack)
//console.log

//backpack.push(beltItems)
//console.log(backpack)
backpack.push("flint","blanket","knife","toothbrush")
itemCount=backpack.length
let saddlebags= backpack.splice(2,4)
//console.log(saddlebags)
for (let i=0; i<saddlebags.length;i++){
    console.log(`saddlebags item: ${saddlebags[i]}`)
}
if (backpack.length>3)
{
    for (let i=0; i<3;i++){
        console.log("backpack items: "+backpack[i])
    }
}
else{
    for (let i=0; i<backpack.length;i++){
        console.log("backpack items: "+backpack[i])
    }

}

console.clear();
let guessMe=54;
let timeRan=0;
while (guessMe <100){
    timeRan++
    console.log(guessMe)
    if (guessMe%4===0||guessMe%5===0){
        console.log("Guess Me is divisible by 4 or 5 added 25")
        guessMe += 25
    }
    else if (guessMe%3===0) {
        console.log("Guess Me is divisible by 3 subtrcted 27")
        guessMe -= 27
    }
    else{
        console.log("added 3")
        guessMe +=3;
    }
    guessMe += 22;
    console.log(` guessMe is now ${guessMe}`)
}
console.log(timeRan)