#include <iostream>
#include <vector>
using namespace std;

void doReverse(int n, vector<int> &vv, vector<int> &v)
{
    if (n < 0)
    {
        return;
    }
    int element = v[n];
    vv.push_back(element);
    doReverse(n - 1, vv, v);
}
vector<int> reverseArray(int n, vector<int> &v)
{
    vector<int> vv;
    doReverse(n, vv, v);
    return vv;
}
int main()
{
    vector<int> v = {1, 2, 3, 4, 5, 6, 7};
    int n = v.size();
    vector<int> result = reverseArray(n - 1, v);
    for (int i = 0; i < result.size(); i++)
    {
        cout << result[i] << " ";
    }
}
