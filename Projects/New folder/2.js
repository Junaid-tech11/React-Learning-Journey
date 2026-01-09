//The "Calculator" (Functions)

function minutesToSeconds (mins){
    return mins * 60;
}

console.log(minutesToSeconds(5));

//The "Fruit Stand" (Arrays)
let fruits = ['Apple','Banana','Mango']

console.log(fruits[1]);

// Question 3: The "User Profile" (Objects)
let user = {

    username: "CodeMaster",

    isOnline: true,

    level: 10
}
if (user.isOnline == true) {
    console.log('User CodeMaster is active');
}else{
    console.log('User is not Active!');
    
}

//: The "Countdown" (Loops)
for (let i = 1; i <= 5; i++) {
    const element = i;
    console.log(i);
    
    
}

//Shopping Cart:
let prices =[10,20,30]
let total = 0;
for (let i = 0; i < prices.length; i++) {
    const currentPrices = prices[i];
    total = total + currentPrices;
    console.log(`Scanning item ${i}: Price is ${currentPrices}.New Total is ${total}`);
    
}
console.log("Final Bill:" + total);

