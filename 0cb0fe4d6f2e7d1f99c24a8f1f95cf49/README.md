# Clean Code: Refactoring and Organizing code for Better Structure



## Refactoring and Organizing code for Better Structure: Techniques for Improving Existing Code

> Don't reinvent the wheel, refactor it! Enhance the structure of your existing code with tips for successful refactoring.

Refactoring is a technique for enhancing the design of existing code without altering its functionality. The goal is to make code more maintainable, readable, and scalable by restructuring it. Some common methods include breaking down large functions into smaller, reusable parts, using design patterns to simplify complex logic, and removing duplicated code. Regular refactoring helps keep code organized and prevents code rot, making it easier to add new features and fix bugs.

### Benefits of refactoring:

- Improved code readability, making it easier for others to understand and maintain.
- More efficient code that is less prone to bugs and easier to maintain over time.
- Better organization, making it easier to locate and fix issues.

### Refactoring and code organization tips:

- **Refactor complex code:** Break down complex or hard-to-understand code into smaller, manageable pieces.
- **Create classes:** Group related data and behavior with new classes for better organization.
- **Simplify conditionals:** Enhance understandability with simpler conditional statements.
- **Use interfaces:** Ensure consistency with contracts for related classes defined by interfaces.
- **Clear iteration:** Enhance understandability with simple, clear looping and iteration constructs.
- **Remove unused code:** Reduce complexity and improve maintainability by removing unused code.
- **Identify code smells:** Address common issues such as long functions, duplicated code, or complex control flow by identifying code smells.
- **Use refactoring tools:** Make code changes in many IDEs with automated refactoring tools.
- **Refactor duplicated code:** Eliminate duplicate code by extracting common functionality into functions or classes.
- **Use code linting:** Enforce coding standards and identify issues with a code linting tool.
- **Track changes with version control:** Use version control to track changes and revert to previous versions if necessary.
- **Document code:** Enhance code understandability with meaningful comments and documentation.
- **Optimize performance:** Improve code performance by profiling and optimizing critical parts.

By embracing these best practices, you can improve the structure and organization of your code, leading to enhanced readability, maintainability, and efficiency while reducing maintenance and bug-fixing costs.

# Tools

There are several tools that can assist with refactoring and organizing code for better structure, including:

- **Code editor plugins with refactoring tools:** options like `"Refactor"` or `"Organize"` found in popular code editors like Visual Studio Code or IntelliJ.
- **Source control systems:** `Git` for tracking changes to your code and collaborating with others.
- **Linting tools:** such as `ESLint`, `JSLint`, or `JSHint` to enforce coding standards and detect potential errors.
- **Code formatting tools:** `Prettier` for automating code formatting to ensure consistency and readability.

By using these tools, you can improve the structure and maintainability of your existing code, and ensure that it is up-to-date and follows best practices.

## Clean Code Examples

### Examples 1:

- Large Functions

#### Bad Code

```JS
function calculateTotal(items) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].price * items[i].quantity;
  }
  if (total > 100) {
    total = total * 0.9;
  }
  return total;
}

```

This function is a classic example of a large function that performs multiple tasks, such as calculating the total and applying a discount. This makes it difficult to maintain and test.

#### Clean Code

```JS
function calculateSubtotal(item) {
  return item.price * item.quantity;
}

function applyDiscount(total) {
  return total > 100 ? total * 0.9 : total;
}

function calculateTotal(items) {
  return applyDiscount(
    items.reduce((total, item) => total + calculateSubtotal(item), 0)
  );
}
```

This code has been refactored into smaller, more manageable functions. Each function performs a specific task, making it easier to maintain and test.

### Examples 2:

- Duplicate Code

#### Bad Code

```JS
function sendNotification(message, type) {
  if (type === "email") {
    console.log(`Sending email: ${message}`);
  } else if (type === "sms") {
    console.log(`Sending sms: ${message}`);
  } else {
    console.log(`Invalid notification type`);
  }
}

function sendNotification(message, type) {
  if (type === "email") {
    console.log(`Sending email: ${message}`);
  } else if (type === "sms") {
    console.log(`Sending sms: ${message}`);
  } else {
    console.log(`Invalid notification type`);
  }
}

```

This code contains duplicate functions, which is an example of bad code. Duplicate code makes it difficult to maintain, as changes must be made in multiple places, and increases the risk of bugs.

#### Clean Code

```JS
function sendNotification(message, type) {
  switch (type) {
    case "email":
      console.log(`Sending email: ${message}`);
      break;
    case "sms":
      console.log(`Sending sms: ${message}`);
      break;
    default:
      console.log(`Invalid notification type`);
      break;
  }
}

```

This code has been refactored to eliminate duplicate code, making it easier to maintain and less prone to bugs.

### Examples 3:

- Lack of Documentation

#### Bad Code

```JS
function sum(a, b) {
  return a + b;
}

```

This code does not contain any documentation, making it difficult for others to understand its purpose and behavior.

#### Clean Code

```JS
/**
 * Calculates the sum of two numbers
 *
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @returns {number} The sum of the
```

## What is Code Smell

Code smell is a term used to describe certain characteristics of code that may indicate deeper problems. It's not a precise technical term, but rather a way to describe patterns or characteristics in code that are indicative of underlying problems, such as poor design, lack of maintainability, or the need for refactoring.

Code smells can take many different forms, but some common examples include:

