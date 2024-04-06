// https://www.codechef.com/practice/course/logical-problems/DIFF800/problems/SUBSCRIBE_
#include <bits/stdc++.h>

using namespace std;

int main()
{
    // your code goes here
    int t;
    cin >> t;
    while (t--)
    {
        int a, b;
        cin >> a >> b;

        if (a % 6 == 0)
        {
            cout << (a / 6) * b << endl;
        }
        else
        {
            cout << ((a / 6) + 1) * b << endl;
        }
    }
}