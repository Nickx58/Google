#include<bits/stdc++.h>

using namespace std;

int main() {
    unordered_map<string, int> myMap;

    myMap["nikhil"] = 28;
    myMap["Nisha"] = 29;

    // One Way
    for(auto x: myMap) {
        cout<<x.first<<" "<<x.second<<endl;
    }
    cout<<endl;

    // second way
    for(auto itr = myMap.begin(); itr != myMap.end(); itr++) {
        cout<<itr->first<<" "<<itr->second<<endl;
    }
    cout<<endl<<"***********"<<endl;
    string key = "nikhil";

    if(myMap.find(key) != myMap.end()) {
       auto temp = myMap.find(key);
       cout<<"Key is "<<temp->first<<endl;
       cout<<"Value is "<<temp->second<<endl;
    }
    cout<<endl;
    // one way
    myMap.insert({"aditi", 12});

    // another way
    myMap.insert(make_pair("mobile", 5200));
    for(auto itr = myMap.begin(); itr != myMap.end(); itr++) {
        cout<<itr->first<<" "<<itr->second<<endl;
    }

    unordered_map<int,int> newMap;

    vector<int>v = {1,2,2,3,4,5,5,6,7,7,8,9,9};

    // mark the frequency of each element
    for(int i = 0; i<v.size(); i++) {
        int key = v[i];
        newMap[key]++;
    }
    for(auto itr = newMap.begin(); itr != newMap.end(); itr++) {
        cout<<itr->first<<" "<<itr->second<<endl;
    }
}