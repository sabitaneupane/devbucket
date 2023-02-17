# Clean Code: Self-Documenting and Self-Explanatory Code



## Self-Documenting and Self-Explanatory Code - Writing Code that Tells Its Own Story.

> Code that tells its own story? Yes, it's possible! Learn the art of writing self-documenting and self-explanatory code for a better understanding.

Clean, easy-to-understand code helps with maintenance and modification. Code should convey its purpose clearly, reducing need for comments and documentation. Best practices for self-documenting code include descriptive names, concise code, and SOLID/KISS principles. This leads to code that's easy to understand.

### Create clean, organized, and readable code through self-documenting techniques:

- **Use descriptive and meaningful naming conventions:** Choose names that accurately describe the purpose of variables, functions, and classes.
- **Document code:** Document the code with meaningful comments and inline documentation to help others understand its behavior.
- **Provide comments:** Provide comments and documentation to enhance the self-explanatory nature of the code.
- **Adhere to design patterns:** Use design patterns to standardize the structure and organization of the code.
- **Make use of SOLID principles:** Implement the SOLID principles of object-oriented design to improve the structure and organization of the code.
- **Organize code:** Divide code into functional files or modules for improved navigation and easy access to relevant code.

By following the principles of self-documenting and self-explanatory code, you can improve the readability and understandability of your code, making it easier for others to maintain and reducing the time and effort required for debugging and updates.

## Tools

There are several tools that can assist with writing self-documenting and self-explanatory code, including:

- **Linting tools:** `ESLint`, `JSLint`, or `JSHint` to help enforce coding standards and best practices for writing clear and concise code.
- **Code profiling tools:** the `Chrome DevTools performance tab` or the `JavaScript profiler` in Node.js to identify performance bottlenecks in your code, which can make it easier to understand how your code is functioning.
- **Documentation generators:** `JSDoc` or `Doxygen` to automate the generation of code documentation and help identify redundant code.

By using these tools, you can write code that is easy to understand, maintain, and debug, making it easier for others (or future you) to pick up and work with your code.

## Clean Code Examples

### Examples 1:

- Descriptive naming conventions

#### Bad Code

```JS
var x = 5;
var y = 10;

function add(a, b) {
    return a + b;
}

```

In this example, the variables `x` and `y` have unclear names and the function `add` does not accurately describe what it does. This makes the code difficult to understand and maintain.

#### Clean Code

```JS
var numberOfUsers = 5;
var maxUsers = 10;

function calculateSum(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

```

In this example, the variables `numberOfUsers` and `maxUsers` have descriptive names and the function `calculateSum` accurately describes what it does. This makes the code easier to understand and maintain.

### Examples 2:

- Comments or documentation

#### Bad Code

```JS
function complexCalculation(a, b, c) {
    var x = a * b;
    var y = x / c;
    return y + c;
}

```

In this example, the function `complexCalculation` does not have any comments or documentation, making it difficult to understand what it does and how it works.

#### Clean Code

```JS
/**
 * Calculates the average of three numbers.
 * @param {number} firstNumber
 * @param {number} secondNumber
 * @param {number} thirdNumber
 * @return {number}
 */
function calculateAverage(firstNumber, secondNumber, thirdNumber) {
    var sum = firstNumber + secondNumber + thirdNumber;
    return sum / 3;
}

```

In this example, the function `calculateAverage` has comments and documentation, making it clear what it does and how it works.


---

#CleanCode #SelfExplanatoryCode #CodeDocumentation #CodeReadability #CodeMaintenance #CodeModification #CodeOrganization #SOLIDPrinciples #CodeLinting #VersionControl #AutomatedTests #CodeIndentation #CodeOrganization

---

[<< Previous](../day-03-avoiding-redundancy/README.md) **\_\_\_**
[Next >>](../day-05-refactoring-and-organizing-code-for-better-structure/README.md)
