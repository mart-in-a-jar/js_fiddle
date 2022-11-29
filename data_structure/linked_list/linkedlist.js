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

    const insertAt = (value, index) => {
        const newNode = new Node(value);
        if (index === 0) return prepend(value);
        else if (index === size()) return append(value);
        else if (index < 0 || index > size()) {
            throw new Error(`Index out of range (${size()})`);
        }
        let nextNode = head;
        for (let i = 0; i < index - 1; i++) {
            nextNode = nextNode.next;
        }
        newNode.next = nextNode.next;
        return (nextNode.next = newNode);
    };

    const removeAt = (index) => {
        let removed;
        if (!head) return null;
        if (index === 0) {
            removed = head;
            head = head.next;
        } else if (index < 0 || index > size() - 1) {
            throw new Error(`Index out of range (${size()})`);
        } else {
            let nextNode = head;
            for (let i = 0; i < index - 1; i++) {
                nextNode = nextNode.next;
            }
            removed = nextNode.next;
            nextNode.next = nextNode.next.next;
        }
        return removed;
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
        insertAt,
        removeAt,
    };
};