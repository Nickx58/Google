#include <iostream>
using namespace std;

class Node {
    public:
        int data;
        Node* next;
};

void push(Node* &head, int data) {
    Node* newNode = new Node();
    newNode->data = data;
    newNode->next = head;
    head = newNode;
}

void print(Node* &head) {
    Node* temp = head;
    while(temp) {
        cout<<temp->data<<" ";
        temp = temp->next;
    }
    cout<<endl;
}

void append(Node* &head, int data) {
    Node* newNode = new Node();
    newNode->data = data;
    newNode->next = NULL;
    Node* last = head;

    if(head == NULL) {
        head = newNode;
    }

    while(last->next != NULL) {
        last = last->next;
    }

    last->next = newNode;
}

void insertAtPosition(Node* &head, int data, int position) {
    Node* newNode = new Node();
    newNode->data = data;
    newNode->next = NULL;

    // traverse to the n-1 position;
    Node* temp = head;
    for(int i = 1; i<position-1; i++) {
        temp = temp->next;
    }
    newNode->next = temp->next;
    temp->next = newNode;
}
int main() {
    Node* head = NULL;
    push(head, 10);
    push(head, 100);
    push(head, 1000);
    append(head, 5);
    print(head);
    insertAtPosition(head, 44,3);
    print(head);
    insertAtPosition(head, 444,4);
    print(head);
    return 0;
}