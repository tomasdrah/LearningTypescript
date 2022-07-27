// truthiness
//
//     0
//     NaN
//     "" (the empty string)
//     0n (the bigint version of zero)
//     null
//     undefined
//

let a = Boolean([])    //true
let b = !!{}                //true
let c = undefined == null   //true
let d = 0

if ([]) {
    console.log("[] is true")
}
if ({}) {
    console.log("{} is true")
}


// in
type Fish = { swim: () => void };
type Bird = { fly: () => void };
type Human = { swim?: () => void; fly?: () => void };

function move(animal: Fish | Bird | Human) {
    if ("swim" in animal) {
        //fish,human
        animal.swim();
    } else {
        //bird,human
        animal.fly();
    }
}


// instanceof
function logValue(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    } else {
        console.log(x.toUpperCase());
    }
}

// typeof
function padLeft(padding: number | string, input: string) {
    if (typeof padding === "number") {
        // @ts-ignore
        return " ".repeat(padding) + input;
    }
    return padding + input;
}

console.log(padLeft(5, "padLeft"))

// type predicates
function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

// Both calls to 'swim' and 'fly' are now okay.

// declare function getSmallPet(): Fish | Bird;
// let pet = getSmallPet();
// if (isFish(pet)) {
//     pet.swim();
// } else {
//     pet.fly();
// }







