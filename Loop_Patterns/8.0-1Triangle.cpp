#include <bits/stdc++.h>
using namespace std;
/*
1
0 1
1 0 1
0 1 0 1
1 0 1 0 1
*/
int main() {
    int n = 5;
    int number = 1;
    for(int i = 1; i<=n; i++) {
        for(int j = 1; j<=i; j++) {
            int sum = i+j;
            (sum%2) == 0 ? cout<<"1" : cout<<"0";
            cout<<" ";
        }
        cout<<endl;
    }
    return 0;
}