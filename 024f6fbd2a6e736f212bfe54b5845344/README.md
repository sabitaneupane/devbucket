# Clean Code: Code Formatting and Layout

[<< Go Back](../README.md)

## Code Formatting and Layout: Best Practices for Consistent and Clear Code

> Code formatting and layout are the unsung heroes of clean code, often overlooked but critical for creating clear and readable code. Learn tips for achieving consistent and clear formatting and layout.

Formatting and layout have a significant impact on the readability and maintainability of code. Good formatting requires consistent indentation, whitespace, naming conventions, and clear variable names. Effective layout involves organizing code into logical sections and using appropriate comments and whitespace to distinguish different parts of the code. Adhering to best practices in formatting and layout results in code that is easier to read, understand, and maintain, leading to better overall code quality.

### Tips and Techniques for Achieving Consistent and Clear Code Formatting and Layout

- **Consistent indentation:** Use a consistent indentation style (e.g. 2 spaces, 4 spaces) throughout your code to indicate the structure and hierarchy of the code.
- **Appropriate whitespace:** Use whitespace to separate different parts of the code and make it easier to read.
- **Naming conventions:** Use meaningful, descriptive names for variables, functions, and classes that follow a consistent naming convention (e.g. CamelCase, snake_case).
- **Clear variable names:** Use clear and descriptive variable names that accurately reflect their purpose and value.
- **Logical grouping:** Organize code into logical groups and sections using blank lines, comments, and whitespace to distinguish different parts of the code.
- **Meaningful comments:** Use comments to explain the purpose and intent of the code, but keep them concise and to the point. Avoid using comments as a substitute for clear and descriptive code.
- **Minimalism:** Keep your code concise and to the point. Avoid unnecessary code, as it can make the code harder to read and maintain.

By following these tips, you can produce code that is clear, readable, and easy to maintain, resulting in better code quality and faster problem resolution.

## Tools

Here are a few tools that can help you with code formatting and layout:

- **Code formatting tools:** `Prettier` or `Clang-Format` can automate the formatting of code to ensure consistency and readability.
- **Code editor plugins or extensions:** Visual Studio Code's `EditorConfig` extension can help you enforce consistent coding styles and practices.
- **Code linting tools:** `ESLint` or `JSLint` can catch issues with code formatting and help enforce coding standards.

These tools can help you maintain a consistent and clear code base, making it easier to read, understand, and maintain.

## Clean Code Examples

### Example 1:

#### Bad Code:

```JS
var name="John Doe";function displayName(){console.log(name)}

```

#### Clean Code:

```JS
var name = "John Doe";

function displayName() {
  console.log(name);
}
```

### Example 2:

#### Bad Code:

```JS
for(var i=0;i<10;i++){console.log(i)}
```

#### Clean Code:

```JS
for (var i = 0; i < 10; i++) {
  console.log(i);
}
```

## Clean Formatting

### Indentation:

- It is important to be consistent when choosing an indentation style for your code, as inconsistency can make your code confusing and difficult to read.
- There are a few decisions to make when determining your indentation style, including whether to use tabs or spaces, and if using spaces, how many spaces to use per indentation level. Most communities use either two or four spaces per indentation level.
- It is also important to configure your text editor to help you stick to your chosen style. When indenting code, it is helpful to think of it in chunks, like paragraphs in prose.
- Nested code should be indented one level deeper than the code that contains it.
- Different languages have different conventions for marking the start and end of nested blocks, such as curly braces or special keywords.
- It is important to be consistent in your use of these markers as well.

### Bracket Placement

- There are various ways that different programming languages specify the beginning and end of nested code blocks.
- Some languages, such as those inspired by C, use curly braces to mark the start and end of these blocks. Others use special keywords, such as "begin" and "end" or "do" and "end". Still other languages only require a keyword to mark the end of a block and allow the start of a block to be inferred.
- Each language community has its own conventions for where to place these markers, and there may be different styles even within a single language.
- It is important to be consistent in your use of these markers, as mixing different styles can make a codebase difficult to read.
- By using a consistent approach, readers can focus on the more important aspects of the code.

```C#
// C#
if (value)
{
    ...
}
else
{
    ...
}

```

```JavaScript
// JavaScript
if (value) {
    ...
} else {
    ...
}

```

### Line Wrapping

- It's important to format your code in a way that is easy to read, as this makes it easier for others to understand and work with.
- One way to do this is to limit the length of lines to a certain number of characters, such as 80.
- This is a common industry standard and can help prevent the need for readers to scroll left to right to view the code.
- When lines are too long, it can be helpful to wrap them by putting each parameter on its own line, and un-indenting the closing parenthesis to give a visual indication that the long method call is finished.
- It's also a good idea to add open and closing braces to if statements to make the code easier to understand.
- By applying these techniques, you can make your code easier to read and understand.

### Whitespace

- Whitespace is the use of blank spaces in code to make it more readable.
- Vertical whitespace refers to empty space between chunks of code, which can help visually indicate that certain pieces of code are related or belong together, similar to how paragraphs are used in written language.
- Horizontal whitespace is used to make code easier to read when reading from left to right, and indentation is a specific form of horizontal whitespace that appears at the start of a line.
- It's also helpful to add horizontal whitespace within a line, such as around boolean operators and after commas, to make the code easier to read.
- By adding both vertical and horizontal whitespace, you can make your code more readable and easier to understand.
- In particular, inserting blank lines after import statements, after each method, before return statements, before logical chunks of code, and around boolean operators and after commas can help improve the readability of your code.

```JavaScript
// Code without enough space
import React from "react";
const AddComponent = () => {
  const sum=(n1,n2) => {
    return n1+n2;
  };
  return (
    <div>
      <h1>Hello World</h1>
      <p>{sum(5,4)}</p>
    </div>
  );
};
export default AddComponent;

```

```JavaScript
// Code with enough space

import React from "react";

const AddComponent = () => {
  const sum = (n1, n2) => {
    return n1 + n2;
  };

  return (
    <div>
      <h1>Hello World</h1>
      <p>{sum(5, 4)}</p>
    </div>
  );
};

export default AddComponent;

```

### Comments

- Comments are sections of text in code that are ignored by the compiler when running a program.
- They are meant to be read by humans and can be a useful tool for explaining the purpose or intent of a program.
- However, not all comments are equally valuable.
- The best comments answer why questions, such as why a program exists or why it is implemented in a certain way.
- On the other hand, comments that merely repeat the code they are attached to provide no value and should be removed.
- If you feel that a comment is necessary to understand some code, it may be better to refactor the code to make it more readable instead of relying on a comment.
- Another type of comment that should be removed is a commented-out line of code, as it can be confusing to readers and can be stored in a source control system like Git.
- By focusing on adding comments that answer why questions and removing unnecessary or redundant comments, you can improve the readability and clarity of your code.

---

#CleanCode #CodeReadability #CodeMaintainability #ProgrammingStandards #CodeOrganization #CodeComments

---

[<< Previous](../day-07-testing-and-debugging/README.md) **\_\_\_**
[Next >>](../day-09-reusable-code/README.md)
