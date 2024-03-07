#include <iostream>
using namespace std;

int main()
{
    // Write C++ code here
    int arr[] = {1, 1, 2, 2, 3, 3};
    int size = sizeof(arr) / sizeof(int);
    int i = 0;
    for (int j = 1; j < size; j++)
    {
        if (arr[j] != arr[i])
        {
            arr[i + 1] = arr[j];
            i++;
        }
    }
    cout << i + 1 << endl;
    return 0;
}

// This loop iterates through the array starting from the second element (j = 1).
// For each element at index j, it compares it with the previous element at index i.
// If the current element (arr[j]) is not equal to the previous element (arr[i]),
// it means it's a unique element. In that case, it moves the unique element to the next position
// in the array (arr[i+1] = arr[j]) and increments the index i. This effectively removes duplicates in-place.