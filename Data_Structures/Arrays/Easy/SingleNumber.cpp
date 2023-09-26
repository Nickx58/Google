class Solution {
public:
    int singleNumber(vector<int>& nums) {
        int size = nums.size();
        sort(nums.begin(), nums.end());
        for(int i = 1; i<size; i+= 2) {
            if(nums[i] != nums[i - 1]) {
                return nums[i-1];
            }
        }
        return nums[size - 1];
    }
};