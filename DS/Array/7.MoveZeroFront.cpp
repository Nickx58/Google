// #include <iostream>
// #include <vector>

// using namespace std;

// int main()
// {
//     // Write C++ code here
//     vector<int> water = {0, 1, 2, 3, 0, 0, 0, 1, 0};

//     int start = 0;
//     int end = water.size() - 1;
//     while (start < end)
//     {
//         if (water[start] == 0)
//         {
//             start++;
//         }
//         else if (water[end] != 0)
//         {
//             end--;
//         }
//         else
//         {
//             swap(water[start], water[end]);
//             start++;
//             end--;
//         }
//     }
//     for (auto it : water)
//     {
//         cout << it << " ";
//     }
//     return 0;
// }

#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> move = {1, 2, 0, 0, 4, 0, 1, 0};
    int n = move.size();
    int nonZeroIndex = n - 1;  // Start from the end

    // Move non-zero elements to the end
    for (int i = n - 1; i >= 0; --i) {
        if (move[i] != 0) {
            move[nonZeroIndex] = move[i];
          nonZeroIndex--;
        }
    }

    // Fill the rest with zeroes
    for (int i = nonZeroIndex; i >= 0; --i) {
        move[i] = 0;
    }

    // Print the result
    for (int it : move) {
        cout << it << ' ';
    }

    return 0;
}
