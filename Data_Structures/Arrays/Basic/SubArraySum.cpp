#include <iostream>
using namespace std;

// brute force Approach O(n)3 complexity.
int printSubArray(int arr[], int n) {
    int maxSum = 0;
    for(int i = 0; i<n; i++) {
        for(int j = i; j<n; j++) {
            int sum = 0;
            for(int k = i; k<=j; k++) {
                sum+= arr[k];
            }
            maxSum = max(maxSum, sum);   
        }
    }
    return maxSum;
}
int main() {
    // Write C++ code here
    int arr[] = {-2,3,4,-1,5,-12,6,1,3};
    int size = sizeof(arr)/sizeof(int);
    int sum = printSubArray(arr, size);
    cout<<sum<<endl;
    return 0;
}