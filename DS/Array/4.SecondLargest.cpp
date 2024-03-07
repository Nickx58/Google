#include <iostream>
using namespace std;

int main()
{
    // Write C++ code here
    int arr[] = {3, 1, 2, 5, 19, 4, 17};
    int size = sizeof(arr) / sizeof(int);

    int largest = arr[0];
    int second_largest = 0;
    for (int i = 1; i < size; i++)
    {
        if (arr[i] > largest)
        {
            largest = arr[i];
        }
        if (arr[i] > second_largest && arr[i] < largest)
        {
            second_largest = arr[i];
        }
    }
    cout << largest << " " << second_largest << endl;
    return 0;
}