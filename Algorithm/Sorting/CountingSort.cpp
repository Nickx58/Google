#include <iostream>
#include <vector>
using namespace std;

void countingSort(int arr[], int n)
{
    int largest = -1;
    for (int i = 0; i < n; i++)
    {
        largest = max(largest, arr[i]);
    }

    vector<int> freq(largest + 1, 0);

    for (int i = 0; i < n; i++)
    {
        freq[arr[i]]++;
    }

    int j = 0;
    for (int i = 0; i <= largest; i++)
    {
        while (freq[i] > 0)
        {
            arr[j] = i;
            freq[i]--;
            j++;
        }
    }
}
int main()
{
    // Write C++ code here
    int arr[] = {2, 1, 4, 3, 6, 5, 0};
    int n = sizeof(arr) / sizeof(arr[0]);

    countingSort(arr, n);
    cout << endl;
    for (auto x : arr)
    {
        cout << x << " ";
    }
    return 0;
}