#include <iostream>
using namespace std;


int main()
{
    int arr[] = {2,3,1,6,3,6,2};
    int size = sizeof(arr) / sizeof(arr[0]);
    int answer = 0;
    for(int i =0 ; i<size; i++) {
        answer = answer ^ arr[i];
    }
    cout<<answer;

}