class MyString {
    reverse(string){
        return (string.split("").reverse()).join(""); 
    }
    ucFirst(string){
        let arr = string.split("");
        return ([arr[0].toUpperCase(),...arr.slice(1)]).join("")

    }
    ucWords(words){
        const strToArr = words.split(" ");
        return strToArr.map( item => item[0].toUpperCase() + item.slice(1) ).join(", ");
    }


}
