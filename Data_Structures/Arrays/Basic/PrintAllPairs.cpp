#include <iostream>
using namespace std;

void printAllPairs(int arr[], int n) {
    for(int i = 0; i<n; i++) {
        for(int j = i+1; j<n; j++) {
            cout<<arr[i]<<" "<<arr[j]<<endl;
        }
        cout<<endl;
    }
}

int main() {
    // Write C++ code here
    int arr[] = {10,20,30,40};
    int size = sizeof(arr)/sizeof(int);
    printAllPairs(arr,size);
    return 0;
}