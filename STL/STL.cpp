#include <iostream>
#include <vector>
#include <deque>
#include <stack>
#include <queue>
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
}