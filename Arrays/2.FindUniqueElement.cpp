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
/*
o(n)2 complexity
*/

int main() {
    int arr[] = {2, 2, 2, 10, 2};
    int k = 3;
    int size = sizeof(arr)/sizeof(arr[0]);
    int count;
    for(int i = 0; i<size; i++) {
        count = 0;
        for(int j = 0; j<size; j++) {
            if(i != j) {
       if(arr[i] == arr[j]) {
           count++;
       }
            }  
        }
        if(count == 0) {
            cout<<arr[i]<<endl;
        }
    }
    return 0;
}