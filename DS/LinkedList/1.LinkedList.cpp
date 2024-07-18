class Node {
    public:
    int data;
    Node* next;
    
    public:
    Node(int data1) {
        data = data1;
        next = nullptr;
    }
};

Node* convertArrToLink(vector<int>& arr) {
    Node* head = new Node(arr[0]);
    Node* current = head;
    
    for(int i = 1; i<arr.size(); i++) {
        Node* temp = new Node(arr[i]);
        current->next = temp;
        current = current->next;
    }
    return head;
}
int main() {
    vector<int> arr = {1,2,3,4};
    
    Node* head = convertArrToLink(arr);
    Node* curr = head;
    while(curr) {
        cout<<curr->data<<" ";
        curr = curr->next;
    }
}