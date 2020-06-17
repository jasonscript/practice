const maxDepth = (root, depth = 0) => {
  if (!root) {
    return depth
  }

  return Math.max(maxDepth(root.left, depth + 1), maxDepth(root.right, depth + 1))
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

console.log(maxDepth(tree))
