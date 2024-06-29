export default function clamp(value, lower, upper) {
    if (value < lower) {
        return lower;
    } else if (value > upper) {
        return upper;
    } else {
        return value;
    }
}

// Implement a function clamp(number, lower, upper) to restrict a number within the inclusive lower and upper bounds.

// Arguments
// value (number): The number to clamp.
// lower (number): The lower bound.
// upper (number): The upper bound.