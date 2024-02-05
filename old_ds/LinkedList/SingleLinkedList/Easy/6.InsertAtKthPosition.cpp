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
    Node(int data1, Node *next1)
    {
        data = data1; // initialize the data with next value;
        next = next1; // initialize the next as null
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

Node *insertAtKPosition(Node *head, int k, int val)
{
    if (head == NULL)
    {
        if (k == 1)
        {
            return new Node(val);
        }
        else
        {
            return head;
        }
    }
    if (k == 1)
    {
        return new Node(val, head);
    }
    int count = 0;
    Node *temp = head;
    while (temp)
    {
        count++;

        if (count == (k - 1))
        {
            Node *newNode = new Node(val);
            newNode->next = temp->next;
            temp->next = newNode;
            break;
        }
        temp = temp->next;
    }
    return head;
}

int main()
{
    vector<int> arr = {1, 2, 3, 4, 5, 6};
    Node *head = convertArrayToLL(arr);
    printList(head);
    cout << endl;
    cout << "After Inserting At kth Position" << endl;
    head = insertAtKPosition(head, 1, 10);
    printList(head);
}