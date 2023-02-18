#include <vector>
#include <iostream>
using namespace std;


int main() {
    //vector<int> arr = {1,2,3,4,5,6};
    // Fill constructor -> make a array of size 10 containing all element 7
    vector<int> arr(10,7);
    // pop_back -> remove last element from the array
    arr.pop_back();
    // push_back -> add element at the end of the array
    arr.push_back(7);
    //size property
    for(int i = 0; i<arr.size(); i++) {
        cout<<arr[i]<<" ";
    }
    return 0;
}
    