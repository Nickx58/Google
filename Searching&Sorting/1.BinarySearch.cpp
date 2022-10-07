#include <iostream>
#include <vector>
using namespace std;

int findElement(vector<int> v, int key) {
	int start = 0;
	int end = v.size() - 1;
	while(start <= end) {
		int mid = start + ((end-start)/2);
		if(v[mid] == key) {
			return mid;
		} else if(key > v[mid]) {
			start = mid + 1;
		} else {
			end = mid - 1;
		}
	}
	return -1;
}

int main() {
	vector<int> nums = {1,2,3,4,5,6};
	int key = 5;
	int index = findElement(nums, key);
	if(index >= 0) {
		cout<<"Key found at index: "<<index<<endl;
	} else {
		cout<<"Key not present"<<endl;
	}
}
