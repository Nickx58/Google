// https://www.codechef.com/practice/course/logical-problems/DIFF800/problems/EXAMCHEF
#include <bits/stdc++.h>
using namespace std;

int main()
{
    // your code goes here
    int t;
    cin >> t;
    while (t--)
    {
        int x, y, z;
        cin >> x >> y >> z;

        int totalStudent = x * y;

        if (z > (totalStudent / 2))
        {
            cout << "YES";
        }
        else
        {
            cout << "NO";
        }
        cout << endl;
    }
}
