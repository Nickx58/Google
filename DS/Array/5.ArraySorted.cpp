#include <iostream>
using namespace std;

int main()
{
    int arr[] = {3, 1, 2, 5, 19, 4, 17};
    int size = sizeof(arr) / sizeof(int);
    bool isSorted = true;

    for (int i = 0; i < size - 1; i++)
    {
        if (arr[i + 1] < arr[i])
        {
            isSorted = false;
            break;
        }
    }
    if (isSorted)
    {
        cout << "Array is Sorted";
    }
    else
    {
        cout << "Array is not sorted" << endl;
    }
    return 0;
}
