#include <iostream>
using namespace std;
int first(int arr[], int i, int n, int num)
{
    if (i == n)
    {
        return -1;
    }

    if (arr[i] == num)
    {
        return i;
    }
    int subIndex = first(arr, i + 1, n, num);
    if (subIndex != -1)
    {
        return subIndex;
    }
    return -1;
}
int main()
{

    int arr[] = {1, 2, 4, 5, 6, 7};
    int size = sizeof(arr) / sizeof(arr[0]);

    cout << first(arr, 0, size, 71) << endl;
    return 0;
}