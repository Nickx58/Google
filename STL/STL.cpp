#include <iostream>
#include <vector>
#include <deque>
#include <stack>
#include <queue>
#include <map>
#include <string>
using namespace std;

/*
size(),capacity,empty are common to most of the containers
v.begin() -> will give first element
*/

int main() {
  /* Vector Start */
  cout<<"***Vector***"<<endl;
  vector<int> v;
  v.push_back(1);
  v.push_back(2);
  for (int i : v) {
    cout << i << " ";
  }
  cout<<endl;
  /* Vector End */

  /* Deque Start */
  cout<<"***Dequeue***"<<endl;
  deque <int> d;
  d.push_back(1);
  d.push_front(2);
  for(int i:d) {
    cout<<i<<" ";
  }
  cout<<endl;
  /* Deque end */

  /* Stack Start */
  cout<<"***Stack***"<<endl;
  stack<string>s;
  s.push("Nikhil");
  s.push("Sharma");
  s.push("Nisha");
  s.push("Nanda");

  cout<<"Stack Top Element: "<<s.top()<<endl;
  s.pop();
  cout<<"Stack Top Element after removing: "<<s.top()<<endl;
  cout<<"Size of the stack: "<<s.size()<<endl;
  /* Stack End */

  /* Queue Start */
  cout<<"***Queue***"<<endl;
  queue<string>q;
  q.push("Nikhil");
  q.push("Nisha");
  cout<<"Queue Top Element: "<<q.front()<<endl;
  /* Queue End */

  /* Priority Queue Start */
  cout<<"***Priority Queue***"<<endl;
  // Max Heap
  priority_queue<int> maxi;

  // Min heap
  priority_queue<int, vector<int>, greater<int>> mini;

  maxi.push(1);
  maxi.push(2);
  maxi.push(3);
  maxi.push(4);
  int n = maxi.size();
  for(int i = 0; i<n;i++) {
    cout<<maxi.top()<<" ";
    maxi.pop();
  }cout<<endl;

  mini.push(1);
  mini.push(2);
  mini.push(3);
  mini.push(4);
  int m = mini.size();
  for(int i = 0; i<m;i++) {
    cout<<mini.top()<<" ";
    mini.pop();
  }cout<<endl;

  /* Priority Queue End */

  /* Map Start */
  cout<<"***MAP***"<<endl;
  map<int, string> myMap;
  myMap[1] = "Nikhil";
  myMap[2] = "Nisha";
  myMap[3] = "Sunaina";

  myMap.insert({5, "Hemu"});

  for(auto i:myMap) {
    cout<<i.first<<" "<<i.second<<endl;
  }
  /* Map End */
}