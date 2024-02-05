#include <iostream>
using namespace std;

int fact(int n) {
    // base condition
    if(n == 0) {
        return 1;
    }
    // recursive condition
    int ans = n*fact(n - 1);
    return ans;
}
int main() {
    int n = 5;
    int ans = fact(n);
    cout<<ans<<endl;
    return 0;
}