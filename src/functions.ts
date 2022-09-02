let greet: Function;
greet= (a:number , b: number, c: number|string =12) =>{
    console.log(a+b);
    console.log(c);
}
greet(1,2);
//function signatures.
let logDetails : (obj:{name:string, age:number}) => void;
type person = {name: string, age:number};
logDetails = (ninga: person) =>{
    console.log(`${ninga.name} is ${ninga.age} years old`)
}


