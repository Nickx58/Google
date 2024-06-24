#include <iostream>
#include <string>
using namespace std;

void checkString(int start, int end, string s) {
    if(start >= end) {
        cout<<"Palin";
        return;
    }
    if(s[start] != s[end]) {
        cout<<"Not paalin";
        return;
    }
    checkString(start+1,end-1, s);
}
int main() {
    string s = "aba";
    int start = 0;
    int end = s.size() - 1;
    checkString(start,end,s);
}