/*
Given an array arr[] of size n, find the first repeating element.
The element should occur more than once and the index of its first occurrence should be the smallest.
*/

class Solution {
  public:
    // Function to return the position of the first repeating element.
    int firstRepeated(int arr[], int n) {
        // code hereno
        unordered_map<int,int> mp;
        
        for(int i = 0; i<n; i++) {
            mp[arr[i]]++;
        }
        for(int i = 0; i<n; i++) {
            auto key = mp.find(arr[i]);
            if(key->second > 1) {
                return i+1;
            }
        }
        return -1;
    }
}