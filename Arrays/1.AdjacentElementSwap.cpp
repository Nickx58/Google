/*
Array Love Babber DS Algo PlayList Problems

Swap Adjacent elements of the array
*/

#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main()
{
    int arr[] = {1, 2, 3, 4, 5, 6};
    int size = sizeof(arr) / sizeof(arr[0]);
    for (int i = 0; i < size - 1; i++)
    {
        swap(arr[i], arr[i++]);
    }
    for (int j = 0; j < size; j++)
        cout << arr[j];
    return 0;
}