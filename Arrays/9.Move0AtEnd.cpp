/*
Both solution are opitmal one. One use the partition of array technique.
*/

#include <bits/stdc++.h>
using namespace std;

int main() {
    int arr[] = {5,6,0,4,6,0,9,0,8}; // move all zero to end;
    int size = sizeof(arr) / sizeof(arr[0]);
    int boundary = 0;
    for(int i = 0; i<size;i++) {
        if(arr[i] != 0) {
            swap(arr[boundary], arr[i]);
            boundary++;
        }
    }
    for(int i = 0; i<size; i++) {
        cout<<arr[i]<<" ";
    }
    return 0;
}

// class Solution {
// public:
//     void moveZeroes(vector<int>& nums) {
//         int j = 0;
//         for(int i = 0; i<nums.size(); i++) {
//           if(nums[i] != 0) {
//             nums[j++] = nums[i];
//           }
//         }
//       for(int i = j; i<nums.size(); i++) {
//         nums[i] = 0;
//       }
//     }
// };