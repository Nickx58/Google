/*
Dutch national flag algo
*/

#include <iostream>
#include <vector>
using namespace std;

int main() {
int arr[] = {0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1};
int size = sizeof(arr)/sizeof(arr[0]);
// declare three pointer;
int low = 0;
int mid = 0;
int high = size - 1;
while(mid <= high) {
    if(arr[mid] == 0) {
        swap(arr[low],arr[mid]);
        mid++;
        low++;
    } else if(arr[mid] == 1) {
        mid++;
    } else {
        swap(arr[mid],arr[high]);
        high--;  
    }
}
    for(int i = 0; i<size; i++) {
        cout<<arr[i]<<" ";
    }
	return 0;
}
