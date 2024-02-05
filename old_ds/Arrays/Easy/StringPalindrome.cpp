#include<bits/stdc++.h>
using namespace std;

bool isPalindrome(string str)
{
    // your code goes here
    int start = 0;
    int end = str.length()-1;
    while(start < end) {
        if(str[start] != str[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}