/*
Problem: https://leetcode.com/problems/concatenation-of-array/description/
*/

class Solution {
public:
    vector<int> getConcatenation(vector<int>& nums) {
        int newSize = nums.size() * 2;
        int newArray[newSize];
        for(int i= 0; i<nums.size(); i++) {
            newArray[i] = nums[i];
        }
        for(int i = nums.size(); i<newSize; i++) {
            newArray[i] = nums[i-nums.size()];
        }
        vector<int> vect(newArray, newArray + newSize);
        return vect;
    }
};

/*
    Another Solution
*/

class Solution {
public:
    vector<int> getConcatenation(vector<int>& nums) {
        vector<int> ans;
        for (int i=0;i<nums.size();i++){
            ans.push_back(nums[i]);
        }
        for(int i=0;i<nums.size();i++){
            ans.push_back(nums[i]);
        }
        return ans;
    }
};