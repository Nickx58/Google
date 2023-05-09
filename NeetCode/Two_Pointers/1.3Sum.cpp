/*
Problem: https://leetcode.com/problems/3sum/
*/

class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        vector<vector<int>>vec;
        set<vector<int>> s;
        for(int i = 0; i<nums.size() - 2; i++) {
            int start = i + 1;
            int end = nums.size() - 1;
            while(start < end) {
                int sum = nums[i] + nums[start] + nums[end];
                if(sum == 0) {
                    s.insert({nums[i],nums[start],nums[end]});
                    start++;
                    end--;
                } else if(sum < 0) {
                    start++;
                } else {
                    end--;
                }
            }
        }
        for(auto triplets: s) {
            vec.push_back(triplets);
        }
        return vec;
    }
};