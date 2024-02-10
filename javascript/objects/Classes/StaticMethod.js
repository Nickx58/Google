class ArrayUtils {
  // Prevent instantiation of ArrayUtils
  constructor() {
    throw new Error("ArrayUtils cannot be instantiated.");
  }

  static average(arr) {
    if (arr.length === 0) {
      throw new Error("Array cannot be empty.");
    }

    const sum = arr.reduce((acc, val) => acc + val, 0);
    return sum / arr.length;
  }

  static max(arr) {
    return Math.max(...arr);
  }
}

/*
In JavaScript, static methods are methods that are associated with the class itself rather than with instances of the class. This means you can call static methods directly on the class without needing to create an instance of the class. Here are some common use cases for static methods in JavaScript:

Utility Methods: Static methods are often used to define utility functions that are related to the class but do not depend on specific instances. These utility methods can perform tasks that are not tied to individual instances, such as data manipulation, calculations, or validation.

Factory Methods: Static methods can be used as factory methods to create instances of the class. Factory methods encapsulate the process of creating instances and provide a convenient way to construct objects without exposing the underlying constructor function.

Helper Functions: Static methods can serve as helper functions for performing common tasks related to the class. These helper functions can encapsulate logic that is shared across multiple instances or modules and provide a clean and modular way to organize code.

Singleton Pattern: Static methods can be used to implement the Singleton pattern, where only a single instance of a class is created and shared across the application. The static method can manage the creation and retrieval of the singleton instance, ensuring that only one instance exists at any given time.

Namespacing: Static methods can be used for namespacing purposes to group related functions and properties under a single class. This helps organize code and prevent naming conflicts with functions and variables defined in other parts of the application.

Overall, static methods provide a way to define behavior and functionality that is associated with the class itself rather than with individual instances. They promote code organization, encapsulation, and reusability by allowing you to define and access class-level functionality directly on the class.
*/
