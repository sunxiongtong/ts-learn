const s = Symbol();

const s1 = Symbol('name');
// console.log(s1.toString())

const info2 = {
    [s1]: 'sxt',// s1 symbol本身定义是唯一且不可变的，所以不能用let
    age: 18,
}
info2[s1] = '123';
// 获取symbol 有两种方式
// console.log(Object.getOwnPropertySymbols(info2)) [Symbol(name)]
// console.log(Reflect.ownKeys(info2)) ["age","sex","Symbol(name)"]

// Symbol.for() 会在全局注册，发现之前有，就不注册，引用上一次注册的值 s8 === s9
// Symbol.keyFor() 获取到Symbol.for 注册的值
const s8 = Symbol.for('sxt');
const s9 = Symbol.for('sxt');
const s10 = Symbol.for('haha');

// console.log(Symbol.keyFor(s8))

// Symbol.hasInstance
// instanceof
const obj1 = {
    [Symbol.hasInstance](otherObj: any) {
        // console.log(otherObj)
    }
}
// console.log({a:'a'} instanceof <any>obj1)



