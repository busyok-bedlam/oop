function Worker(name,surname,rate,days){
    this.getName = () => {
        return name;
    }
    this.getSurname = () => {
        return surname;
    }
    this.getDays = () => {
        return days;
    }
    this.getRate = () => {
        return rate;
    }
    this.getSalary = () => {
        return days * rate;
    }
    this.setRate = (value) => {
        rate = value;
    }
}
const worker = new Worker("name","dsds",33,44);
console.log(worker.getName())
console.log(worker.getDays())
console.log(worker.getRate())
console.log(worker.getSurname())
console.log(worker.setRate(33333333))
console.log(worker.getRate())
