
const helloWorld = "hello World!";


// # 1 Task:
// Prepare the function then call it
// Let it refer to the outer scope and use helloWorld to show to the screen
// first and last character of the string = 'h!'
// helping hand?
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

function sayH() {
    console.log(helloWorld)
    console.log(helloWorld[0])
    console.log(helloWorld[helloWorld.length - 1])

    // defensive approach to solve the task
    console.log(helloWorld.charAt(0) + helloWorld.charAt(helloWorld.length - 1))

    // solution 2:
    console.log(helloWorld.slice(0, 1) + helloWorld.slice(-1))

    // solution 1:
    console.log(helloWorld.substring(0, 1) + helloWorld.substring(11))
}

sayH();


