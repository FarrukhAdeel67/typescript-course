import { hasFormatter } from "../interfaces/hasFormatter";
//classes
export class Invoice implements hasFormatter{

    constructor(
        readonly client: string,
        private details: string,
        public amount: number,
    ){}
    //method
    format(){
        return `${this.client} ows $${this.amount} for ${this.details}`;
    }
}