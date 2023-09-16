#include <iostream>
using namespace std;

void bubbleSort(int arr[], int n) {
    int i,j;
    bool sorted;

    for(i = 0; i<n-1;i++) {
        sorted = false;
        for(j = 0; j<n-i-1;j++) {
            if(arr[j] > arr[j+1]) {
                swap(arr[j], arr[j+1]);
                sorted = true;
            }
        }
        if(sorted == false) {
            break;
        }
    }
}
int main() {
    // Write C++ code here
    int arr[] = {2,1,4,3,6,5,0};
    int n = sizeof(arr)/sizeof(arr[0]);

    bubbleSort(arr,n);
    cout<<endl;
    for(int i = 0; i<n;i++) {
        cout<<arr[i]<<" ";
    }
    return 0;
}