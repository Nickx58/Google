#include <iostream>
using namespace std;

bool isSorted(int arr[], int i, int n)
{
    if (i == n - 1)
    {
        return true;
    }

    if (arr[i] < arr[i + 1] && isSorted(arr, i + 1, n))
    {
        return true;
    }
    return false;
}

int main()
{
    int arr[] = {1, 2, 14, 5, 6};
    int size = sizeof(arr) / sizeof(arr[0]);

    cout << isSorted(arr, 0, size) << endl;
}