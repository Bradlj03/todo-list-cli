const prompt = require("prompt-sync")()

console.log("Welcome to the To-do List Manager Application! ")
console.log("===================================================")

let todos = [];
let complete = [];
let input;


console.log("No Items To Do! ")


while(input !== 3 ){ // negate statement

    console.log(" [1] Create a Item ")
    console.log(" [2] Complete Item")
    console.log(" [3] Exit a Aplication")
    console.log(" ~Select An Action: ~")
    input = Number(prompt(" > "))

    if(input === 1){
        console.log(" ~Creating a to-do item~ ") // displaying to user
        console.log(" Item ")
        let todo =prompt(" > ")
        todos.push(todo);
        complete.push("[incomplete]")

        console.log(" ")
        console.log("========================================")
        
        for(let i = 0; i <todos.length; i++){
            console.log(`${i+1}. ${complete[i]} ${todos[i]}`)}
    }else if(input === 2){
        console.log(" ~ completing an item ~")
        console.log(" Which item do you want to Complete ? ")
    let completed = Number(prompt(" > "))
    complete[completed -1] ="[completed]"


    console.log(" You have " + todos.length + " todo items")
    for(let i = 0; i <todos.length; i++){
        console.log(`${i+1}. ${complete[i]} ${todos[i]}`)}
    }else if(input === 3){
    console.log("~exiting the program ~")
}
// end of while loop
}