// 类型推论和兼容性
let name11 = 'sxt'
// name11 = 123

let arr50 = [1, 'a']
// arr50 = [2,'b',false]

window.onmousedown = (event:MouseEvent) => {
    // console.log(event.)
}

/************ */
// 兼容性
interface Named {
    name: string;
}

class Person {
    name: string;
}

let p11: Named;
// OK, because of structural typing
p11 = new Person();

interface Named {
    name: string;
}

/************ */
let x: Named;
// y's inferred type is { name: string; location: string; }
let y = { name: 'Alice', location: 'Seattle' };
x = y;

/************ */
// let x = (a: number) => 0;
// let y = (b: number, s: string) => 0;

// y = x; // OK
// x = y; // Error

/************ */
// class Animal {
//     feet: number;
//     constructor(name: string, numFeet: number) { }
// }

// class Size {
//     feet: number;
//     constructor(numFeet: number) { }
// }

// let a: Animal;
// let s: Size;

// a = s;  // OK
// s = a;  // OK
