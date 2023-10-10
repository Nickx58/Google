#include <iostream>
using namespace std;

int fib(int n) {
    // base condition
    if(n == 0 || n == 1) {
        return n;
    }
    // recursive condition
    int fib1 = fib(n-1);
    int fib2 = fib(n-2);
    return fib1 + fib2;
}
int main() {
    int n = 5;
    int ans = fib(n);
    cout<<ans<<endl;
    return 0;
}