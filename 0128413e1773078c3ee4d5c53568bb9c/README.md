# Clean Code: Naming Variables and Functions



## Naming Variables and Functions: Best Practices for Improved Understandability.

> Make our code speak for itself! Master the art of naming variables and functions for improved understandability and clean code.

Descriptive and meaningful names for variables, functions, and classes are essential to writing clean code. Proper naming helps reduce maintenance and debugging time and makes code easier to read and understand. Accurate reflection of a variable or function's purpose through its name is a crucial aspect of clean coding.

### Best practices for naming variables and functions:

- **Choose descriptive and meaningful names:** Select names that accurately describe the purpose of variables, functions, and classes.
- **Adhere to naming conventions:** Follow a consistent naming convention to make it easier for others to understand our code.
- **Use clear and concise names:** Use short and simple names for variables, functions, and classes for improved readability.
- **Indicate type or scope:** Use prefixes or suffixes to indicate type or scope, e.g. "is*" for booleans and "get*" or "set\_" for accessing values.
- **Avoid abbreviations:** Avoid abbreviations, especially if they are not widely understood, to improve understandability.
- **Be consistent:** Be consistent in our naming style and avoid switching between different styles.
- **Use verb phrases for functions:** Use verb phrases to name functions, indicating the action they perform.
- **Use nouns for variables:** Use nouns to name variables, indicating the data they hold.
- **Use camelCase or snake_case:** Use either camelCase or snake_case to name variables and functions, depending on our naming convention.

By following the best practices for naming variables and functions, we can significantly improve the understandability and readability of our code, leading to better maintenance and fewer bugs.

## Clean Code Examples

### Example 1:

- Here are some guidelines to consider when naming:

#### Bad Code

```JS
// Variables in abbreviated
var cName = "John Doe";
var cAddress = "123 Main St";
var cTotal = 50;

// Functions with not clear meaning and intention
function discount(t) {
  return t * 0.1;
}

function orderDetails(n, a, t) {
  console.log("Cus Name: " + n);
  console.log("Cus Addr: " + a);
  console.log("Ord Tot: $" + t);
  console.log("Disc: $" + discount(t));
}

orderDetails(cN, cA, oT);

```

#### Clean Code

```JS
// Variables in camelCase and avoiding abbreviations
var customerName = "John Doe";
var customerAddress = "123 Main St";
var orderTotal = 50;

// Functions in camelCase and with clear meaning and intention
function calculateDiscount(total) {
  return total * 0.1;
}

function displayOrderDetails(name, address, total) {
  console.log("Customer Name: " + name);
  console.log("Customer Address: " + address);
  console.log("Order Total: $" + total);
  console.log("Discount: $" + calculateDiscount(total));
}

displayOrderDetails(customerName, customerAddress, orderTotal);

```

### Example 2:

- When we execute the code, it displays the number `9` as output. However, understanding why it displays `9` requires some examination. We see that a method called `a()` is called and passed the values `5` and `4`. However, it is not immediately clear from reading this line what the method does with these values. While we could try to make an educated guess based on the output, it is better to dig deeper and view the definition of the method to get a clearer understanding of its purpose.

#### Bad Code

```JavaScript

const a = (b, c) => {
    return b + c
}

console.log(a(5,4))

```

#### Clean Code

```JavaScript

const sum = (num1, num2) => { // changing b to num1 and c to num2
    return num1 + num2
}

console.log(sum(5,4)) // changing a to sum

```

### Example 3:

- It may be tempting to use short and concise names when writing code, as it requires fewer characters to type and the computer can still understand the meaning. However, it's important to remember that the primary audience for our code is human and thus, we should prioritize using clear and descriptive names over concise ones. A common area where overly brief names are used is in code that iterates through an array. To improve the readability and understandability of our code for human readers, it's important to choose clear names over brief ones.

#### Bad Code

```JavaScript
const fruits = [
    "apple",
    "banana",
    "orange"
]

for (let i=0; i<fruits.length; i++){
    const f = fruits[i];
    console.log(f);
}

```

