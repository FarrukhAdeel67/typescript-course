// //classes
// class Invoice{
//     //    readonly client: string;
//     //    private details: string;
//     //    public amount: number;
    
//     //     constructor(c: string, d: string, a: number){  
//     //     this.client = c;
//     //     this.details = d;
//     //     this.amount = a;
//     //     }
//         constructor(
//             readonly client: string,
//             private details: string,
//             public amount: number,
//         ){}//this method only works when we have access specifiers else the above method is fine.
//         //method
//         format(){
//             return `${this.client} ows $${this.amount} for ${this.details}`;
//         }
//     }
//     //creating objects
//     const invOne = new Invoice('farrukh adeel', 'work on the frk website', 230);
//     const invTwo = new Invoice('shahrukh khan', 'work on the srk website', 340);
    
//     let invoices : Invoice[] = [];
//     invoices.push(invOne);
//     invoices.push(invTwo);
    
//     invoices.forEach(inv => {
//         console.log(
//             inv.client,
//             inv.amount,
//             inv.format(),
//         )
        
//     });
    
//     //form
//     const form = document.querySelector('.new-item-form') as HTMLFormElement;
//     //inputs
//     const type = document.querySelector('#type') as HTMLFormElement;
//     const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
//     const details = document.querySelector('#details') as HTMLInputElement;
//     const amount = document.querySelector('#amount') as HTMLInputElement;
//     form.addEventListener('submit',(e:Event)=>{
//         e.preventDefault();
//         console.log(
//             type.value,
//             tofrom.value,
//             details.value,
//             amount.valueAsNumber,
//         )
//     } )
    
    