// primitives
let a: string = "hello"
let b: number = 21
let c: boolean = false


// array
let ar: number[] = [21, 36]

//functions
function hello_fce(fce: () => string): string {
    let result = `hello, result: ${fce()}`
    console.log(result)
    return result
}

//anon fce
((x: string) => {
    console.log(`${x} anon fce`)
})("my")


//object in fce
function printName(user: { first: string; second?: string }) {
    let result = user.second ? `${user.first} ${user.second}` : user.first
    console.log(result)
}

printName({first: "Bob"});
printName({first: "Alice", second: "Alisson"});


//type unions
let d: string | number
if (typeof d === "string") {
    d.toUpperCase()
}


// type alias
type Point = {
    x: number
    y: number
    z?: number
};
type Id = number | string

// Exactly the same as the earlier example
function printCoordinates(pt: Point) {
    console.log(`The coordinate's x value is ${pt.x}`);
}

printCoordinates({x: 100, y: 100});


// interfaces
interface IPoint {
    x: number
    y: number
}

interface IPoint {
    z?: number
}

class CPoint implements IPoint {
    x: number;
    y: number;
    z?: number;
}

// type assertion
let e = new CPoint() as IPoint

// type literals
let f: "literal" = "literal"
// f = "error"
f = undefined
f = null

function compare(a: string, b: string): -1 | 0 | 1 {
    return a === b ? 0 : a > b ? 1 : -1;
}

function liveSafely(x?: number | null) {
    return x?.toFixed(1)
    //Non-null Assertion
    //x!.toFixed(1)
}

console.log(`liveSafely     1.449:${liveSafely(1.449)}`)
console.log(`liveSafely      null:${liveSafely(null)}`)
console.log(`liveSafely undefined:${liveSafely()}`)


// enums
enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
}

//Enums at runtime
enum E {
    X,
    Y,
    Z,
}

function f_enums(obj: { X: number }) {
    return obj.X;
}

// Works, since 'E' has a property named 'X' which is a number.
f_enums(E);


//enums at compile time
enum LogLevel {
    ERROR,
    WARN,
    INFO,
    DEBUG,
}

/**
 * This is equivalent to:
 * type LogLevelStrings = 'ERROR' | 'WARN' | 'INFO' | 'DEBUG'
 */
type LogLevelStrings = keyof typeof LogLevel;

function print_important(key: LogLevelStrings, message: string) {
    const num = LogLevel[key];
    if (num <= LogLevel.WARN) {
        console.log("Log level key is:", key);
        console.log("Log level value is:", num);
        console.log("Log level message is:", message);
    }
}

print_important("ERROR", "This is a message");

//Reverse mappings
enum Enum {
    A,
}

let g = Enum.A;
let name_of_g = Enum[g]; // "A"
