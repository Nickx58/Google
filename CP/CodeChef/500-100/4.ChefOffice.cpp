// https://www.codechef.com/practice/course/logical-problems/DIFF800/problems/OFFICE?tab=statement

#include <bits/stdc++.h>
using namespace std;

int main()
{
    // your code goes here
    int t;
    cin >> t;
    while (t--)
    {
        int x, y;
        cin >> x >> y;
        int totalHours = (x * 4) + y;
        cout << totalHours << endl;
    }
}
