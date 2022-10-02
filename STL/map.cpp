#include <iostream>
#include <map>
#include <string>
using namespace std;


int main()
{
    // MAP container
    map<string, int> marksMap;

    marksMap["Nikhil"] = 100;
    marksMap["Manu"] = 98;
    marksMap["Nicks"] = 94;

    // iterator
    map<string, int> :: iterator itr;


    for(itr = marksMap.begin(); itr != marksMap.end(); itr++) {
        cout<<(*itr).first<<" "<<(*itr).second<<endl;
    }

    return 0;
    
}