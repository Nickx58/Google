/*
Check if duplicate exists in array or not
using sorting technique to solve it
Time Complexity: O(nlongn)
*/
#include <bits/stdc++.h>
using namespace std;

int main() {
    int arr[] = {2,1,3};
    int size = sizeof(arr) / sizeof(arr[0]);
    sort(arr, arr + size);
    bool containDuplicate = false;
    for(int i = 0; i<size; i++) {
        if(arr[i] == arr[i+1]) {
            containDuplicate = true;
        }
    }
    if(containDuplicate) {
        cout<<"duplicates exist"<<endl;
    } else {
        cout<<"No duplicate found"<<endl;
    }
    return 0;
}