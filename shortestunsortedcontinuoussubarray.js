//Objective is to find the length of the shortest continuous subarray 
//that, when sorted, will sort the entire array

let nums = [2, 6, 4, 8, 10, 9, 15]


//O(n) solution that uses two pointers to find the two ends of the potential
//unsorted subarray

let max = -Infinity
let min = Infinity 
let left = 0
let right = nums.length - 1
let leftEnd = 0
let rightEnd = -1

//leftEnd represents the RIGHTmost value that isn't on an increasing slope (9)
//rightEnd represents the LEFTmost value that isn't on a decreasing slope (6)
while (right >= 0) {
    nums[left] >= max ? max = nums[left] : rightEnd = left 
    nums[right] <= min ? min = nums[right] : leftEnd = right 

    left++
    right--
}

return rightEnd - leftEnd + 1