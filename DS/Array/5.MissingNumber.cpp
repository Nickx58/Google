#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

int main()
{
    // Write C++ code here
    vector<int> missing = {1, 2, 3, 4, 5, 6, 7, 9};
    unordered_map<int, int> mp;

    for (auto it : missing)
    {
        mp[it]++;
    }

    for (int i = 1; i <= missing.size(); i++)
    {
        if (mp[i] == 0)
        {
            cout << i;
        }
    }
    return 0;
}