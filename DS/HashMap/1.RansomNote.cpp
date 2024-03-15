/*
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.
*/

class Solution
{
public:
    bool canConstruct(string ransomNote, string magazine)
    {
        unordered_map<char, int> alpha;

        for (char c : magazine)
        {
            alpha[c]++;
        }
        for (char c : ransomNote)
        {
            alpha[c]--;
            if (alpha[c] < 0)
            {
                return false;
            }
        }
        return true;
    }
};