class User {
    constructor(name,surname){
        this.name = name;
        this.surname = surname;
    }
    getFullName(){
        return `${this.name} ${this.surname}`;
    }

}


class Student extends User {
    constructor(name,surname,year){
        super(name,surname);
        this.year = year;
    }
    getCourse(){
        const currentYear = new Date().getFullYear();
        return currentYear - this.year;

    }

}

const student = new Student("bulat","cherkashin",1993)
console.log(student.getFullName())
