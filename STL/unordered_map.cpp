#include <iostream>
#include <unordered_map>
#include <string>
using namespace std;

int main() {
    unordered_map<string, int> ourmap;

    // insert
    ourmap["nikhil"] = 27;
    ourmap["nisha"] = 28;

    // find or access
    cout<<ourmap["nikhil"]<<endl;
    cout<<ourmap.at("nikhil")<<endl;

    // what happen when we try to access or find the key that is not present
    cout<<ourmap["as"]<<endl; // insert that key and assign value 0 to it
    // cout<<ourmap.at("as")<<endl; // through expections

    // check presense
    if(ourmap.count("as") > 0) {
        cout<<"as is present"<<endl;
    }

    // erase
    ourmap.erase("as");
    return 0;
}