#include <iostream>
using namespace std;

int main()
{
    // Write C++ code here
    int arr[] = {1, 0, 1, 1, 0, 1};
    int size = sizeof(arr) / sizeof(arr[0]);

    int count = 0;
    int maxCount = 0;

    for (int i = 0; i < size; i++)
    {
        if (arr[i] == 1)
        {
            count++;
            maxCount = max(count, maxCount);
        }
        else
        {
            count = 0;
        }
    }
    cout << maxCount << endl;
    return 0;
}