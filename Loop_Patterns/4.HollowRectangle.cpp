#include <bits/stdc++.h>
using namespace std;
/*
*****
*   *
*   *
*****
*/
int main()
{
  for (int i = 0; i < 5; i++)
  {
    cout << "*";
  }
  cout << endl;
  for (int i = 1; i <= 2; i++)
  {
    for (int j = 1; j <= 2; j++)
    {
      cout << "*";
      for (int k = 0; k < 1; k++)
      {
        cout << "   ";
      }
    }
    cout << endl;
  }
  for (int i = 1; i <= 5; i++)
  {
    cout << "*";
  }
  return 0;
}
