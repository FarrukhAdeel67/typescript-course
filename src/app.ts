import { Payment } from "./classes/payment.js";
import { Invoice } from "./classes/invoice.js";
import { hasFormatter } from "./interfaces/hasFormatter.js";

//form
const form = document.querySelector('.new-item-form') as HTMLFormElement;
//inputs
const type = document.querySelector('#type') as HTMLFormElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;
form.addEventListener('submit',(e:Event)=>{
    e.preventDefault();
    let doc:hasFormatter;
    if(type.value === 'invoice'){
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }else{
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
} )

