#include <bits/stdc++.h>
using namespace std;

int main() {
    string s;
    cin >>s;

    int n1 = 0, n2 = 0, n3 = 0;

    for(int i = 0; i<s.size(); i++) {
        if(s[i] == '1') {
            n1 += 1;
        } else if(s[i] == '2') {
            n2 += 1;
        } else if(s[i] == '3') {
            n3 += 1;
        }
    }

    string ss;
    for(int i = 0; i<n1; i++) {
        ss += "1+";
    }
    for(int i = 0; i<n2; i++) {
        ss += "2+";
    }
    for(int i = 0; i<n1; i++) {
        ss += "3+";
    }
    if(!ss.empty()) {
        ss.pop_back();
    }
    cout<<ss<<endl;
    return 0;
}