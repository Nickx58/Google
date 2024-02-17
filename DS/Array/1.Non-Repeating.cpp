/*
Find the first non-repeating element in a given array arr of n integers
if there is not present any non-repeating element then return 0
*/

class Solution{
    public:
    int firstNonRepeating(int arr[], int n) 
    { 
        // Complete the function
        unordered_map<int,int> myMap;
        
        for(int i = 0; i<n; i++) {
            int key = arr[i];
            myMap[key]++;
        }
        
        for(int i = 0; i<n; i++) {
            int key = arr[i];
            auto temp = myMap.find(key);
            
            if(temp->second == 1) {
                return key;
            }
        }
        return 0;
    } 
  
};