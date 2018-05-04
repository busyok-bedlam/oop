var opt = {
    shift: true,
    ctrl: true,
    parentElement: 'ul',
    itemElement: 'li',
    arrOfItems: ['1', '2', '3', '4', '5']
}

class List {
    constructor(destElem, options) {
        this.destElem = destElem;
        this.options = options;
        this.render();
    }

    render() {
        this.wrap = document.getElementsByClassName("wrap")[0];
        this.list = document.createElement(this.options.parentElement);
        this.list.className = "elems-list"
        this.add = document.getElementsByClassName("add-button")[0];
        this.remove = document.getElementsByClassName("remove-button")[0];
        this.input = document.getElementsByClassName("field")[0];

        for (let i = 0; i < this.options.arrOfItems.length; i++) {
            const t = document.createElement(this.options.itemElement);
            t.className = "list-item";
            t.innerHTML = this.options.arrOfItems[i];
            this.list.appendChild(t);
            this.wrap.appendChild(this.list)
        }
        this.wrap.addEventListener("click", (e) => {
            e.preventDefault();
            console.log(e)
            const target = e.target;
            target.className === "add-button" ? this.addElement() : null
            target.className === "remove-button" ? this.removeElement() : null
            target.className.indexOf("list-item") >= 0 ? this.checkElement(target) : null
        })
        this.wrap.addEventListener("keydown", (e) => {
            e.preventDefault();
            console.log(e)
        })
    }
    addElement() {
        if (this.input.value !== "") {
            const item = document.createElement(this.options.itemElement);
            item.className = "list-item";
            item.innerHTML = this.input.value;
            this.list.appendChild(item);
            this.input.value = null;
            console.log("ADD ELEMENT")
        }
    }
    removeElement() {
        const liArray = [...this.list.children];
        const length = liArray.length;
        
        liArray.forEach(item => {
            item.className.indexOf("checked") >= 0 ? item.remove() : null
        })
        console.log("REMOVE ELEMENT")

    }
    checkElement(current) {
        const nameOfClass = current.className;
        const checked = nameOfClass.indexOf("checked") >= 0;
        const listItem = nameOfClass.indexOf("list-item") >=0;        
        checked && listItem ? current.classList.remove("checked") : 
        current.classList.add("checked")
        // nameOfClass.search(regexp2) >= 0 && nameOfClass.search(regexp1) < 0 ? 
        //     current.classList.add("checked") : 
        //     ameOfClass.search ? dfjdsjfdsl :
        
    }

}





const renderInitialPage = () => {
    let block = document.createDocumentFragment();

    let wrap = document.createElement("div");
    wrap.className = "wrap"

    let input = document.createElement("input");
    input.setAttribute("placeholder", "hello");
    input.className = "field";

    let addButton = document.createElement("input");
    addButton.setAttribute("value", "+");
    addButton.setAttribute("type", "button");

    let removeButton = document.createElement("input");
    removeButton.setAttribute("value", "-");
    removeButton.setAttribute("type", "button");


    addButton.className = "add-button";
    removeButton.className = "remove-button";
    wrap.appendChild(input);
    wrap.appendChild(addButton);
    wrap.appendChild(removeButton);


    block.appendChild(wrap)
    document.body.appendChild(block)
}


(() => {
    renderInitialPage();
    var list1 = new List(document.body, opt);

})()