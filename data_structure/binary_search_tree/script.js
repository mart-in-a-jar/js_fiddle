function Tree(arr) {
    function Node(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    function buildTree(arr) {
        if (arr.length <= 0) return null;

        const mid = Math.floor(arr.length / 2);
        const root = new Node(arr[mid]);

        root.left = buildTree(arr.slice(0, mid));
        root.right = buildTree(arr.slice(mid + 1));

        return root;
    }

    const insert = (value, node = root) => {
        if (node === null) return new Node(value);

        // if (value === node.data) return node;    is taken care of in the bottom

        if (value < node.data) {
            node.left = insert(value, node.left);
        } else if (value > node.data) {
            node.right = insert(value, node.right);
        }
        return node;
    };

    const remove = (value, node = root) => {
        if (node === null) return node;

        if (value < node.data) {
            node.left = remove(value, node.left);
            return node;
        } else if (value > node.data) {
            node.right = remove(value, node.right);
            return node;
        }

        if (node.left === null) {
            return (node = node.right);
        } else if (node.right === null) {
            return (node = node.left);
        } else {
            let parent = node;
            let child = node.right;

            while (child.left !== null) {
                parent = child;
                child = child.left;
            }

            if (parent !== root) {
                parent.left = child.right;
            } else {
                parent.right = child.right;
            }
            node.data = child.data;

            return node;
        }
    };

    const prettyPrint = (node = root, prefix = "", isLeft = true) => {
        if (node.right !== null) {
            prettyPrint(
                node.right,
                `${prefix}${isLeft ? "│   " : "    "}`,
                false
            );
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
        if (node.left !== null) {
            prettyPrint(
                node.left,
                `${prefix}${isLeft ? "    " : "│   "}`,
                true
            );
        }
    };

    arr = removeDuplicates(arr).sort((a, b) => a - b);
    const root = buildTree(arr);

    return {
        root,
        insert,
        remove,
        prettyPrint,
    };
}

const removeDuplicates = (arr) => {
    let newArr = [];
    for (let ele of arr) {
        if (!newArr.includes(ele)) {
            newArr.push(ele);
        }
    }
    return newArr;
};

let arr = [2, 5, 8, 9, 6, 3, 2, 14, 44, 7, 5, 645, 41, 5, 5, 58, 5, 5, 4, 5, 2];

const tree = new Tree(arr);
tree.prettyPrint();
