#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

int main()
{
    // Write C++ code here
    vector<int> count1 = {1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1};
    int count = 0;
    int prevCount = 0;

    for (int i = 0; i < count1.size(); i++)
    {
        if (count1[i] == 1)
        {
            prevCount++;
            count = max(count, prevCount);
        }
        else
        {
            prevCount = 0;
        }
    }
    cout << count << " ";
    return 0;
}