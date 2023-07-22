/*
Summation Approach:
Intuition:
We know that the summation of the first N numbers is (N*(N+1))/2. We can say this S1.
Now, in the given array, every number between 1 to N except one number is present.
So, if we add the numbers of the array (say S2), the difference between S1 and S2 will be the missing number. 
Because, while adding all the numbers of the array, we did not add that particular number that is missing.
*/




#include <bits/stdc++.h>
using namespace std;

int missingNumber(vector<int>&a, int N) {

    //Summation of first N numbers:
    int sum = (N * (N + 1)) / 2;

    //Summation of all array elements:
    int s2 = 0;
    for (int i = 0; i < N - 1; i++) {
        s2 += a[i];
    }

    int missingNum = sum - s2;
    return missingNum;
}

int main()
{
    int N = 5;
    vector<int> a = {1, 2, 4, 5};
    int ans = missingNumber(a, N);
    cout << "The missing number is: " << ans << endl;
    return 0;
}
