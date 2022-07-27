import {MyModule} from "./my_module.ts";

let res = await fetch("https://jsonplaceholder.typicode.com/todos")
let todos = await res.json()
// console.log(todos)

let file = await Deno.readTextFile("hello.txt")
console.log(file)

await Deno.writeTextFile("goodbye.txt", file)

let mm = new MyModule("data")
