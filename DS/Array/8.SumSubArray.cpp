int main() {
    vector<int> sub = {-2,1,-3,4,-1,2,1,-5,4};
    int maxSum = 0;
    for(int i = 0; i<sub.size(); i++) {
      for(int j = i; j<sub.size();j++) {
        int current_sum = 0;
        for(int k = i; k<=j;k++) {
          current_sum += sub[k];
        }
        if(current_sum > maxSum) {
          maxSum = current_sum;
        }
      }
    }
  cout<<maxSum;
}