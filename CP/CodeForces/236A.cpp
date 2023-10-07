#include <bits/stdc++.h>
using namespace std;

int main() {
    string s;
    cin>>s;
    set<char>mySet;
    for(int i = 0; i<s.size(); i++) {
        mySet.insert(s[i]);
    }
    int ss = mySet.size();
    if(ss%2 == 0) {
        cout<<"CHAT WITH HER!";
    } else {
        cout<<"IGNORE HIM!";
    }
    cout<<endl;
    return 0;
}