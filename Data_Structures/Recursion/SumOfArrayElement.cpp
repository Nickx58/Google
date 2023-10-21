#include <iostream>
using namespace std;

int sumOfArray(int arr[], int size)
{
    if (size == 0)
    {
        return 0;
    }
    return arr[0] + sumOfArray(arr + 1, size - 1);
}
int main()
{
    int arr[] = {1, 2, 3, 4};
    int size = sizeof(arr) / sizeof(int);
    int result = sumOfArray(arr, size);
    cout << result << endl;
}
