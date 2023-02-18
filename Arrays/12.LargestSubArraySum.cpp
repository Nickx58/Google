/*
Approach 1st is the Brute Force. Trying all the possiblities

*/
#include <bits/stdc++.h>
using namespace std;

void largestSubArrays(int arr[], int size) {
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
    largestSubArrays(arr, size);
    return 0;
}

/*
prefix Sum method

*/
    
#include <bits/stdc++.h>
using namespace std;

void largestSubArray(int arr[], int size) {
    // Prefix sum
    int prefix[size] = {0};
    prefix[0] = arr[0];
    for(int i = 1; i<size; i++) {
        prefix[i] = prefix[i-1] + arr[i];
    }
    
    int largest_sum = 0;
    for(int i = 0; i<size; i++) {
        for(int j = i; j<size; j++) {
            int currentSum = i>0 ? prefix[j] - prefix[i-1] : prefix[j];
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
    largestSubArray(arr, size);
    return 0;
}

    