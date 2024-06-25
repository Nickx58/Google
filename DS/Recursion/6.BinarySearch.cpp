#include <iostream>
using namespace std;

void binarySearch(int arr[], int start, int end, int k)
{
    if (start > end)
    {
        cout << "Not Found";
        return;
    }
    int mid = start + (end - start) / 2;

    if (arr[mid] == k)
    {
        cout << "Found";
        return;
    }
    else if (arr[mid] < k)
    {
        binarySearch(arr, mid + 1, end, k);
    }
    else
    {
        binarySearch(arr, start, mid - 1, k);
    }
}
int main()
{
    int arr[] = {2, 4, 6, 8, 10, 12};
    int size = sizeof(arr) / sizeof(arr[0]);
    binarySearch(arr, 0, size - 1, 6);
    return 0;
}