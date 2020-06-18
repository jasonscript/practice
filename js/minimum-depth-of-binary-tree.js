const minDepth = root => {
  if (!root) {
    return 0
  }

  const minLeft = minDepth(root.left)
  const minRight = minDepth(root.right)
  if (minLeft && minRight) {
    return 1 + Math.min(minLeft, minRight)
  }
  return 1 + (minLeft || minRight)
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

console.log(minDepth(tree))
