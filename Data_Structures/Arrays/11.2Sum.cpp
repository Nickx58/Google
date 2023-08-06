#include <vector>
#include <unordered_set>
using namespace std;

vector<int> twoNumberSum(vector<int> array, int targetSum) {
  // Write your code here.
  unordered_set<int>nums;
  for(int num : array) {
    int potentialMatch = targetSum - num;
    if(nums.find(potentialMatch) != nums.end()) {
      return vector<int>{potentialMatch, num};
    } else {
      nums.insert(num);
    }
  }
  return {};
}
