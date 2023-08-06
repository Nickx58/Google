#include <iostream>
#include <vector>
using namespace std;


int main() {
    // Write C++ code here
    int arr[] = {1,0,2,3,0,4,5,0,1};
    vector<int> temp;
    int n = sizeof(arr)/sizeof(int);

    // step 1
    // -> Push all the non zero element in temp array
    for(int i = 0; i<n; i++) {
        if(arr[i] != 0) {
            temp.push_back(arr[i]);
        }
    }

    // Step 2
    // Fill the arr with the non zero element
    for(int i = 0; i<temp.size(); i++) {
        arr[i] = temp[i];
    }

    // step 3
    // fill the remaning index with zero
    for(int i = temp.size(); i<n; i++) {
        arr[i] = 0;
    }

    for(int i = 0; i<n; i++) {
        cout<<arr[i]<<" ";
    }
    cout<<endl;
    return 0;
}

/*
Optimal Approach without taking extra space
    // Step 1
    // Find the index of first 0 element
    int j = -1;
    for(int i = 0; i<n; i++) {
        if(arr[i] == 0) {
            j = i;
            break;
        }
    }

    // step 2
    // swap the index of zero and non-zero element;

    for(int i = j+1; i<n; i++) {
        if(arr[i] != 0) {
            swap(arr[i],arr[j]);
            j++;
        }
    }

*/