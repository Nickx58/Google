int isSorted(int n, vector<int> a) {
    // Write your code here.
    int sorted = 1;

    for(int i = 1; i<n; i++) {
        if(a[i] < a[i-1]) {
            sorted = 0;
            break;
        }
    }
    return sorted;
}
