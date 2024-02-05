#include <bits/stdc++.h>
using namespace std;

class Node {
    public: // access modifier
    
    int data; // data value
    Node* next; // pointer to next node

    public: // constructor
    Node(int data1) {
        data = data1; // initialize the data with next value;
        next = nullptr; // initialize the next as null
    }
    Node(int data1, Node* next1) {
        data = data1; // initialize the data with next value;
        next = next1; // initialize the next as pointer
    }
};

Node* convertArrayToLL(vector<int> &arr) {
    Node* head = new Node(arr[0]);
    Node* mover = head;
    for(int i = 1; i<arr.size(); i++) {
        Node* temp = new Node(arr[i]);
        mover->next = temp;
        mover = temp;
    }
    return head;
}

void printList(Node* head) {
    Node* temp = head;
    while(temp) {
        cout<<temp->data<<" ";
        temp = temp->next;
    }
}

Node* insertAtHead(Node* head, int val) {
    Node* temp = new Node(val, head);
    return temp;
}

Node* insertAtEnd(Node* head, int val) {
    if(head == NULL) {
        return new Node(val, head);
    }

    Node* temp = head;

    while(temp->next) {
        temp = temp->next;
    }

    Node* newNode = new Node(val);

    temp->next = newNode;
    return head;
}

int main() {
    vector<int> arr = {1,2,3,4,5,6};
    Node* head = convertArrayToLL(arr);
    printList(head);
    cout<<endl;
    cout<<"After Inserting At End"<<endl;
    head = insertAtEnd(head, 10);
    printList(head);
}