let obj = {
    name: "raj",
    age: 27
}

let obj2 = Object.create(obj)
obj2.name="Apoorva"
obj2.age = 21

console.log(obj)
console.log(obj2)

let obj = {
    name: "raj",
    age: 27
}

let obj3 ={
    weight: 80,
    play: "football"
}

let obj2 = Object.assign({},obj,obj3)
obj2.name="Apoorva"
obj2.age = 21

console.log(obj)
console.log(obj2)

function factoryFunction(){
    return {
        name: "Raj",
        age: "21",
        weight: 72
    }
}


const obj1 = factoryFunction()
console.log(obj1)

const obj2 = factoryFunction()
console.log(obj2)

function ConstructorFunction(name, age){
    this.name = name
    this.age = age

}

ConstructorFunction.prototype.greeting = function (){
    console.log("Hello", this.name)
}

const obj1 = new ConstructorFunction("raj",27)
const obj2 = new ConstructorFunction("apoorva",21)
obj1.greeting()
obj2.greeting()

console.log(obj1)
console.log(obj2)

console.log(obj1.greeting===obj2.greeting)


let num = 1;
function x() {
    if(num<=5){
        console.log(num)
        num++
        x()
    }
}

x()

let num = 2
function x(){
    console.log(num)
    if(num===2){
        num=3
        x()
    }
}
x()


let num = 1
function x() {
    if (num>5) return
    console.log(num)
    num++
    x()

}

x()

let num = 1
let total = 0
function sum(limit){
    if(num>limit) return total   
    total = total + num
    num++
    return sum(limit)
}

console.log(sum(10))

let num = 1


function sum(num1,num2){
    console.log(num1)
    console.log(num2)
    console.log(num1+num2)
}

sum()

function printMyName(name){
    console.log(name)
}

printMyName("rajgopal")
printMyName("apoorva")
printMyName()

function test(num1="hi"){
    console.log(num1)
}

test(2)

function printUptoNumber(num=1, limit=10){
    if(num<=limit){
        console.log(num)
        printUptoNumber(num+1)
    }
}

function printSomething(num){
    if(num<=5){
        console.log(num)    
        printSomething(num+1)
    }
}

printSomething(1)
