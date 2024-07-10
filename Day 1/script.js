// comment
console.log("Welcome")

let value=6;
let a=value+5;
{
    let value=7;
    console.log("the outside value of let variable is : "+value);
}
console.log(value);

//array
let names=['anandadev','dhanush',8,27];
console.log(names[1])
console.log("lenth="+names.length)
let num=[12,33,"gh"]
console.log(num[2])
num.push(5)
num.unshift("Anandadev")
num.pop()
console.log(num)

let persons=[
    {
        name:"Abhishek",
        age:23
    },
    {
        name:"Anandadev",
        age:20
    },
    {
        name:"Arjun",
        age:18
    }
]
console.log(persons)
console.log(persons[2].name)

