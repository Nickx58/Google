/*
Approach 1st is the Brute Force. Trying all the possiblities

*/
#include <bits/stdc++.h>
using namespace std;

void printSubArrays(int arr[], int size) {
    int largest_sum = 0;
    for(int i = 0; i<size; i++) {
        for(int j = i; j<size; j++) {
            int currentSum = 0;
            for(int k = i; k<=j; k++) {
                currentSum += arr[k];
            }
            if(currentSum > largest_sum) {
                largest_sum = currentSum;
            }
        }
    }
    cout<<"Largest Subarray sum is: "<<largest_sum<<endl;
}

int main() {
    int arr[] = {-2,3,4,-1,5,-12,6,1,3};
    int size = sizeof(arr)/sizeof(int);
    printSubArrays(arr, size);
    return 0;
}
    