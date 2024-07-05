class Solution
{
public:
    bool containsNearbyDuplicate(vector<int> &nums, int k)
    {
        unordered_map<int, int> numMap;

        for (int i = 0; i < nums.size(); i++)
        {
            if (numMap.find(nums[i]) != numMap.end() && i - numMap[nums[i]] <= k)
            {
                return true;
            }
            numMap[nums[i]] = i;
        }
        return false;
    }
};

/*

Explanation:
HashMap Initialization:

We use an unordered_map to store the elements and their latest indices.
Iterating through the Array:

We loop through each element in the nums array.
For each element nums[i], we check if it already exists in the hashmap (numMap).
If it exists, we check if the difference between the current index (i) and the stored index (numMap[nums[i]]) is less than or equal to k.
Update the HashMap:

If the element does not exist in the hashmap or the difference is greater than k, we update the hashmap with the current index of the element.
Return the Result:

If we find any pair that satisfies the condition, we return true.
If we complete the loop without finding such a pair, we return false.
Example Execution:
For the input nums = [1, 2, 3, 1] and k = 3:

The hashmap initially is empty.
As we iterate through nums:
At index 0: The hashmap becomes {1: 0}.
At index 1: The hashmap becomes {1: 0, 2: 1}.
At index 2: The hashmap becomes {1: 0, 2: 1, 3: 2}.
At index 3: We find that nums[3] (which is 1) already exists in the hashmap, and the difference between the current index (3) and the stored index (0) is 3, which is less than or equal to k. Hence, we return true.
This solution efficiently checks for the condition using a hashmap with a time complexity of O(n), where n is the length of the array, and a space complexity of O(n) due to the additional storage used by the hashmap.

*/