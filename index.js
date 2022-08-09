// Code your solutions in this file
writeCards(["ken", "brandon", "kev"], "birthday");
function writeCards(names, event) {
    let thankyou = [];
    for (let i = 0; i < names.length; i++) {
        thankyou.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return thankyou;
}

function countDown() {
    let count = 10;
    while (count>= 0) {
        console.log(count);
        count--;
    }
}
