#include <bits/stdc++.h>
using namespace std;

class Node
{
public:         // access modifier
    int data;   // data value
    Node *next; // pointer to next node

public: // constructor
    Node(int data1)
    {
        data = data1;   // initialize the data with next value;
        next = nullptr; // initialize the next as null
    }
};

int main()
{
    vector<int> arr = {2, 4, 6};

    Node *y = new Node(arr[0]);

    cout << y->data << endl;
}