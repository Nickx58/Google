#include <iostream>
using namespace std;

void sorted(int size, int arr[])
{
    if (size <= 1)
    {
        cout << "Sorted";
        return;
    }
    if (arr[size - 1] > arr[size])
    {
        cout << "Not sorted";
        return;
    }
    sorted(--size, arr);
}
int main()
{
    int arr[] = {1, 2, 3, 4, 5, 6};
    int size = sizeof(arr) / sizeof(arr[0]);
    sorted(size - 1, arr);
    return 0;
}