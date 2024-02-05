class Solution{
    public:
    //Complete this function
    //Function to check whether there is a subarray present with 0-sum or not.
    bool subArrayExists(int arr[], int n)
    {
        //Your code here
        unordered_set<int> mySet;
        
        int prefixSum = 0;
        for(int i = 0; i<n; i++) {
            prefixSum += arr[i];
            
            if(prefixSum == 0) {
                return true;
            }
            if(mySet.find(prefixSum) != mySet.end()) {
                return true;
            }
            mySet.insert(prefixSum);
        }
        return false;
    }
};