#### Clean Code

```JavaScript

const fruits = [
    "apple",
    "banana",
    "orange"
]

for (let i = 0; i < fruits.length; i++){
    const fruit = fruits[i]; // changing f to fruit
    console.log(fruit);
}

```

### Example 4:

- Here are some guidelines to consider when naming our `classes`:

#### Bad Code

```JavaScript
// Avoid verb forms
class Perform {}
class Performed {}
class Performing {}

// Avoid adjectives
class Huge {}
class Small {}
class Fast {}
class Slow {}

// Avoid Vague prefixes
class MyPerformer {}
class APerformer {}
class ThePerformer {}
class ThisPerformer {}

// Avoid single letter class names
class P {}

// Avoid single letter prefixes
class CPerformer {}
class TPerformer {}

// Avoid all capital acronyms
class HTTPAPIPerformer {}

// Avoid abbrevations
class Perf {}

// Avoid lower case capitalization
class performer {}

// Avoid plural on normal class
class Performers {}

```

#### Clean Code

```JavaScript
// Prefer nouns for class names
class Performer {}
class Performance {}

// Prefer Adjective prefixes to convey time
class ActivePerformance {}
class PastPerformance {}

// Prefer Adjective prefixes to a noun
class SmallPerformance {}
class FastPerformance {}

// Prefer format easier to see boundary between acronyms
class HttpApiPerformer {}

```

### Example 5:

- Here are some rules to follow when naming `functions and methods`:

#### Bad Code

```JavaScript
// Avoid gerunds (ing)
const performing () => {}
const opening () => {}
const closing () => {}
const validating () => {}

// Avoid past tense verb forms
const performed () => {}
const opened () => {}
const closed () => {}
const validated () => {}
```

#### Clean Code

```JavaScript
// Prefer present tense verbs for method names
const perform () => {}
const open () => {}
const close () => {}
const validate () => {}

// Prefer gerunds (ing) with `is`
const isPerforming () => {}
const isOpening () => {}
const isClosing () => {}
const isvalidating () => {}

// Prefer to prefix past tense with `has`
const hasPerformed () => {}
const hasOpened () => {}
const hasCLosed () => {}
const hasValidated () => {}

```

### Example 6:

- Here are some rules to follow when naming `variable` names:
  - When naming variables that store primitive type values or object references, it is best to use singular nouns to indicate that the variable only contains one value.
  - When naming variables that store arrays or other collections, it is best to use plural nouns to indicate that the variable contains multiple values.

#### Bad Code

```JavaScript
// Avoid verbs for variables that store primitive types
const perform = 12;
const create = false;

// Avoid single letter variable name
let t = 12;
let i = 8;

// Avoid using confusing acronyms and abbreviations
const dbsqlSelAllNames = "select * from names";

// Avoid complicated prefixes
const f_strFirstname = "John"

// Avoid using type name as a suffix
const lastNameString = "Doe"
```

#### Clean Code

```JavaScript
// Prefer singular nouns for primitive types
const name = "John"

// Prefer plural nouns for arrays
const names = ["John", "Linda", "Sam"]

// Prefer making nouns for variables that store primitive types
const performanceCode = 12;
const creationEnabled = false;

// Prefer using meaningful words
let testCode = 12;
let index = 8;

// Prefer using seperate acronyms and spell out abbreviations
const dbSqlSelectAllNames = "select * from names";

// Prefer using simple variable names
const firstname = "John"
const lastName = "Doe"
```

---

#CleanCode #CleanCodeBenefits #CodingBestPractices #VariableNaming #FunctionNaming #CodeReadability #CodeMaintainability #NamingConventions #CodingStandards #SoftwareDevelopment #ProgrammingTips #CodingCommunity

---

[<< Previous](../day-01-benefits-of-clean-code/README.md) **\_\_\_**
[Next >>](../day-03-avoiding-redundancy/README.md)
