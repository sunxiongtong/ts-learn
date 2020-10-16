// 泛型
// const getArray = (value: any, times: number = 5) => {
//     return new Array(times).fill(value)
// }

// getArray('abc', 3).map((item) => item.length) // 有问题却不会报错，因为ts并不知道value不能不是数字 所以最好不要用any
// getArray(1, 3).map((item) => item.length)

/************* */
// const getArray = <T>(value: T, times: number = 5): T[] => {
//     return new Array(times).fill(value)
// }

// getArray<number>(1, 3).map((item) => [1])
// getArray<number>('abc', 3).map((item) => [1])

/************* */
// const getArray = <T, U>(param1: T, params2: U, times: number): [T, U][] => {
//     return new Array(times).fill([param1,params2]);
// }

// console.log(getArray(1,'a',3))

/************* */
// 泛型定义函数类型
// let getArray: <T>(arg: T, times: number) => T[]
// getArray = (arg: any, times: number) => {
//     return new Array(times).fill(arg)
// }

// type GetArray = <T>(arg: T, times: number) => T[]
// let getArray:GetArray = (arg:any,times:number) => {
//     return new Array(times).fill(arg);
// }

// T可以写在最外层 也可以写在里面,写在外面，别的地方也可以使用
// interface GetArray<T> {
//     (arg: T, times: number): T[]
//     array: T[]
// }
// interface GetArray {
//     <T>(arg: T, times: number): T[]
// }

// 泛型约束
// interface ValueWithLength {
//     length: number
// }
// T需要有length属性
// const getArray = <T extends ValueWithLength>(arg: T, times: number): T[] => {
//     return new Array(times).fill(arg);
// }
// console.log(getArray([1, 2], 3))
// K需要是T的内置属性
// const getProps = <T,K extends keyof T>(obj: T, propName: K) => {
//     return obj[propName]
// }

// const objs = { a: 'a', b: 'b' }

// getProps(objs, 'a')
// getProps(objs, 'c') // 会报错了