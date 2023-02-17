#include <bits/stdc++.h>
using namespace std;

void print_all_pairs(int arr[], int size)
{
    for (int i = 0; i < size; i++)
    {
        for (int j = i + 1; j < size; j++)
        {
            cout << arr[i] << "," << arr[j] << endl;
        }
        cout << endl;
    }
}

int main()
{
    int arr[] = {1, 2, 3, 4};
    int size = sizeof(arr) / sizeof(int);
    print_all_pairs(arr, size);
    return 0;
}
