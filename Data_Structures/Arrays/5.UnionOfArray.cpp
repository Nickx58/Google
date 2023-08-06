#include <iostream>
#include <set>
#include <vector>
using namespace std;

int main() {
    // Write C++ code here
    int arr1[] = {1,2,3,4,5,6,7,8,9,10};
    int arr2[] = {2,3,4,5,11,12};

    int n = sizeof(arr1)/sizeof(int);
    int m = sizeof(arr2)/sizeof(int);

    set<int> s;

    for(int i = 0; i<n; i++) {
        s.insert(arr1[i]);
    }
    for(int j = 0; j<m; j++) {
        s.insert(arr2[j]);
    }
    vector<int> Union;
    for(auto & it: s) {
        Union.push_back(it);
    }

    for(int i = 0; i<Union.size(); i++) {
        cout<<Union[i]<<" ";
    }
}