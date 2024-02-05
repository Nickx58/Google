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

Node* insertBeforeHead(Node* head, int val) {
    Node* newHead = new Node(val, head, nullptr);
    head->prev = newHead;

    return newHead;
}

Node* insertAtEnd(Node*head, int val) {
    if(head == NULL) {
        return NULL;
    }

    Node* temp = head;

    while(temp->next) {
        temp = temp->next;
    }

    Node* newNode = new Node(val);

    temp->next = newNode;
    newNode->next = nullptr;
    newNode->prev = temp;

    return head;
}

Node* insertBeforeTail(Node* head, int val) {
    Node* temp = head;

    while(temp->next) {
        temp = temp->next;
    }

    Node* newNode = new Node(val);

    Node* prevNode = temp->prev;

    prevNode->next = newNode;
    newNode->prev = prevNode;

    newNode->next = temp;
    temp->prev = newNode;

    return head;
}

Node* insertBeforekthPosition(Node*head, int val, int k) {
    if(k == 1) {
        return insertBeforeHead(head, val);
    }

    Node*temp = head;
    int count = 0;

    while(temp) {
        count++;
        if(count == k) {
            break;
        }
        temp = temp->next;
    }

    Node* prev = temp->prev;
    Node* newNode = new Node(val, temp, prev);
    prev->next = newNode;
    temp->prev = newNode;

    return head;
}

int main()
{
    vector<int> arr = {1, 2, 3, 4, 6};
    Node *head = convertToDLL(arr);
    print(head);
    cout << "After Inserting Before Kth" << endl;
    head = insertBeforekthPosition(head,22,2);
    print(head);
}