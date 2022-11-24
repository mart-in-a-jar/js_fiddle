const linkedlist = () => {
    let head = null;

    function Node(value = null) {
        this.value = value;
        this.next = null;
    }

    const append = (value) => {
        const newNode = new Node(value);
        if (!head) {
            return (head = newNode);
        }
        let nextNode = head;
        while (nextNode.next != null) {
            nextNode = nextNode.next;
        }
        return (nextNode.next = newNode);
    };

    const prepend = (value) => {
        const newNode = new Node(value);
        if (!head) {
            return (head = newNode);
        }
        newNode.next = head;
        return (head = newNode);
    };

    const size = () => {
        let count = 0;
        let nextNode = head;
        while (nextNode != null) {
            nextNode = nextNode.next;
            count++;
        }
        return count;
    };

    const getHead = () => {
        if (!head) return null;
        return head.value;
    };

    const tail = () => {
        if (!head) return null;
        let nextNode = head;
        while (nextNode.next != null) {
            nextNode = nextNode.next;
        }
        return nextNode.value;
    };

    const at = (index) => {
        if (!head || index > size() - 1) return null;
        let nextNode = head;
        for (let i = 0; i < index; i++) {
            nextNode = nextNode.next;
        }
        return nextNode.value;
    };

    const pop = () => {
        if (!head) return null;
        if (head.next === null) {
            return (head = null);
        }
        let nextNode = head;
        while (nextNode.next.next != null) {
            nextNode = nextNode.next;
        }
        return (nextNode.next = null);
    };

    const contains = (value) => {
        if (!head) return false;
        let nextNode = head;
        while (nextNode != null) {
            if (nextNode.value === value) return true;
            nextNode = nextNode.next;
        }
        return false;
    };

    const find = (value) => {
        if (!head) return null;
        let index = 0;
        let nextNode = head;
        while (nextNode != null) {
            if (nextNode.value === value) return index;
            else {
                nextNode = nextNode.next;
                index++;
            }
        }
        return null;
    };

    const toString = () => {
        if (!head) return null;
        let string = `( ${head.value} )`;
        let nextNode = head;
        while (nextNode.next != null) {
            nextNode = nextNode.next;
            string += ` -> ( ${nextNode.value} )`;
        }
        string += ` -> ${nextNode.next}`;
        return string;
    };

    return {
        append,
        prepend,
        size,
        head: getHead,
        tail,
        at,
        pop,
        contains,
        find,
        toString,
    };
};

const a = linkedlist();
console.log("Contains 1 ", a.contains("1"));
console.log("Find 1 ", a.find("1"));
console.log("AT 2 ", a.at(2));
console.log(a.size());
console.log("Head: ", a.head());
console.log("Tail: ", a.tail());
console.log("POP ", a.pop());
a.prepend("1");
console.log(a.size());
console.log(a.toString());
console.log("Head: ", a.head());
console.log("Tail: ", a.tail());
console.log("AT 0 ", a.at(0));
console.log("AT 1 ", a.at(1));
console.log("Contains 1 ", a.contains("1"));
console.log("Find 1 ", a.find("1"));
console.log("POP ", a.pop());
console.log(a.size());
console.log(a.toString());
a.append("2");
console.log(a.size());
console.log(a.toString());
console.log("AT 2 ", a.at(2));
console.log("Contains 2 ", a.contains("2"));
a.append("3");
console.log(a.size());
console.log(a.toString());
a.append("4");
console.log(a.size());
console.log(a.toString());
console.log("Find 3 ", a.find("3"));
a.prepend("0");
console.log(a.size());
console.log(a.toString());
a.prepend("-1");
console.log(a.size());
console.log(a.toString());
console.log("Head: ", a.head());
console.log("Tail: ", a.tail());
console.log("AT 2 ", a.at(2));
console.log("AT 5 ", a.at(5));
console.log("AT 8 ", a.at(8));
console.log(a.toString());
console.log("Contains -1 ", a.contains("-1"));
console.log("Contains 4 ", a.contains("4"));
console.log("Find 0 ", a.find("0"));
console.log("Find 8 ", a.find("8"));
console.log(a.pop());
console.log(a.size());
console.log(a.toString());
