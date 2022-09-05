import { Payment } from "./classes/payment.js";
import { Invoice } from "./classes/invoice.js";
import { listTemplate } from "./classes/listTemplate.js";
//form
const form = document.querySelector('.new-item-form');
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//list template instance
const ul = document.querySelector('ul');
const list = new listTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!type.value || !details.value || !tofrom.value || !amount.value) {
        alert("requried fields can not be empty!");
    }
    else {
        let values; //tuples
        values = [tofrom.value, details.value, amount.valueAsNumber];
        let doc;
        if (type.value === 'invoice') {
            //   doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
            doc = new Invoice(...values);
        }
        else {
            doc = new Payment(...values);
            //  doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
        }
        list.render(doc, type.value, 'end');
    }
});
