#include <iostream>
#include <map>
#include <string>
#include <vector>
using namespace std;

int main()
{
    map<int,int> nums;
    int arr[] = {4,3,2,7,8,2,3,1};
    int size = sizeof(arr)/sizeof(arr[0]);
    vector<int> duplicates;
    
    // add value and count to the hashmap
    for(int i = 0; i<size; i++) {
        nums[arr[i]]++;
    }
    
    // check the count of the key.
    // if count is greater push in the vector
    for(auto& it : nums) {
        if(it.second > 1) {
            duplicates.push_back(it.first);
        }
    }
    
    for(int i = 0; i<duplicates.size(); i++) {
        cout<<duplicates[i]<<endl;
    }
}