#include <iostream>
using namespace std;

int countWays(int n) {
    if(n < 0) {
        return 0;
    }
    if(n == 0) {
        return 1;
    }
    return countWays(n-1)+countWays(n-2);
}
int main() {
    // Write C++ code here
    int t;
    cin>>t;
    while(t--) {
        int n;
        cin>>n;
        int ans = countWays(n);
        cout<<ans<<endl;
    }
}

