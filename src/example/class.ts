// class PointFirst {
//     public x:number
//     public y:number
//     public constructor (x:number,y:number){
//         this.x = x;
//         this.y = y;
//     }

//     getPosition (){
//         return `${this.x},${this.y}`
//     }
// }

// const point = new PointFirst(1,2)

// class Parent {
//     name:string
//     constructor (name:string){
//         this.name = name;
//     }
// }
// class Child extends Parent {
//     constructor (name:string) {
//         super(name)
//     }
// }

// public 默认 外部可以访问的属性和方法

// private 私有的 类的定义外面无法访问
// class Parent {
//     public age:number
//     constructor (age:number) {
//         this.age = age
//     }

//     public getAge(){
//         return this.age
//     }
// }

// const p = new Parent(18)
// // console.log(p.age);
// class Child extends Parent {
//     constructor (age:number) {
//         super(age)
//         console.log(super.getAge())
//     }
// }

// const c = new Child(19);

// protected
// constructor 用protected修饰不能用来创建实例，只能用来继承

// public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的
// private 修饰的属性或方法是私有的，不能在声明它的类的外部访问
// protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的

// readonly
// class UserInfo {
//     public readonly name:string
//     constructor (name:string) {
//         this.name = name
//     }
// }

// const userInfo = new UserInfo('sxt');
// // userInfo.name = '111';

// 参数属性
class A {
    public name:string
    constructor(name: string) {
        this.name = name;
     }
}

const a = new A('sxt')
console.log(a)

// 静态属性
class ParentFirst {
    private static age: number = 18
    public static getAge() {
        return ParentFirst.age
    }
}
const p1 = new ParentFirst();
// console.log(ParentFirst.age);

class InfoFirst {
    public name: string
    public age?: number
    public _infoStr: string
    constructor(name: string, age?: number, public sex?: string) {
        this.name = name;
        this.age = age
        this._infoStr = ''
    }
    get infoStr() {
        return this._infoStr
    }
    set infoStr(value) {
        console.log(`setter:${value}`)
        this._infoStr = value;
    }
}
// const info1 = new InfoFirst('sxt')
// const info22 = new InfoFirst('sxt',18)
// const info3 = new InfoFirst('sxt',18,'man')
// const info4 = new InfoFirst('sxt', 18, 'man');
// console.log(info4.infoStr)
// info4.infoStr = 'sxt:18'

// abstract 用于定义抽象类和其中的抽象方法
abstract class People {
    constructor(public name:string) {

    }
    public abstract printName():void
}
// 首先，抽象类是不允许被实例化的：
// const p1 = new People();

// // 其次，抽象类中的抽象方法必须被子类实现
class Man extends People {
    constructor(name:string){
        super(name)
    }
    public printName(){
        console.log(this.name)
    }
}

const m = new Man('sxt')
m.printName();

class People1 {
    constructor(public name: string) {

    }
}

let p2: People1 = new People1('sxt')

class Animal {
    constructor(public name: string) { }
}
p2 = new Animal('haha')


interface FoodInterface {
    type: string
    // name:string
}
// class 可以继承接口
class FoodClass implements FoodInterface {
    public type: string
    public color:string
    constructor(type: string,color:string) {
        this.type = type
        this.color = haha
    }
}

// 接口也可以继承类
// class A1 {
//     protected name: string
// }
// interface I extends A1 { }
// 需要继承一下 因为protected只能在派生类中访问
// class B extends A1 implements I {
//     public name: string
// }

const create = <T>(c: new() => T): T => {
    return new c()
}

class Info1 {
    public age: number
}
console.log(create<Info1>(Info1).age)

class Greeter {
    static standardGreeting = "Hello, there";
    greeting: string;
    greet() {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter.standardGreeting;
        }
    }
}

let greeter1: Greeter;
greeter1 = new Greeter();
console.log(greeter1.greet());

let greeterMaker: typeof Greeter = Greeter;
greeterMaker.standardGreeting = "Hey there!";

let greeter2: Greeter = new greeterMaker();
console.log(greeter2.greet());









