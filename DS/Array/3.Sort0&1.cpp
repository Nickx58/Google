#include <iostream>
#include <vector>
using namespace std;

int main()
{
    // Write C++ code here
    vector<int> arr = {1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1};

    int i = 0;
    int j = arr.size() - 1;

    while (i < j)
    {
        if (arr[i] == 0)
        {
            i++;
        }
        else if (arr[j] == 1)
        {
            j--;
        }
        else if (arr[i] == 1 && arr[j] == 0)
        {
            swap(arr[i], arr[j]);
            i++;
            j--;
        }
    }

    for (auto it : arr)
    {
        cout << it << " ";
    }
    return 0;
}