class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int,int> mp;
        int n = nums.size();
        for(int i = 0; i<n; i++) {
            int pair = target - nums[i];
            if(mp.count(pair)) {
                return {mp[pair], i};
            }
            mp[nums[i]] = i;
        }
        return {};
    }
};