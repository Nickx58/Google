#include <iostream>
using namespace std;

int main()
{
    // your code goes here
    int n;
    cin >> n;
    int reverse = 0;

    while (n > 0)
    {
        int lg = n % 10;
        reverse = (reverse * 10) + lg;
        n = n / 10;
    }
    cout << reverse;
}
