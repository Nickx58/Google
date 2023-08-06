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
int main() {
    Node* head = NULL;
    push(head, 10);
    push(head, 100);
    push(head, 1000);
    print(head);
    cout<<"Append the last"<<endl;
    append(head, 5);
    print(head);
    return 0;
}