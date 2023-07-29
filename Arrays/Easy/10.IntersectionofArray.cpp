// User function template for C++

class Solution {
  public:
    // Function to return the count of the number of elements in
    // the intersection of two arrays.
    int NumberofElementsInIntersection(int a[], int b[], int n, int m) {
        // Your code goes here
        unordered_set<int>s;
        int count = 0;
        for(int i = 0; i<n;i++) {
            s.insert(a[i]);
        }
        for(int i = 0; i<m;i++) {
            if(s.count(b[i])) {
                count++;
                s.erase(b[i]);
            }
        }
        return count;
    }
};