bool subArrayExists(int arr[], int n)
{
    // Your code here
    unordered_set<int> sum = {0};
    int currentSum = 0;
    for (int i = 0; i < n; i++)
    {
        currentSum += arr[i];
        if (sum.find(currentSum) != sum.end())
        {
            return true;
        }
        sum.insert(currentSum);
    }
    return false;
}