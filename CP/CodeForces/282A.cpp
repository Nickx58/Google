#include <bits/stdc++.h>
using namespace std;

int main() {
    
    int x = 0;
    int operation;
    cin>>operation;
    while(operation --) {
        string o;
        cin>>o;
        for(int i = 0; i<o.size(); i++) {
            if(o[i] == '+') {
                x += 1;
                break;
            }
            if(o[i] == '-') {
                x -= 1;
                break;
            }

        }
    }
    cout<<x<<endl;
    return 0;
}