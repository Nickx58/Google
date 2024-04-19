// https://www.codechef.com/practice/course/logical-problems/DIFF800/problems/CREDCOINS

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
        int totalCoins = a * b;
        int buy = totalCoins / 100;
        cout << buy << endl;
    }
}