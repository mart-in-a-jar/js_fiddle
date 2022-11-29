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

    const find = (value, node = root) => {
        if (node === null || node.data === value) return node;
        if (value < node.data) return find(value, node.left);
        if (value > node.data) return find(value, node.right);
    };

    const levelorder = (fn) => {
        const queue = [];
        const levelorder = [];
        queue.push(root);
        while (queue.length > 0) {
            let current = queue.shift();
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
            levelorder.push(current.data);
        }
        if (fn) {
            for (ele of levelorder) {
                fn(ele);
            }
        } else {
            return levelorder;
        }
    };

    // left - root - right      - will be sorted
    const inorder = (fn, node = root, arr = []) => {
        if (node === null) return;
        inorder(fn, node.left, arr);
        if (fn) {
            fn(node.data);
        } else {
            arr.push(node.data);
        }
        inorder(fn, node.right, arr);
        if (!fn) return arr;
    };

    // root - left - right
    const preorder = (fn, node = root, arr = []) => {
        if (node === null) return;
        if (fn) {
            fn(node.data);
        } else {
            arr.push(node.data);
        }
        preorder(fn, node.left, arr);
        preorder(fn, node.right, arr);
        if (!fn) return arr;
    };

    // left - right - root
    const postorder = (fn, node = root, arr = []) => {
        if (node === null) return;
        postorder(fn, node.left, arr);
        postorder(fn, node.right, arr);
        if (fn) {
            fn(node.data);
        } else {
            arr.push(node.data);
        }
        if (!fn) return arr;
    };

    const height = (node = root) => {
        if (node === null) return 0;
        const leftHeight = height(node.left);
        const rightHeight = height(node.right);
        const longest = leftHeight > rightHeight ? leftHeight : rightHeight;

        return longest + 1;
    };

    const depth = (value, node = root, count = 0) => {
        if (node === null || !value) return null;
        if (value < node.data) {
            return depth(value, node.left, ++count);
        } else if (value > node.data) {
            return depth(value, node.right, ++count);
        }
        return count;
    };

    const isBalanced = (node = root) => {
        if (node === null) return true;
        const leftHeight = height(node.left);
        const rightHeight = height(node.right);
        const balanced =
            Math.abs(leftHeight - rightHeight) <= 1 &&
            isBalanced(node.left) &&
            isBalanced(node.right);
        return balanced;
    };

    const rebalance = () => {
        if (isBalanced()) return "Is already balanced";
        const arr = inorder();
        root = buildTree(arr);
        prettyPrint();
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
    let root = buildTree(arr);

    return {
        root,
        insert,
        remove,
        find,
        levelorder,
        inorder,
        preorder,
        postorder,
        height,
        depth,
        isBalanced,
        rebalance,
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

const test = (size = 30) => {
    const randomArray = Array.from({ length: size }, () => {
        return Math.floor(Math.random() * 1000);
    });

    const tree = new Tree(randomArray);

    tree.prettyPrint();

    function printOrders() {
        console.log("Levelorder: ", tree.levelorder());
        console.log("Preorder: ", tree.preorder());
        console.log("Postorder: ", tree.postorder());
        console.log("Inorder: ", tree.inorder());
    }

    console.log("Balanced? ", tree.isBalanced());
    printOrders();
    for (let i = 0; i < 10; i++) {
        tree.insert(Math.floor(Math.random() * 100));
    }
    tree.prettyPrint();
    console.log("Balanced? ", tree.isBalanced());
    console.log("Rebalancing...");
    tree.rebalance();
    console.log("Balanced? ", tree.isBalanced());
    printOrders();
};
