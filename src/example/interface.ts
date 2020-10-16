// interface NameInfo {
//     firstName: string,
//     lastName: string,
// }

// // 多一些属性是不允许的
// const getFullName = ({ firstName, lastName, addProp = '123' }: NameInfo) => {
//     return `${firstName} ${lastName} `
// }

// getFullName({ firstName: 'haha', lastName: 'sxt' });

/*********** */
// interface ArrInter {
//     0: number,
//     1: number
// }

// let arr1:ArrInter = [1,'1'];
// arr1:number[] arr1:[number,number]

// key 类型
// interface RoleDic {
//     [id: number]: string // 虽然属性也可以是number，但最终还是转换为字符串，不用写0，'0'这种
// }

// const role1: RoleDic = {
//     0: '123'
// }

/*********** */
// 接口的继承
// interface Vegetables {
//     color: string
// }

// interface Carrot extends Vegetables {
//     length: number
// }

// interface Tomato extends Vegetables {
//     radius: number
// }

// const tomato: Tomato = {
//     color: 'yellow',
//     radius: 1
// }

// const carrot: Carrot = {
//     color: 'orange',
//     length: 20
// }

/*********** */
// 类可以用来定义函数
// interface Counter {
//     ():void,
//     count:number,
// }

// const getCounter = ():Counter => {
//     const c = () => { c.count++;};
//     c.count = 0;
//     return c;
// }

// const counter:Counter = getCounter();

// counter();
// counter();
// counter();

/*********** */
// 一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集
// interface Person {
//     name: string;
//     age?: number;
//     // [propName: string]: string;
//     [propName: string]: string|number;
// }

// let tom: Person = {
//     name: 'Tom',
//     age: 25,
//     gender: 'male'
// };

// 只读属性
// interface Person {
//     readonly id: number;
//     name: string;
//     age?: number;
//     [propName: string]: string | number | undefined;
// }

// let tom1: Person = {
//     id: 89757,
//     name: 'Tom',
//     gender: 'male'
// };

// tom1.id = 9527;

// 类型别名 其实和接口差不多
type NameString = string;
type NameResolver = () => string;
type NameOrResolver = NameString | NameResolver;
function getName(n: NameOrResolver): NameString {
    if (typeof n === 'string') {
        return n;
    } else {
        return n();
    }
}

// type 和 interface的比较
// interface能够声明合并，type不能
// type 不能继承，但是可以交叉&
// type 可以声明基本类型别名，联合类型，元组等类型
// type 语句中还可以使用 typeof 获取实例的 类型进行赋值
// 一般来说，如果不清楚什么时候用interface/type，能用 interface 实现，就用 interface , 如果不能就用 type

// 声明合并
interface User {
    name: string
    age: number
}

interface User {
    sex: string
    name: string
}

// 交叉 &
type NameDemo = {
    name: string;
}
type UserDemo = NameDemo & { age: number };

// // 基本类型别名
// type Name2 = string

// // 联合类型
// interface Dog {
//     wong();
// }
// interface Cat {
//     miao();
// }

// type Pet = Dog | Cat

// // 具体定义数组每个位置的类型
// type PetList = [Dog, Pet]

// 当你想获取一个变量的类型时，使用 typeof
// let div = document.createElement('div');
// type B = typeof div


// 类型断言
// 类型断言只能够欺骗TypeScript 编译器，无法避免运行时的错误，反而滥用类型断言可能会导致运行时错误
// 类型断言语句在编译结果中会被删除
// interface Cat {
//     name: string;
//     run(): void;
// }
// interface Fish {
//     name: string;
//     swim(): void;
// }

// function isFish(animal: Cat | Fish) {
//     if (typeof animal.swim === 'function') {
//         return true;
//     }
//     return false;
// }
// isFish({name:'miaomiao',run:()=>{console.log('i can run')}})