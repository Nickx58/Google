#include <iostream>
using namespace std;

void find(int size, int arr[], int n)
{
    if (size < 0)
    {
        cout << "Not Found";
        return;
    }
    if (arr[size] == n)
    {
        cout << "Found";
        return;
    }
    find(--size, arr, n);
}
int main()
{
    int arr[] = {1, 2, 3, 4, 5, 6};
    int size = sizeof(arr) / sizeof(arr[0]);
    int n = 12;
    find(size, arr, n);
    return 0;
}