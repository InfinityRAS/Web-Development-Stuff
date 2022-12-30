console.log("Hello world!")

// let's discuss about functions
// situation: you hafta execute a set of code multiple times

// function demoFunc() {
//     let a = prompt("Write some number")
//     console.log(a)
//     if (a == 0) {
//         console.log("The number is 0")
//     } else {
//         demoFunc()
//     }
// }

// demoFunc()

// function add(a, b) {
//     return parseInt(a) + parseInt(b)
// }

// a = add(prompt("Enter num 1"), prompt("Enter num 2"))
// console.log(a)

// you wanna print a general error

// function error(str) {
//     alert(`Invalid command: ${str}`)
// }

// let a = prompt("Write a command")
// if (a in ["add", "list", "print", "delete"]) {
//     alert("True command")
// } else {
//     error(a)
// }

// let arrowFunc = (a, b) => console.log("Hello world", a+b);
// arrowFunc(5, 6)
// let formSubmit = e => e.preventDefaults()
