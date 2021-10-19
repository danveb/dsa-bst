class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */
  
  /*
  Draw Binary Search Tree: 

          15 
        /   \
       12   20
      /
     10

  steps: 
  - insert first node (root node) 
  - if node is less than root, traverse to left subtree; if not traverse to right subtree 

  */

  insert(val) {
    // if the root is null make the newNode the root node 
    if(this.root === null) {
      this.root = new Node(val) 
      return this; 
    }

    // need to traverse the tree and correctly insert the nodes 
    // initialize currentNode as the root
    let currentNode = this.root 
    // while we have the root, check if node value is > root
    while(currentNode) {
      if(val > currentNode.val) {
        // check if right of tree does not exist
        if(currentNode.right === null) {
          // set right to be the newNode(val) 
          currentNode.right = new Node(val) 
          return this 
        } else {
          currentNode = currentNode.right 
        }
      } else if(val < currentNode.val) {
        // check if left of tree does not exist 
        if(currentNode.left === null) {
          // set left to be the newNode(val) 
          currentNode.left = new Node(val) 
          return this 
        } else {
          currentNode = currentNode.left; 
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {

    // initialize newNode 
    let newNode = new Node(val) 

    // if root is null make newNode the root node
    if(this.root === null) {
      this.root = newNode
      return this 
    }

    // helper function 
    const helper = (node) => {
      // check: if node's val > val 
      if(node.val > val) {
        // check: if left node is null 
        if(node.left === null) {
          // left node is newNode 
          node.left = newNode 
          return this 
        } else {
          return helper(node.left) 
        }
      }
      // check: if node's val < val 
      if(node.val < val) {
        // check: if right node is null 
        if(node.right === null) {
          // right node is newNode
          node.right = newNode 
          return this 
        } else {
          return helper(node.right) 
        }
      }
      return;
    }
    helper(this.root) 
    return this;  
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    // if root is null return 
    if(this.root === null) return undefined

    // initialize currentNode as the root node 
    let currentNode = this.root 
    // initialize found as boolean false 
    let found = false 

    // while loop: make condition so that it continues to run
    while(currentNode && !found) {
      // if target is equal to the node's value 
      if(val === currentNode.val) {
        // we found it
        found = true 
        // if target is less than node's value 
      } else if(val < currentNode.val) {
        // we need to look to the left of currentNode 
        currentNode = currentNode.left
      } else {
        // target should be to the right of currentNode...
        currentNode = currentNode.right 
      }
    }
    if(!found) return undefined 
    return currentNode 
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    // initialize currentNode as root 
    let currentNode = this.root 

    // helper function 
    const helper = (currentNode) => {
      // check: if root is not present return undefined 
      if(!currentNode) return undefined 

      // check if root's val is val 
      if(currentNode.val === val) {
        // returns the node
        return currentNode 
      }
      if(currentNode.val > val) {
        return helper(currentNode.left) 
      } else {
        return helper(currentNode.right) 
      }
    }
    return helper(currentNode) 
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. 
   * DFS Pre-Order: self, left, right */

  dfsPreOrder() {
    // initialize visited as empty STACK
    let visited = [] 
    // initialize currentNode as the root node
    let currentNode = this.root 

    // helper function to traverse 
    const traverseHelper = (node) => {
      visited.push(node.val) 
      node.left && traverseHelper(node.left) 
      node.right && traverseHelper(node.right) 
    }
    traverseHelper(currentNode)
    return visited 
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. 
   * DFS In-Order: left, self, right */

  dfsInOrder() {
    // initialize visited as empty STACK 
    let visited = [] 
    // initialize currentNode as root 
    let currentNode = this.root 

    // helper to traverse 
    const traverseHelper = (node) => {
      node.left && traverseHelper(node.left) 
      visited.push(node.val) 
      node.right && traverseHelper(node.right) 
    }
    traverseHelper(currentNode) 
    return visited 
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. 
   * DFS Post-Order: left, right, self */

  dfsPostOrder() {
    // initialize visited as empty STACK 
    let visited = [] 
    // initialize currentNode as root 
    let currentNode = this.root 

    // helper to traverse
    const traverseHelper = (node) => {
      node.left && traverseHelper(node.left) 
      node.right && traverseHelper(node.right) 
      visited.push(node.val) 
    }
    traverseHelper(currentNode) 
    return visited 
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. 
   * BFS: implement with a QUEUE */

  bfs() {

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
