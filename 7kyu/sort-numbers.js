function solution(nums) {
    if (nums == [] || nums == null)
        return nums

    let sortedNums = nums.sort((a, b) => a - b)

    return sortedNums

}