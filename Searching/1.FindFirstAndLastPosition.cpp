/*
Leet Code Link: https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
*/

class Solution {
public:
    vector<int> searchRange(vector<int>& nums, int target) {
        int first = -1;
        int last = -1;
        int startF = 0;
        int endF = nums.size() - 1;
        int startL = 0;
        int endL = nums.size() - 1;

        // first occurance
        while(startF <= endF) {
            int mid = startF + (endF - startF)/2;
            if(nums[mid] == target) {
                first = mid;
                endF = mid - 1;
            } else if(target > nums[mid]) {
                startF = mid + 1;
            } else {
                endF = mid - 1;
            }
        }

        // last occurance
        while(startL <= endL) {
            int mid = startL + (endL - startL)/2;
            if(nums[mid] == target) {
                last = mid;
                startL = mid + 1;
            } else if(target > nums[mid]) {
                startL = mid + 1;
            } else {
                endL = mid - 1;
            }
        }
        vector<int>n;
        n.push_back(first);
        n.push_back(last);
        return n;
    }
};