import {MyModule} from "./my_module.ts";

let x: string | number = "hello"
x += 15
console.log(x)
let y = new MyModule("hi")
let not_used = 15
let not_used_class_instance = new MyModule("hi")
console.log(y)
