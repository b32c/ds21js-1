const BSTC = require ("./class/BST");
const BST =new BSTC ();

//insert some nodes

BST.insert (13);
BST.insert (9);
BST.insert (10);
BST.insert (5);
BST.insert (14);
BST.insert (25);
BST.insert (11);
BST.insert (12);
BST.insert (1);
BST.insert (8);
BST.insert (9);

const root = BST.getRootNode();
let arrayResults =[];
//BST.inOrder(root, (node)=> arrayResults.push(node.data));
arrayResults =BST.io()
console.log(arrayResults);