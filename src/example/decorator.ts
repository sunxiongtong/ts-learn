// 若要启用实验性的装饰器特性，你必须在命令行或tsconfig.json里启用experimentalDecorators编译器选项

// function setProp() {
//     return function(target) {
//         // ...
//     }
// }

// 从后往前调用
// @setProp()
// @setName()
// @setAge()

function setName() {
    console.log('get setName')
    return (target) => {
        console.log('setName')
    }
}

function setAge() {
    console.log('get setAge')
    return (target) => {
        console.log('setAge')
    }
}

@setName()
@setAge()
class ClassDec { }

let sign = null;
function setName1(name: string) {
    return (target: new () => any) => {
        sign = target
        console.log(target.name)
    }
}
@setName1('sxt')
class ClassDec1 {
    constructor() { }
}
console.log(sign === ClassDec)

/*************/
function addName(constructor: new () => any) {
    constructor.prototype.name = 'sxt'
}

interface ClassD {
    // 同名类型兼容性，否则找不到name报错
    name: string
}
@addName
class ClassD { }

const d = new ClassD()
console.log(d.name)

/*************/
// 类装饰器
function classDecorator<T extends new (...args) => {}>(target: T) {
    return class extends target {
        newProperty = 'new property'
        hello = 'override'
    }
}

@classDecorator
class Greeter1 {
    public property = 'property'
    public hello: string
    constructor(m: string) {
        this.hello = m
    }
}
console.log(new Greeter1('world'))

/*************/
// 方法装饰器
// configuarble
// writable
// enumberable

interface Obj12 {
    [prop: string]: any
}

let obj12: Obj12 = {}

Object.defineProperty(obj12, 'name', {
    value: 'sxt',
    writable: false,
    configurable: true,
    enumerable: true
})
console.log(obj12.name)

function enumerable(value: boolean) {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        console.log(target, propertyKey, descriptor)
        descriptor.enumerable = value;
    };
}

class Greeter2 {
    greeting: string;
    a: number
    constructor(message: string, a: number) {
        this.greeting = message;
        this.a = a;
    }

    @enumerable(true)
    greet() {
        return "Hello, " + this.greeting;
    }
}

let classF = new Greeter2('sxt', 18);

// for (const key in classF) {
//     if(key){
//         console.log(key,'1')
//     }
// }

/*************/
// 访问器装饰器
function configurable(value: boolean) {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor)=> {
        descriptor.configurable = value;
    };
}

class Point12 {
    private _x: number;
    private _y: number;
    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    @configurable(false)
    get x() { return this._x; }

    @configurable(false)
    get y() { return this._y; }
}

/*************/
// 属性装饰器

/*************/
// 参数装饰器 就是第三个参数是下标
// function required(target:any,propertyName:string,index:number){
//     console.log(`修饰的是${propertyName}的第${index+1}个参数`)
// }

// class ClassI {
//     public getInfo(prefix:string,@required infoType:string){
//         return prefix + '' + infoType
//     }
// }
// const classI = new ClassI();

