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

Node *convertArrayToLL(vector<int> &arr)
{
    Node *head = new Node(arr[0]);

    Node *mover = head;

    for (int i = 1; i < arr.size(); i++)
    {
        Node *temp = new Node(arr[i]);
        mover->next = temp;

        mover = temp;
    }

    return head;
}

void printList(Node *head)
{
    Node *temp = head;
    while (temp)
    {
        cout << temp->data << " ";
        temp = temp->next;
    }
}

int main()
{
    vector<int> arr = {1, 2, 3};

    Node *head = convertArrayToLL(arr);
    printList(head);
}