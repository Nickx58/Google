/*

Problem Statement-> https://leetcode.com/problems/valid-anagram/

*/

class Solution {
public:
    bool isAnagram(string s, string t) {
        if(s.length() != t.length()) {
            return false;
        }
        sort(s.begin(), s.end());
        sort(t.begin(), t.end());
        return s == t ? true : false;
    }
};
