# Clean Code: Avoiding Redundancy



## Avoiding Redundancy: The Significance of Keeping Your Code DRY.

> Duplicate code is a waste of time and resources. Embrace the power of DRY (Don't Repeat Yourself) to improve code quality and efficiency.

Adhering to the DRY principle helps minimize redundant code and promotes the creation of clean and efficient code. Duplicate code can lead to difficulties in maintenance and increase the risk of bugs. To ensure code remains maintainable and efficient, it is important to follow DRY principles, such as SOLID and KISS, and write modular code that can be easily reused.

### Advantages of DRY code:

- Maintaining code becomes easier and faster, reducing the need for repetitive updates and bug fixes.
- DRY code is clearer and more readable, without unnecessary duplicated information.
- DRY code also runs more efficiently, reducing unnecessary computation.
- By avoiding duplicate code, the risk of bugs is reduced, leading to improved code quality.

## Tips and technique:

- **Follow the DRY (Don't Repeat Yourself) principle:** Eliminate duplicated code by extracting common functionality into separate functions or classes.
- **Use functions or classes to encapsulate related behavior:** Group related functionality into functions or classes for improved organization and maintenance.
- **Identify and eliminate duplicate code:** Regularly scan the code for duplicates and eliminate them to increase efficiency and maintainability.
- **Make use of libraries and frameworks:** Reuse code from libraries and frameworks where possible to reduce redundancy.
- **Utilize version control:** Use version control to track changes and revert to previous versions if necessary.
- **Refactor complex code:** Refactor complex or hard-to-understand code into smaller, more manageable pieces.
- **Adhere to design patterns:** Use design patterns to standardize the structure and organization of the code.
- **Implement SOLID principles:** Implement the SOLID principles of object-oriented design to improve the structure and organization of the code.

By adhering to the DRY principle and implementing effective techniques for avoiding redundancy, you can improve the quality, efficiency, and maintainability of your code, while reducing the risk of bugs.

## Tools

There are several tools that can help with avoiding redundancy in code, including:

- **Linting tools:** `ESLint`, `JSLint`, or `JSHint` to detect duplicate or redundant code and suggest improvements.
- **Source control systems:** `Git` that allow you to track changes to your code and detect when similar code changes are made in multiple places.
- **Code editor plugins or extensions that provide features:** such as `"Find all references"` or `"Rename Symbol"` to help you refactor code and avoid redundant code.

By using these tools, you can help keep your code dry and maintainable

## Clean Code Examples

### Example 1:

- Reusing functions:

```JS
function getUserDetails(userId) {
  // code to fetch user details from database
}

function displayUserDetails(userId) {
  const userDetails = getUserDetails(userId);
  // code to display user details on the page
}

```

Instead of duplicating the code to fetch user details in both functions, we can extract the common functionality into a separate function and call it in both places.

### Example 2:

- Extraction of common logic into a base class:

```JS
class Animal {
  move() {
    console.log("Animal is moving");
  }
}

class Dog extends Animal {
  move() {
    console.log("Dog is running");
  }
}

class Cat extends Animal {
  move() {
    console.log("Cat is running");
  }
}

```

Instead of duplicating the code to print the message for each animal, we can extract the common logic into a base class and reuse it in the derived classes.

### Example 3:

- Use of configuration files:

```JS
const databaseConfig = {
  host: "localhost",
  user: "root",
  password: "secret",
  database: "mydb"
};

function connectToDatabase() {
  // code to connect to database using the config
}

function fetchDataFromDatabase() {
  // code to fetch data from database
}

```

Instead of duplicating the database configuration in multiple functions, we can extract it into a separate file or constant and reuse it whenever required.

These are just a few examples of how you can apply the DRY principle to your code. The idea is to eliminate duplicated code and improve the maintainability and efficiency of your code.

### Example 4:

#### Bad Code

```JS
// Duplicate code to calculate the area of a rectangle
function calculateAreaRectangle1(width, height) {
  return width * height;
}

function calculateAreaRectangle2(width, height) {
  return width * height;
}

// Duplicate code to calculate the area of a circle
function calculateAreaCircle1(radius) {
  return Math.PI * radius * radius;
}

function calculateAreaCircle2(radius) {
  return Math.PI * radius * radius;
}

```

#### Clean Code

```JS
// Reusable function to calculate the area of a shape
function calculateArea(shape, ...dimensions) {
  switch(shape) {
    case 'rectangle':
      return dimensions[0] * dimensions[1];
    case 'circle':
      return Math.PI * dimensions[0] * dimensions[0];
    default:
      return 0;
  }
}

// Usage of the reusable function
console.log(calculateArea('rectangle', 10, 20));
console.log(calculateArea('circle', 5));

```

In the bad code example, we have duplicate functions for calculating the area of a rectangle and a circle. This can lead to maintenance difficulties, as changes made to one function might not be reflected in the other. In the clean code example, we have a single reusable function that can calculate the area of any shape, as long as we provide the necessary parameters. This approach reduces redundancy and makes the code easier to maintain.

### Example 5:

#### Bad Code

```JS
function calculateTotal(amount) {
  let tax = amount * 0.1;
  let total = amount + tax;
  return total;
}

function calculateDiscountedTotal(amount) {
  let tax = amount * 0.1;
  let discount = amount * 0.2;
  let total = amount + tax - discount;
  return total;
}

```

#### Clean Code

```JS
function calculateTax(amount) {
  return amount * 0.1;
}

function calculateTotal(amount) {
  let tax = calculateTax(amount);
  return amount + tax;
}

function calculateDiscountedTotal(amount) {
  let tax = calculateTax(amount);
  let discount = amount * 0.2;
  return amount + tax - discount;
}

```

In the first example, the calculation for tax is duplicated in both functions, which violates the DRY principle. In the second example, the calculation for tax has been extracted into a separate function, making the code more maintainable and efficient.

### Example 6:

#### Bad Code

```JS
function displayMessage(message) {
  console.log(message);
  alert(message);
}

function displayErrorMessage(message) {
  console.error(message);
  alert(message);
}

```

#### Clean Code

```JS
function displayMessage(message, type) {
  if (type === 'error') {
    console.error(message);
  } else {
    console.log(message);
  }
  alert(message);
}

displayMessage('This is a message', 'log');
displayMessage('This is an error', 'error');

```

In the first example, the logic for displaying a message is duplicated in both functions. In the second example, the logic has been extracted into a single function, with an additional parameter to specify the type of message. This makes the code more modular, maintainable, and efficient.


---

#CleanCode #DRY #Efficiency #SoftwareDevelopment #CodeQuality #AvoidRedundancy #ModularCode #SOLID #KISS #CodeReuse #LibrariesAndFrameworks #VersionControl #Refactoring #CodeDocumentation #AutomatedTests #ReadableCode #VariableNaming #DesignPatterns #CodeLinting #CodeReadability

---

[<< Previous](../day-02-naming-variables-and-funcations/README.md) **\_\_\_**
[Next >>](../day-04-self-documenting-and-self-explanatpory-code/README.md)
