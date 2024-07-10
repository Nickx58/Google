#include <iostream>
#include <vector>

using namespace std;

int main()
{
    // Write C++ code here
    vector<int> water = {0, 1, 2, 3, 0, 0, 0, 1, 0};

    int start = 0;
    int end = water.size() - 1;
    while (start < end)
    {
        if (water[start] == 0)
        {
            start++;
        }
        else if (water[end] != 0)
        {
            end--;
        }
        else
        {
            swap(water[start], water[end]);
            start++;
            end--;
        }
    }
    for (auto it : water)
    {
        cout << it << " ";
    }
    return 0;
}