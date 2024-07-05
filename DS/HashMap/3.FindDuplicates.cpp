#include <iostream>
#include <vector>
#include<unordered_map>
using namespace std;

vector<int> findDuplicates(vector<int>&nums) {
    unordered_map<int,int> mp;
    vector<int> dp;

    for(int i = 0; i<nums.size(); i++) {
        mp[nums[i]]++;
    }

    for(auto x:mp) {
        if(x.second > 1) {
            dp.push_back(x.first);
        }
    }
    return dp;
}
int main() {
    vector<int> arr = {1,1,2,3,3,4,5,5,6};

    vector<int>dup = findDuplicates(arr);
    for(int i = 0; i<dup.size();i++) {
        cout<<dup[i]<<" ";
    }
    return 0;
}