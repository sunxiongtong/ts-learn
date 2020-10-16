function Food() {
    this.type = 'food'
}

Food.prototype.getType = function () {
    return this.type;
}

function Vegetables(name) {
    this.name = name;
}

Vegetables.prototype = new Food();

const tomato = new Vegetables('tomato');
console.log(tomato.getType())

class Parent {

}

class Child extends Parent {
    constructor() {
        super()
    }
}

console.log(Object.getPrototypeOf(Child) === Parent)

// super 作为函数 代表父类的constructor函数
// super 作为对象
// 在普通方法中 父类的原型对象
// 在静态方法中 父类

class Parent1 {
    constructor() {
        this.type = 'parent'
    }

    getName() {
        return this.type
    }
    static getName1(){
        return 'haha'
    }
}
Parent1.getName = () => {
    return 'is parent'
}
class Child1 extends Parent1 {
    constructor() {
        super();
        console.log('constructor ' + super.getName())
    }

    getParentName() {
        console.log('getParentName ' + super.getName())
    }

    static getParentName() {
        console.log('getParentName ' + super.getName1())
    }
}

let c1 = new Child1();
c1.getParentName();
Child1.getParentName();

// 子类的__proto__指向父类本身
// 子类的prototype属性的__proto__指向父类的prototype
// 实例的__proto__属性的__proto__指向父类实例的__proto__

// es5 先创建子构造函数的实例this 然后再将父的方法属性添加到这个this上
// es6 先从父类取到实例对象this，然后通过super，再将子类的方法和属性添加到this上