- **Duplicate code**: Code that is duplicated multiple times within the same program, or even across multiple programs.
- **Long methods**: Methods that are excessively long and complex, and may be difficult to understand or maintain.
- **Large classes**: Classes that are overly large and contain a lot of code, which can make them difficult to understand and maintain.
- **Spaghetti code**: Code that is poorly organized and structured, making it difficult to understand or maintain.
- **Lack of modularity**: Code that is not modular, meaning it is not organized into smaller, independent units that can be easily reused and tested.

**Code smells are not necessarily errors or bugs**, but they can indicate deeper problems with the design or structure of the code, and may indicate the need for refactoring or redesigning the code. Identifying and addressing code smells can help improve the quality, maintainability, and overall health of a codebase.

### Example of Code Smell

Here is an example of code smell in the form of a large, monolithic function in JavaScript:

```JavaScript
function processOrder(order) {
  // check that all required fields are present
  if (!order.customerName) {
    return 'error: customer name is required';
  }
  if (!order.productId) {
    return 'error: product id is required';
  }
  if (!order.quantity) {
    return 'error: quantity is required';
  }
  if (!order.shippingAddress) {
    return 'error: shipping address is required';
  }
  // retrieve product details
  const product = getProduct(order.productId);
  if (!product) {
    return 'error: invalid product id';
  }
  if (order.quantity > product.quantityAvailable) {
    return 'error: not enough product in stock';
  }
  // calculate total cost
  const totalCost = order.quantity * product.price;
  // create shipping label
  const shippingLabel = createShippingLabel(order.customerName, order.shippingAddress);
  // update product quantity
  updateProductQuantity(order.productId, -order.quantity);
  // send confirmation email
  sendConfirmationEmail(order.customerName, product.name, totalCost, shippingLabel);
  return 'order processed successfully';
}

```

This function is responsible for processing an order and is excessively long, making it difficult to understand and maintain. It also contains a number of different responsibilities, such as checking that required fields are present, retrieving product details, calculating the total cost, creating a shipping label, updating product quantity, and sending a confirmation email. These responsibilities could be separated into different functions, which would make the code easier to understand and maintain.

## What is Design Smell

Design smell is a term used to describe certain characteristics of a software design that may indicate deeper problems. It is similar to code smell, but refers specifically to problems with the overall design or architecture of a software system, rather than specific patterns or characteristics of the code itself.

Design smells can take many different forms, but some common examples include:

- **Tight coupling**: This refers to a design in which different components of the system are closely connected and dependent on one another, making it difficult to change or modify any one component without affecting the others.
- **Poor encapsulation**: This refers to a design in which the internal details of a component are exposed to the rest of the system, making it difficult to modify or maintain the component without affecting the rest of the system.
- **Lack of modularity**: This refers to a design in which the system is not divided into smaller, independent modules or components that can be easily reused and tested.
- **Lack of separation of concerns**: This refers to a design in which different concerns or responsibilities are not properly separated, making it difficult to understand and maintain the system.

Design smells can indicate deeper problems with the design or architecture of a software system, and addressing them can help improve the quality, maintainability, and overall health of the system.

### Example of Design Smell

Here is an example of design smell in the form of tight coupling in a JavaScript application:

```JavaScript
class OrderProcessor {
  constructor(database) {
    this.database = database;
  }

  processOrder(order) {
    // check that all required fields are present
    if (!order.customerName) {
      return 'error: customer name is required';
    }
    if (!order.productId) {
      return 'error: product id is required';
    }
    if (!order.quantity) {
      return 'error: quantity is required';
    }
    if (!order.shippingAddress) {
      return 'error: shipping address is required';
    }
    // retrieve product details
    const product = this.database.getProduct(order.productId);
    if (!product) {
      return 'error: invalid product id';
    }
    if (order.quantity > product.quantityAvailable) {
      return 'error: not enough product in stock';
    }
    // calculate total cost
    const totalCost = order.quantity * product.price;
    // create shipping label
    const shippingLabel = this.createShippingLabel(order.customerName, order.shippingAddress);
    // update product quantity
    this.database.updateProductQuantity(order.productId, -order.quantity);
    // send confirmation email
    this.sendConfirmationEmail(order.customerName, product.name, totalCost, shippingLabel);
    return 'order processed successfully';
  }
}

class Database {
  constructor() {
    this.products = [];
  }

  getProduct(id) {
    return this.products.find(product => product.id === id);
  }

  updateProductQuantity(id, quantity) {
    const product = this.getProduct(id);
    product.quantityAvailable += quantity;
  }
}

const database = new Database();
const orderProcessor = new OrderProcessor(database);

```

In this example, the `OrderProcessor` class is tightly coupled to the `Database` class, as it depends on an instance of `Database` being passed to it in its constructor and makes direct calls to its methods. This means that if the implementation of `Database` changes, it could break the `OrderProcessor` class, and it would be difficult to test or reuse the `OrderProcessor` class without also including the `Database` class. To address this design smell, the `OrderProcessor` class could be refactored to use a database interface, which would allow it to be more flexible and easier to test and reuse.


---

#CleanCode #Refactoring #CodeStructure #CodeOrganization #CodeMaintenance #CodeEfficiency #CodeReadability #BestPractices #SOLIDPrinciples #DesignPatterns #CodeLinting #VersionControl #AutomatedTests #CodeDocumentation #PerformanceOptimization

---

[<< Previous](../day-04-self-documenting-and-self-explanatpory-code/README.md) **\_\_\_**
[Next >>](../day-06-effective-commenting/README.md)
