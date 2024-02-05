#include<bits/stdc++.h>
using namespace std;

vector<int> increasingNumbers(int N) {
    if(N == 1) {
        return { 1 }; 
    }
    
    vector<int>result = increasingNumbers(N-1);
    result.push_back(N);
    return result;
}`