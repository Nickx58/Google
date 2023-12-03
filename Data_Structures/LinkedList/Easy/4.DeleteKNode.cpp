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


Node* deleteK(Node* head, int k) {
    if(head == NULL) {
        return NULL;
    }

    if(k == 1) {
        Node* temp = head;
        head = head->next;
        delete temp;
        return head;
    }
    Node* temp = head;
    int count = 0;
    Node* prev = NULL;

    while(temp) {
        count++;
        if(count == k) {
            prev->next = prev->next->next;
            delete temp;
            break;
        }
        prev = temp;
        temp = temp->next;
    }
    return head;
}

int main() {
    vector<int> arr = {1,2,3,4,5,6};
    Node* head = convertArrayToLL(arr);
    printList(head);
    cout<<endl;
    cout<<"After Deleting kth"<<endl;
    head = deleteK(head, 2);
    printList(head);
}