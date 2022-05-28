/*
1234
1234
1234
1234
*/

#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
	// Your code goes here;
	int n = 4;
	for(int i = 1; i<=n;i++) {
		for(int j = 1; j<=n;j++) {
			cout<<j;
		}
		cout<<endl;
	}
	return 0;
}

/*
123
456
789
*/

#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n = 3;
	int count = 1;
	for(int i = 1; i<=n;i++) {
		for(int j = 1;j<=n;j++) {
			cout<<count;
			count++;
		}
		cout<<endl;
	}
	return 0;
}

/*
star pattern aka Traingle Pattern
*
**
***
****
*/

int main() {
    int n = 4;
	int count = 1;
	for(int i = 1; i<=n;i++) {
		for(int j = 1;j<=i;j++) {
			cout<<"*";
		}
		cout<<endl;
	}
	return 0;
}

/*
1
21
321
4321
*/

int main() {
    int n = 4;
	for(int i = 1; i<=n;i++) {
		for(int j = 1;j<=i;j++) {
			cout<<i-j+1;
		}
		cout<<endl;
	}
	return 0;
}