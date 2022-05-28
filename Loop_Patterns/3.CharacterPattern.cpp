/*
AAA
BBB
CCC
*/

#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n = 3;
	for(int i = 1; i<=n;i++) {
		for(int j = 1;j<=n;j++) {
			char ch = 'A' + i - 1;
			cout<<ch;
		}
		cout<<endl;
	}
	return 0;
}

/*
ABC
ABC
ABC
*/

int main() {
    int n = 3;
	for(int i = 1; i<=n;i++) {
		for(int j = 1;j<=n;j++) {
			char ch = 'A' + j - 1;
			cout<<ch;
		}
		cout<<endl;
	}
	return 0;
}