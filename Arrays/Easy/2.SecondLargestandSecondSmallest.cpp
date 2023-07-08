int secondLargest(vector<int> &a, int n) {
    int largest = a[0];
    int second = -1;
    for(int i = 1; i<n; i++) {
        if(a[i] > largest) {
            second = largest;
            largest = a[i];
        } else if(a[i] < largest && a[i] > second) {
            second = a[i];
        }
    }
    return second;
}
int secondSmallest(vector<int> &a, int n) {
    int smallest = a[0];
    int ssmallest = INT_MAX;
    for(int i = 1; i<n; i++) {
        if(a[i] < smallest) {
            ssmallest = smallest;
            smallest = a[i];
        } else if(a[i] != smallest && a[i] < ssmallest) {
            ssmallest = a[i];
        }
    }
    return  ssmallest;
}
vector<int> getSecondOrderElements(int n, vector<int> a) {
    // Write your code here.
    int sLargest = secondLargest(a,n);
    int sSmallest = secondSmallest(a,n);
    return {sLargest, sSmallest};
}
