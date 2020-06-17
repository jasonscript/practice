const isBalanced = (root) => {
  if (!root) {
    return true
  }

  let balanced = true;

  (function _height(node) {
    if (!node) {
      return 0
    }

    if (balanced) {
      const leftHeight = _height(node.left)
      const rightHeight = _height(node.right)
      if (Math.abs(leftHeight - rightHeight) > 1) {
        balanced = false
      }
      return 1 + Math.max(leftHeight, rightHeight)
    }
  })(root)

  return balanced
}

const tree = {
  val: 3,
  left: {
    val: 9,
    left: null,
    right: null
  },
  right: {
    val: 20,
    left: {
      val: 15,
      left: null,
      right: null
    },
    right: {
      val: 7,
      left: null,
      right: null
    }
  }
}

console.log(isBalanced(tree))
