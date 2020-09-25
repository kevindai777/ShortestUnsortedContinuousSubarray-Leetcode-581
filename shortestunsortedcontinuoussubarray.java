//Java Solution

class Solution {
    public int findUnsortedSubarray(int[] nums) {
        int leftEnd = 0;
        int rightEnd = -1;
        int left = 0;
        int right = nums.length - 1;
        int min = Integer.MAX_VALUE;
        int max = Integer.MIN_VALUE;
        
        while (right >= 0) {
            if (nums[left] >= max) {
                max = nums[left];
            } else {
                rightEnd = left;
            }
            
            if (nums[right] <= min) {
                min = nums[right];
            } else {
                leftEnd = right;;
            }
            
            left++;
            right--;
        }
        
        return rightEnd - leftEnd + 1;
    }
}