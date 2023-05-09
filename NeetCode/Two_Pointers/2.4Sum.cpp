/*
Problem: https://leetcode.com/problems/4sum/
*/

class Solution {
public:
    vector<vector<int>> fourSum(vector<int>& nums, int target) {
        sort(nums.begin(), nums.end());
        vector<vector<int>>vec;
        set<vector<int>> s;
        int n = nums.size();
        for(int i = 0; i<n - 3; i++) {
            for(int j = i+1; j<n-2; j++) {
                int start = j+1;
                int end = n - 1;
                while(start<end) {
                    long long sum = (long long)nums[i] + (long long)nums[j] + (long long)nums[start] + (long long)nums[end];
                    if(sum == target) {
                        s.insert({nums[i],nums[j],nums[start],nums[end]});
                        start++;
                        end--;
                    } else if(sum < target) {
                        start++;
                    } else {
                        end--;
                    }
                }
            }
        }
         for(auto triplets: s) {
            vec.push_back(triplets);
        }
        return vec;
    }
};