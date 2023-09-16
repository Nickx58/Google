int getLargest(vector<int>&a, int n) {
    int largest = INT_MIN;
    int secondLargest = INT_MIN;
    for(int i = 0; i<n; i++) {
        if(a[i] > largest) {
            largest = a[i];
        }
    }
    for(int i = 0; i<n; i++) {
        if(a[i] > secondLargest && a[i] != largest) {
            secondLargest = a[i];
        }
    }
    return secondLargest;
}
int getSmallest(vector<int>&a, int n) {
    int smallest = INT_MAX;
    int secondSmallest = INT_MAX;
    for(int i = 0; i<n; i++) {
        if(a[i] < smallest) {
            smallest = a[i];
        }
    }
    for(int i = 0; i<n; i++) {
        if(a[i] < secondSmallest && a[i] != smallest) {
            secondSmallest = a[i];
        }
    }
    return secondSmallest;
}
vector<int> getSecondOrderElements(int n, vector<int> a) {
    // Write your code here.
    int secondLargest = getLargest(a,n);
    int secondSmallest = getSmallest(a,n);
    return {secondLargest, secondSmallest};
}
