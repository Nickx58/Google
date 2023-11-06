#include<bits/stdc++.h>

using namespace std;

int main() {
    unordered_set<int> s;
    s.insert(1);
    s.insert(11);
    s.insert(12);
    s.insert(14);
    s.insert(16);

    for(auto it = s.begin(); it != s.end(); it++) {
        cout<<*it<<endl;
    }

    int find_key = 12;

    if(s.find(find_key) == s.end()) {
        cout<<"Key Not Found"<<endl;
    } else {
        cout<<"Key Found"<<endl;
        auto temp = s.find(find_key);
        s.erase(temp);
    }
    for(auto it = s.begin(); it != s.end(); it++) {
        cout<<*it<<endl;
    }
    if(s.count(1)) {
        cout<<"Key Found count";
    } else {
        cout<<"Key Not Found count";
    }
}