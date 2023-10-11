#include <bits/stdc++.h>

using namespace std;
int main()
{
    string s;
    cin >> s;

    int lowerCount = 0;
    int uperCount = 0;

    for (int i = 0; i < s.size(); i++)
    {
        if (isupper(s[i]))
        {
            uperCount++;
        }
        else
        {
            lowerCount++;
        }
    }
    if (uperCount > lowerCount)
    {
        transform(s.begin(), s.end(), s.begin(), ::toupper);
    }
    else
    {
        transform(s.begin(), s.end(), s.begin(), ::tolower);
    }
    cout << s << endl;
    return 0;
}