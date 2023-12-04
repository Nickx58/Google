#include <bits/stdc++.h>
using namespace std;

class Node
{
public:
    int data;
    Node *next;
    Node *prev;

public:
    Node(int data1)
    {
        data = data1;
        next = nullptr;
        prev = nullptr;
    }

public:
    Node(int data1, Node *next1, Node *prev1)
    {
        data = data1;
        next = next1;
        prev = prev1;
    }
};

Node *convertToDLL(vector<int> &arr)
{
    Node *head = new Node(arr[0]);

    Node *prev = head;

    for (int i = 1; i < arr.size(); i++)
    {
        Node *temp = new Node(arr[i]);
        temp->next = nullptr;
        temp->prev = prev;

        prev->next = temp;
        prev = temp;
    }
    return head;
}

Node *deleteHead(Node *head)
{
    if (head == NULL || head->next == NULL)
    {
        return NULL;
    }

    Node *prev = head;
    head = head->next;
    head->prev = nullptr;

    prev->next = nullptr;

    delete prev;

    return head;
}

Node *deleteTail(Node *head)
{
    if (head == NULL || head->next == NULL)
    {
        return NULL;
    }

    Node *temp = head;

    while (temp->next)
    {
        temp = temp->next;
    }

    Node *prev = temp->prev;
    prev->next = nullptr;
    temp->prev = nullptr;

    delete temp;

    return head;
}

void print(Node *head)
{
    Node *temp = head;

    while (temp)
    {
        cout << temp->data << " ";
        temp = temp->next;
    }
    cout << endl;
}

int main()
{
    vector<int> arr = {1, 2, 3, 4, 5};
    Node *head = convertToDLL(arr);
    print(head);
    cout << "After Deleting Head" << endl;
    head = deleteHead(head);
    print(head);
}