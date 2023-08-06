#include <bits/stdc++.h>
using namespace std;

int main() {
    // Write C++ code here
    int arr[] = {5,10,5,4,5,10};
    int size = sizeof(arr)/sizeof(int);
    unordered_set<int>s;
    for(int i = 0; i<size; i++) {
        s.insert(arr[i]);
    }

    /* Iterate over set */
    for(auto itr : s) {
        cout<<itr<<" ";
    }
    cout<<endl;
    cout<<"Distinct element in the set are: "<<s.size();
    return 0;
}