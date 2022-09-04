let  farrukh = {
    name: 'adeel',
    city: 'peshawar',
    age: 30
}
farrukh.name = 'gulwali';
farrukh.age = 40;

//explicit types....
//............
let character:string;
let age:number;
let check:boolean;
age = 3;
check = false;

//arrayss....
let arr:string[] = [];
arr.push('farrukh adeel raziq');
console.log(arr);
//arr =['strings','characters'];


//union types is used for mixed arrays...
//.....

let mixedarr:(string|number)[] =[];
mixedarr.push("farrukhadeel");
mixedarr.push(123);
console.log(mixedarr);

let id : string|Number;
id = 'id1';
id = 1;

//objects 
let objectone : object;
 objectone = {
    name: 'farrukh',
    age: ''
}
objectone = []; //valid because array is a kind of object.

let objectTwo: {
    name: string,
    age: number,
    check: boolean,
}
objectTwo = {
    name: 'salar',
    age: 1.5,
    check: true,
}



//any type in typesrcipt
let ages : any;
ages = 23;
ages = true;

let miexed : any[] = [];
miexed.push(1,'frk', true);
console.log(miexed);

