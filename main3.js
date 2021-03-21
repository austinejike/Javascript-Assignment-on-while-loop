// Q NO 3 Write a JavaScript program that ask a user
// "Are we there yet?". Keep asking again and 
//again until they enter "yes" OR "yeah". Then, alert "Yah, we finally made it!"

let question = prompt("Are we there");
let ans = 'yes'
let ans2 = 'yeah'
while(question !== ans && (question !== ans2)){
    question = prompt("Are we there")
}
alert('yeah we made it')
