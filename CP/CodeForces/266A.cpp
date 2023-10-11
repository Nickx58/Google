#include <iostream>
#include <string>

using namespace std;
int main()
{
    // Write C++ code here
    int n;
    cin >> n;
    string s;
    cin >> s;
    int count = 0;

    for (int i = 0; i < s.size() - 1; i++)
    {
        if (s[i] == s[i + 1])
        {
            count++;
        }
    }
    cout << count << endl;
    return 0;
}