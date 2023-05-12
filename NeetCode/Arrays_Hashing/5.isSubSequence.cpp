/*
Problem -> https://leetcode.com/problems/is-subsequence/description/
*/

class Solution {
public:
    bool isSubsequence(string s, string t) {
        int size = t.length();
        int count = 0;
        for(int i = 0; i<size; i++) {
            if(s[count] == t[i]) {
                count++;
            }
        }
        return count == s.length() ? true : false;
    }
};