/*
    using two pointer technique to solve the question.
    Assumtion Array is sorted.
    If you given unsorted arry as a input then sort the array First
*/
#include <bits/stdc++.h>
vector<int> findArrayIntersection(vector<int> &arr1, int n, vector<int> &arr2, int m)
{
	// Write your code here.
	vector<int> arr;
	int i = 0;
	int j = 0;
	while(i<n && j<m) {
		if(arr1[i] == arr2[j]) {
			arr.push_back(arr1[i]);
			i++;
			j++;
		} else if(arr1[i] < arr2[j]) {
			i++;
		} else {
			j++;
		}
	}
	return arr;
}

/*
Brute Force apporach
*/

vector<int> findArrayIntersection(vector<int> &arr1, int n, vector<int> &arr2, int m)
{
	// Write your code here.
	vector<int> arr;
	for(int i = 0; i<n;i++) {
		for(int j = 0; j<m;j++) {
			if(arr1[i] == arr2[j]) {
				arr.push_back(arr1[i]);
				arr2[j] = INT_MIN;
				break;
			}
		}
	}
	return arr;
}
