// 输入多余的（或者少于要求的）参数，是不被允许的
// function addFun(arg1: number, arg2: number): number {
//     return arg1 + arg2
// }
// addFun(1,2,3) // 但是可以赋默认值

// 也可以这么定义
// const addFun = (arg1: number, arg2: number) => arg1 + arg2

/*************** */
// let add: (x: number, y: number) => number // 定义
// add = (arg1: number, arg2: number): number => arg1 + arg2
// // add = (arg1: number, arg2: number): string => arg1 + arg2

// // 相当于
// // let add: (x: number, y: number) => number = (arg1: number, arg2: number): number => arg1 + arg2
/*************** */

// 也可以通过别名定义函数
// type Add = (x: number, y: number) => number
// let addFunc: Add

/*************** */
// 函数重载 es5 中通过判断传入参数的长度
// function handleDatas() {
//     if (arguments.length === 1) return 1
//     else if (arguments.length === 2) return 2
//     else return 3
//     // 或者typeof
// }
// es6中
// function handleData(x: string): string[]
// function handleData(x: number): number[]
// function handleData(x: string | number): string[] | number[] | undefined {
//     if (typeof x === 'string') {
//         return x.split('')
//     } else if (typeof x === 'number') {
//         return x.toString().split('').map((item) => Number(item))
//     }
// }

// handleData(123).map((item) => { // 会报错，因为string没有toFixed方法
//     return item.toFixed()
// })

/*************** */
const handleData = (...args) => {
    console.log(args)
}
function push(array: number[], ...items: number[]) {
    items.forEach((item)=> {
        array.push(item);
    });
}

push([1,1,1,1], 2, 3);

/*************** */
// 可选参数
function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + ' ' + lastName;
    } else {
        return firstName;
    }
}
let tomcat = buildName('Tom', 'Cat');
let tom = buildName('Tom');





