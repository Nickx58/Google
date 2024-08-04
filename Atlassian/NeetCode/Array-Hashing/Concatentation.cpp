class Solution {
public:
    vector<int> getConcatenation(vector<int>& nums) {
        vector<int> newArr;

        for (int i = 0; i < nums.size(); i++) {
            newArr.push_back(nums[i]);
        }
        for (int i = 0; i < nums.size(); i++) {
            newArr.push_back(nums[i]);
        }
        return newArr;
    }
};