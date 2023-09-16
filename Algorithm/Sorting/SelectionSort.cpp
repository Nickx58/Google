#include <iostream>
using namespace std;

void selectionSort(int arr[], int n)
{
    int i, j, min_index;
    for (i = 0; i < n - 1; i++)
    {
        min_index = i;
        for (j = i + 1; j < n; j++)
        {
            if (arr[j] < arr[min_index])
            {
                min_index = j;
            }
        }
        // swap the element;
        if (min_index != i)
        {
            swap(arr[min_index], arr[i]);
        }
    }
}
int main()
{
    // Write C++ code here
    int arr[] = {2, 1, 4, 3, 6, 5, 0};
    int n = sizeof(arr) / sizeof(arr[0]);

    selectionSort(arr, n);
    cout << endl;
    for (auto x : arr)
    {
        cout << x << " ";
    }
    return 0;
}