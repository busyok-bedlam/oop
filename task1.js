export class Worker {
    constructor(name,surname,rate,days){
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    getSalary(){
        return this.rate * this.days;
    }
}
const worker = new Worker("ivan","petrov",300,21);
console.log(worker.getSalary())
