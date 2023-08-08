LinkedListNode<int> *reverseLinkedList(LinkedListNode<int> *head) 
{
    // Write your code here
    if(head == NULL || head->next == NULL) {
        return head;
    }
    LinkedListNode<int>* prev = NULL;
    LinkedListNode<int>* current = head;
    LinkedListNode<int>* forward = NULL;

    while(current != NULL) {
        forward = current->next;
        current->next = prev;
        prev = current;
        current = forward;
    }
    return prev;
}