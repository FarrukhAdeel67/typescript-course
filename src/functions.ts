let greet: Function;
greet= (a:number , b: number, c: number|string =12) =>{
    console.log(a+b);
    console.log(c);
    console.log("hello")
}
greet(1,2);
//function signatures.
type person = {name: string, age:number};
let logDetails : (obj:{name:string, age:number}) => void;

logDetails = (ninga: {name:string, age:number}) =>{
    ninga.name = 'farrukh';
    ninga.age = 12;
    console.log(`${ninga.name} is ${ninga.age} years old`)
}



