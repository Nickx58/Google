#include <iostream>
#include <vector>
using namespace std;

int main() {
    // Write C++ code here
    int arr[] = {0,0,1,2,12,0,15};
    int size = sizeof(arr)/sizeof(int);
    int boundary = 0;

    for(int i = 0; i<size; i++) {
        if(arr[i] != 0) {
            swap(arr[boundary],arr[i]);
            boundary++;
        }
    }

    for(int i = 0; i<size; i++) {
        cout<<arr[i]<<" ";
    }
    return 0;
}