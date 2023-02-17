#include <bits/stdc++.h>
using namespace std;

void printSubArrays(int arr[], int size) {
    for(int i = 0; i<size; i++) {
        for(int j = i; j<size; j++) {
            int sum = 0;
            for(int k = i; k<=j; k++) {
                cout<<arr[k]<<',';
            }
            cout<<endl;
        }
    }
}

int main() {
    int arr[] = {1,2,3,4};
    int size = sizeof(arr)/sizeof(int);
    printSubArrays(arr, size);
    return 0;
}
    