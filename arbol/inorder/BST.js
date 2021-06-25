const {Node} = require ('./nodo');

class BST {
    constructor(data){
        this.root=null;
    }

    insert(data){
        let newNode = new Node(data);

        if (this.root === null){
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode (node, newNode){
    if(newNode.data< node.data){
    if(node.left === null) node.left =newNode;
      else this.insertNode(node.left, newNode);
     } else { //right
        if(node.right ===null) node.right=newNode;
        else this.insertNode (node.right, newNode);
         }


    }

    inOrder(node,fn){
            if(node!== null)
    this.inOrder (node.left, fn);
//something
//console.
        fn.call(null,node, fn);
    console.log(node.data);
            this.inOrder(node.right, fn);
}
    io(){
        if(this.root==null)
            return [];
        else{
            return (this.ioreq(this.root))
        }
    }
    ioreq(node){
        if(node.left !=null)
            this.ioreq(node.left)
        console.log(node.data,' ')
        if(node.right !=null)
            this.ioreq(node.right)
    }


getRootNode(){
    return this.root;
}
}
module.exports=BST;