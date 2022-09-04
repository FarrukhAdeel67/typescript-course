import { hasFormatter } from "../interfaces/hasFormatter";
//classes
export class Payment implements hasFormatter{

    constructor(
        readonly receipient: string,
        private details: string,
        public amount: number,
    ){}
    //method
    format(){
        return `${this.receipient} is owed $${this.amount} for ${this.details}`;
    }
}