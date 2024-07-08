#include <iostream>
#include <vector>
using namespace std;


int main() {
    // Write C++ code here
    vector<int> odd = {1,3,5,7,9,13,15,17,19};
    vector<int> even = {2,4,6,8,10,12,20};
    vector<int> sorted = {};
    int i = 0;
    int j = 0;

    while(i<odd.size() && j<even.size()) {
        if(odd[i] < even[j]) {
            sorted.push_back(odd[i]);
            i++;
        } else if(odd[i] > even[j]) {
            sorted.push_back(even[j]);
            j++;
        } else {
            i++;
            j++;
        }
    }

    while( i < odd.size()) {
        sorted.push_back(odd[i]);
        i++;
    }
    while(  j < even.size()) {
        sorted.push_back(even[j]);
        j++;
    }
    for(auto it: sorted) {
        cout<<it<<" ";
    }
    return 0;
}