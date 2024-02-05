#include <bits/stdc++.h>
using namespace std;

void solve()
{
    int n;
    cin >> n;
    vector<int> vect(n, 0);

    for (int i = 0; i < n; i++)
    {
        cin >> vect[i];
    }
    sort(vect.begin(), vect.end());
    int N = vect.size() - 1;
    int largest = vect[N];
    int second_largest = 0;

    for (int i = 0; i < vect.size(); i++)
    {
        if (vect[i] != largest)
        {
            second_largest = max(second_largest, vect[i]);
        }
    }
    int sum = largest + second_largest;
    cout << sum << endl;
}
int main()
{
    // your code goes here
    int t;
    cin >> t;
    while (t--)
    {
        solve();
    }
    return 0;
}
