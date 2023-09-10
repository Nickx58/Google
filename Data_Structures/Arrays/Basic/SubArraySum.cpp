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

// prefix sum approach O(n)2 complexity.
/*
Prefix Sum Approach:
Prefix Sum Array (prefix): First, the code calculates a prefix sum array named prefix.
The prefix[i] at index i stores the sum of all elements from arr[0] to arr[i]. This is done using a loop:
    for(int i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] + arr[i];
    }
This step allows us to efficiently calculate the sum of any subarray by subtracting two prefix sums.

Calculating Subarray Sums: The code then uses nested loops to consider all possible subarrays.
The outer loop (i) iterates over the starting index of the subarray, and the inner loop (j) iterates over the ending index of the subarray.

Subarray Sum Calculation (subSum):

    int subSum = i > 0 ? prefix[j] - prefix[i - 1] : prefix[j];

This line calculates the sum of the subarray from index i to j. Here's how it works:

prefix[j] represents the sum of all elements from arr[0] to arr[j], which is essentially the cumulative sum up to the j-th element.

prefix[i - 1] represents the sum of all elements from arr[0] to arr[i - 1],
which is the cumulative sum up to the element just before the i-th element.

So, prefix[j] - prefix[i - 1] calculates the sum of elements from arr[i] to arr[j].
This is done by subtracting the cumulative sum up to the element before i from the cumulative sum up to j.

However, there's a special case when i is 0 (the start of the array).
In this case, you can't subtract prefix[i - 1] because it's not a valid index (negative index).
So, the conditional expression checks if i is greater than 0. 
If i is greater than 0, it calculates the sum using prefix[j] - prefix[i - 1]. If i is 0, it simply uses prefix[j].
*/
int printSubArrayPrefix(int arr[], int n) {
    int maxSum = 0;
    int prefix[100] = {0};
    prefix[0] = arr[0];
    for(int i = 1; i<n; i++) {
        prefix[i] = prefix[i - 1] + arr[i];
    }

    for(int i = 0; i<n; i++) {
        for(int j = i; j<n; j++) {
            int subSum = i>0 ? prefix[j] - prefix[i-1] : prefix[j];
            maxSum = max(maxSum, subSum);   
        }
    }
    return maxSum;
}

int main() {
    // Write C++ code here
    int arr[] = {-2,3,4,-1,5,-12,6,1,3};
    int size = sizeof(arr)/sizeof(int);
    int sum = printSubArray(arr, size);
    int sumPrefix = printSubArrayPrefix(arr, size);
    cout<<sum<<sumPrefix<<endl;
    return 0;
}