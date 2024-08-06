int main() {
    vector<int> sub = {2,4,1,0,3};
    int size = sub.size();
  
    int countEven = 0;
  
    for(int it: sub) {
        if(it%2 == 0) {
          ++countEven;
        }
    }
  
    int newSize = size + countEven;
    sub.resize(newSize);
  
    int j = newSize -1;
  
    for(int i = size - 1; i>=0; --i) {
      if(sub[i] % 2 == 0) {
        sub[j--] = sub[i];
        sub[j--] = sub[i];
      } else {
        sub[j--] = sub[i];
      }
    }
  for(int item : sub) {
    cout<<item<<" ";
  }
}