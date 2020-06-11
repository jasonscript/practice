var removeDuplicates = function(nums) {
  let len = nums.length
  if (len === 0) {
    return 0
  }
  let i = 0
  for (let j = 1; j < len; j++) {
    if (nums[j] !== nums[i]) {
      i++
      nums[i] = nums[j]
    }
  }
  return i + 1
};

console.log(removeDuplicates([1, 1, 2, 3, 3]))
