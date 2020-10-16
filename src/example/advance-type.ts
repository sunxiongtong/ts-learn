// 交叉
const mergeFunc = <T, K>(a1: T, a2: K): T & K => {
    let res = {} as T & K;// 类型断言
    res = Object.assign(a1, a2);
    return res;
}
mergeFunc({ a: 1 }, { b: 2 });

// 联合类型
// type1 | type2 | type3

// 类型保护
const helpingArr: [number, string] = [1, 'abc'];
const getRandomValueFunC = (): string | number => {
    return Math.random() * 10 > 5 ? helpingArr[0] : helpingArr[1]
}

let item = getRandomValueFunC();
// 使用类型断言比较麻烦
if ((item as string).length) {
    console.log((item as string).length)
} else {
    console.log((item as number).toFixed())
}
// 使用类型保护 typeof === !==  ps:includes indexOf之类的不允许  判断实例 instanceof也具有类型保护效果
// 比较繁琐的判断可以用一个函数
// string number boolean symbol 只有这四种可以用类型保护 object function 不行
if (typeof item === 'string') {
    console.log(item.length)
} else {
    console.log(item.toFixed())
}

function isString(value: string | number): value is string {
    return typeof value === 'string'
}
if (isString(item)) {
    console.log(item.length)
} else {
    console.log(item.toFixed())
}

// null 和 undefined
let values = '123' // 其实是类型推论是string | undefined  通过tsconfig.json strictNullChecks控制 默认严格模式
values = undefined

const sumFunc = (x: number, y?: number): number => {
    return x + (y || 0)
}

// 非空断言
interface Obj {
    name?: string
}

function getSpliceStr(num: number | null): string {
    function getRes(prefix: string) {
        // 告知num肯定不为空
        return prefix + num!.toFixed().toString()
    }
    num = num || 0.1
    return getRes('abc-');
}
console.log(getSpliceStr(null))

function sayHello(name: string | undefined): void {
    const sname: string = name!; // Error
}
sayHello(undefined);

// ?.  可以理解为 &&  es7
function getObjName(obj: Obj) {
    // 可选链运算符处于 stage3 阶段，使用 @babel/plugin-proposal-optional-chaining 插件可以提前使用，TS 3.7版本正式支持使用，以前的版本会报错
    const s: string = obj?.name;  // obj && obj.name  props.history.location props?.history?.location    a?.[x];
    return s
}
console.log(getObjName(null))

// type 其实和interface差不多,大部分情况起到同样的作用
type Type<M> = { a1: M, a2: M }
const typeObj1: Type<number> = {
    a1: 1,
    a2: 2,
    // a2: 'i am string'
}

type Childs<T> = {
    current: T,
    children?: Childs<T>
}

const tree: Childs<string> = {
    current: 'first',
    children: {
        current: 'second',
        children: {
            current: 'third'
        }
    }
}

// 字面量类型
// 字符串字面量类型用来约束取值只能是某几个字符串中的一个
type Name = 'abc'
const nameAdvance: Name = 'abc';

type Direction = 'north' | 'east' | 'south' | 'west';
function getDirectionFirstLetter(direction: Direction) {
    return direction.substr(0, 1);
}
getDirectionFirstLetter('east');// 会自己提示你，只能指定四个参数

/**
 * 可辨识联合
 * 1.具有普通的单例类型属性
 * 2.一个类型别名包含了那些类型的联合
 */
interface Square {
    kind: 'square',
    size: number
}
interface Rectangele {
    kind: 'rectangele'
    height: number
    width: number
}
interface Circle {
    kind: 'circle'
    radius: number
}
type Shape = Rectangele | Circle | Square
function asserNever(value: never): never {
    throw new Error('Unexpected object' + value);
}
function getArea(s: Shape): number {
    switch (s.kind) {
        case 'rectangele':
            return s.width * s.height
        case 'circle':
            return Math.PI * s.radius ** 2
        case 'square':
            return s.size * s.size;
        default:
            return asserNever(s);// 完整性检查
    }
}

console.log(getArea({ kind: 'circle', radius: 10 }))

// this
class Counters {
    constructor(public count: number) {
        this.count = count;
    }
    public add(val: number) {
        this.count += val;
        return this;
    }
    public sub(val: number) {
        this.count -= val;
        return this;
    }
}
let counter1 = new Counters(10);
console.log(counter1.add(1).sub(2));

class PowCouner extends Counters {
    constructor(public count: number = 0) {
        super(count)
    }
    public pow(value: number) {
        this.count = this.count ** value
        return this
    }
}
let powCounter = new PowCouner(2)
console.log(powCounter.pow(3).add(1).sub(2))

// keyof
interface InfosAdvance {
    name: string,
    age: number
}
let infoProp: keyof InfosAdvance
infoProp = 'name'
infoProp = 'age'
let infoAny: keyof any

// 索引访问操作符 []
type NameTypes = InfosAdvance['name']

interface TypeAll {
    a: never,
    b: never
    c: number
    d: string
    e: undefined
    f: null
    g: object
}

type TypeDemo = TypeAll[keyof TypeAll]

// 映射类型 工具类型
interface InfoAdvance2 {
    age: number
    name: string
    sex: string
}

type ReadOnlyType<T> = {
    readonly [P in keyof T]?: T[P]
}
type ReadOnlyType1 = ReadOnlyType<InfoAdvance2>
let tAdvance1: ReadOnlyType1 = {
    age: 18,
    name: '123',
    sex: "man"
}

// ReadOnly Partial 每一个字段都是只读属性或者可选属性
// Pick Record Pick用于获取对象中的某些属性 Record用于对某些属性转换类型

let oldObj = {
    name: 'abc',
    age: 18,
    sex: 'male'
}

function getNewObj<T, K extends keyof T>(obj: T, propsArr: K[]): Pick<T, K> {
    const res: Pick<T, K> = {} as Pick<T, K>;
    propsArr.map(key => {
        res[key] = obj[key]
    })
    return res;
}
// oldObj 会有类型推论
console.log(getNewObj(oldObj, ['name', 'age']))

function transformObjType<T extends keyof any, K, U>(obj: Record<T, K>, func: (s: K) => U): Record<T, U> {
    const res: Record<T, U> = {} as Record<T, U>;
    for (const key in Reflect.ownKeys(obj)) {
        if (key) {
            res[key] = func(obj[key]);
        }
    }
    return res;
}
const names = { 0: 'hello', 1: 'abc' }
console.log(transformObjType(names, (s) => { return s.length; }))

interface BasicMap {
    text:string
    value:string | number
}

let arrBasicMap:BasicMap[] = [{text:'1元红包',value:10000}]
