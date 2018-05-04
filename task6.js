

const Counter = () => {
    let count = 0;
    return () => {
        return count++;
    }
}

let counter1 = Counter();
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());
