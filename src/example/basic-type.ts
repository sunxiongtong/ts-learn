// 布尔类型
// let bool:boolean = false;
let bool: boolean
bool = true // 可以后赋值
// bool = 123 //bool会有错误提示 不能设置为123，必须为bool类型

// 数值类型
let num: number = 123456
// num = 'abc' // 报错
num = 0b1111011
num = 0o173
num = 0x7b

// 字符串类型
let str: string
str = 'abc'
str = `数值是${num}`

// 联合类型
let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;

// 数组类型
// 写法1
let arr: number[]
// arr = [5,'a'] //有报错，a必须是数字
// 写法2
let arr2: Array<number>
let arr3: (string | number)[]
let arr4: Array<string | number>
arr3 = [1, 'a']

// 元组类型
let tuple: [string, number, boolean]
tuple = ['a', 1, false]

// 坑位
let aaa: [string, number] = ['aaa', 5];
// 添加时不会报错
aaa.push(6);
// 打印整个元祖不会报错
// console.log(aaa); // ['aaa',5,6];
// 打印添加的元素时会报错
// console.log(aaa[2]); // error

// 枚举类型 通常用于一组已知的常量，例如，一周7天，一年四季，性别， 订单统计中，待付款，已付款，已发货等等
enum Roles {
    SUPER_ADMIN,
    ADMIN,
    USER
}
// console.log(Roles.USER)

// 坑位
enum Char {
    // 常量成员：在编译阶段被计算出结果
    a,// 没有初始值
    b = Char.a,// 对常量成员的引用
    c = 1 + 3, // 常量表达式

    // 计算成员：表达式保留到程序的执行阶段
    d = Math.random(),// 非常量表达式
    e = '123'.length,
    // 紧跟在计算成员后面的枚举成员必须有初始值
    f = 6,
    g
}
// console.log(Char)

// 常量枚举不能包含计算成员，如果包含了计算成员，则会在编译阶段报错
// const enum Color {Red, Yellow, Blue = "blue".length};

// any 类型 尽量别用，能不用就不用，any没有约束，不知道什么类型，写了ts就没有意义
// 如果不赋类型，默认是any类型，tsconfig文件中可以配置不允许使用any noImplicitAny
let value: any
const arr5: any[] = [1, 'a'];

// void 类型 undefined 可以复制给void  没有返回值，或者返回的是一个undefined
const consoleText = (text: string): void => {
    // console.log(text)
    // return undefined
}

// null 和 undefined
let u: undefined
let n: null

// never 类型  抛出错误或者一个死循环
const errorFunc = (message: string): never => {
    throw new Error(message)
}

const errorFunc1 = (message: string): never => {
    while (true) { }
}

// object
let objBasic = {
    name: 'sxt'
}

let obj2 = objBasic
obj2.name = 'L'
// obj2.name = 123

function getObject(obj1: object): void {
    console.log(obj1)
}
getObject(obj2);

// 类型推论
// 不告知编译器变量是何种类型是，编译器会自动识别，虽然也不会出现问题，但是最好自己定义一下
// let myFavoriteNumber = 'seven';
// myFavoriteNumber = 7;

// 等价于
// let myFavoriteNumber: string = 'seven';
// myFavoriteNumber = 7;

// 再看一个
// let myFavoriteNumber;
// myFavoriteNumber = 'seven';
// myFavoriteNumber = 7;

// 等价于
// let myFavoriteNumber:any; // 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：
// myFavoriteNumber = 'seven';
// myFavoriteNumber = 7;

// 类型断言
const getLength = (target: string | number) => {
    // 不知道target的类型，target可能有2种类型，number类型不支持length属性
    // console.log(target.length)

    // 你自己明白此时target的类型，相当于你告知编译器，将他当做什么类型处理
    if ((<string>target).length || (target as string).length === 0) {
        return (<string>target).length
    } else {
        return target.toString().length
    }

}
