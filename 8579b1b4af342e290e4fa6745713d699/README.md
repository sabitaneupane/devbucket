# Daily Tech Dose: Clean Code

[<< Go Back](../../README.md)

## What is Clean Code

Clean code is code that is easy to read, understand, and maintain. It follows a set of best practices and coding standards that make it easy for developers to work with and modify the code.

Here are a few characteristics of clean code:

- **It is easy to read and understand:** Clean code is written in a clear, concise, and consistent style. It uses meaningful names for variables, functions, and other elements, and follows a consistent indentation and formatting style.
- **It is well-organized:** Clean code is organized into logical units, such as functions and modules, that each have a single, well-defined purpose. This makes it easy to understand the overall structure of the code and how the different parts fit together.
- **It is self-explanatory:** Clean code includes clear and concise comments that explain the purpose and intent of the code. These comments should be used sparingly, as the code itself should be easy to understand without them.
- **It follows best practices:** Clean code follows established coding standards and best practices, such as those outlined in the SOLID principles. This makes the code more reliable, maintainable, and scalable.

Overall, clean code is important because it makes it easier for developers to understand, modify, and maintain the code over time. It can also make the development process more efficient, as developers can more quickly understand and work with the code.

## At the low-level, this manifests in a few design choices like:

- Be consistent
- Meaningful names over Comments
- Indentation and Code Style
- Keep methods, classes, files small
- Pure functions
- Minimize cyclomatic complexity
- Avoid passing nulls, booleans
- Keep framework code distant
- Use correct constructs
- Tests should be fast and independent
- Use Meaningful names
- Organize code by the actor it belongs to
- Command Query Seperation
- Keep it simple and refactor often

## Definitive explanation of clean code consists of:

- Your developer mindset (empathy, craftsmanship, growth mindset, design thinking)
- Your coding conventions (naming things, refactoring, testing, etc)
- Your skills & knowledge (of patterns, principles, and how to avoid code smells and anti-patterns)

## What are the reasons that contribute to individuals producing poor quality code?

- Lack of experience or training
- Lack of time or resources
- Lack of attention to detail
- Lack of understanding of the problem being solved
- Lack of knowledge of best practices or industry standards
- Prioritizing other factors such as meeting deadlines or cutting costs over writing high-quality code.
- Lack of motivation or interest in writing good code
- Inexperience in debugging, testing and maintenance
- Not following the coding conventions and standards.
- Lack of feedback or review of the code by others.

## Resources

### "Art of Clean Code" Book:

- Book: https://www.amazon.ca/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882

The "Art of Clean Code" is a book written by `Robert C. Martin` (also known as `"Uncle Bob"`), in which he discusses the principles and practices for writing clean, maintainable, and readable code. Here are a few key ideas from the book:

- **The importance of writing code that is easy to read and understand**: Clean code is easy to read and understand, which makes it easier to maintain and modify. It is also easier for new team members to learn and start contributing to a project when the codebase is clean.

- **The use of simple design principles**: Martin suggests using simple design principles, such as the Single Responsibility Principle and the SOLID principles, to write code that is easy to understand and maintain.

- **The importance of testing**: Martin emphasizes the importance of writing automated tests to ensure that code is correct and maintainable. He also advocates for writing tests that are easy to read and understand, just like the code itself.

- **The importance of refactoring**: Martin discusses the importance of regularly refactoring code to improve its design and maintainability. This includes regularly reviewing and updating code to ensure that it is easy to read and understand, and making changes as needed to keep it that way.

Overall, **"The Art of Clean Code"** provides a set of guidelines and best practices for writing code that is easy to read, understand, and maintain, which can help improve the quality and reliability of software projects.

#### Few Important Definition from Book:

- _"I like my code to be `elegant` and `efficient`. The logic should be straightforward to make it hard for bugs to hide, the dependencies minimal to ease maintenance, error handling complete according to an articulated strategy, and performance close to optimal so as not to tempt people to make the code messy with unprincipled optimizations. Clean code does one thing well."_ **- Bjarne Stroustrup, inventor of C++ and author of The C++ Programming Language**

- _Clean code is simple and direct. Clean code `reads like well-written` prose. Clean code never obscures the designer’s intent but rather is full of crisp abstractions and straightforward lines of control._ **- Grady Booch, author of Object Oriented Analysis and Design with Applications**

- _Clean code can be `read`, and enhanced by a developer other than its original author. It has unit and acceptance `tests`. It has meaningful names. It provides one way rather than many ways for doing one thing. It has `minimal` dependencies, which are explicitly defined, and provides a clear and `minimal` API. Code should be `literate` since depending on the language, not all necessary information can be expressed clearly in code alone._ **- “Big” Dave Thomas, founder of OTI, godfather of the Eclipse strategy**

- _I could list all of the qualities that I notice in clean code, but there is one overarching quality that leads to all of them. Clean code always looks like it was written by someone who `cares`. There is nothing obvious that you can do to make it better. All of those things were thought about by the code’s author, and if you try to imagine improvements, you’re led back to where you are, sitting in appreciation of the code someone left for you—code left by someone who cares deeply about the craft._ **- Michael Feathers, author of Working Effectively with Legacy Code**

## Other Resources

- [Introduction to Clean Code & Software Design Principles](https://workat.tech/machine-coding/tutorial/introduction-clean-code-software-design-principles-nwu4qqc63e09)
- [10 Tips for Writing Clean Code](https://www.pluralsight.com/blog/software-development/10-steps-to-clean-code)


## Daily Topics to Lean

- [Day 1: Benefits of Clean Code: Understanding the Advantages of Organized and Readable Code](./day-01-benefits-of-clean-code/README.md)
- [Day 2: Naming Variables and Functions: Best Practices for Improved Understandability](./day-02-naming-variables-and-funcations/README.md)
- [Day 3: Avoiding Redundancy: The Significance of Keeping Your Code DRY](./day-03-avoiding-redundancy/README.md)
- [Day 4: Self-Documenting and Self-Explanatory Code: Writing Code that Tells Its Own Story](./day-04-self-documenting-and-self-explanatpory-code/README.md)
- [Day 5: Refactoring and Organizing Code for Better Structure: Techniques for Improving Existing Code](./day-05-refactoring-and-organizing-code-for-better-structure/README.md)
- [Day 6: Effective Commenting: Enhancing Code Readability with Comments](./day-06-effective-commenting/README.md)
- [Day 7: Testing and Debugging: Best Approaches for Error-Free and Reliable Code](./day-07-testing-and-debugging/README.md)
- [Day 8: Code Formatting and Layout: Best Practices for Consistent and Clear Code](./day-08-code-formatting-and-layout/README.md)
- [Day 9: Reusable Code: Writing Code that Can be Easily Used Again](./day-09-reusable-code/README.md)
- [Day 10: Exception Handling: Proper Techniques for Dealing with Code Errors](./day-10-exception-handling/README.md)
- [Day 11: Code Optimization: Making Code Faster & More Efficient](./day-11-code-optimization/README.md)
- [Day 12: Code Review and Feedback: Receiving and Incorporating Feedback on Your Code](./day-12-code-review-and-feedback/README.md)
- [Day 13: Code Documentation: Accessible and Comprehensive Documentation](./day-13-code-documentation/README.md)
- [Day 14: Clean Code in Practice: Hands-On Approach to Clean Code Principles & Techniques](./day-14-clean-code-in-practice/README.md)
- [Day 15: Code Maintenance: Keeping Code Up-to-Date & Maintainable](./day-15-code-maintenance/README.md)
- [Day 16: Code Testing: Best Practices for Quality Assurance](./day-16-code-testing/README.md)
- [Day 17: Collaboration and Pair Programming: Writing Clean Code with Others](./day-17-collaboration-and-pair-programming/README.md)
- [Day 18: Code Quality Tools: Improving Code Readability & Quality with Tools](./day-18-code-quality-tools/README.md)
- [Day 19: Version Control: Managing Code with Version Control Systems](./day-19-version-control/README.md)
- [Day 20: Code Efficiency: Strategies for Optimal Code Performance & Speed](./day-20-code-efficiency/README.md)
- [Day 21: Code Security and Safety: Best Practices for Secure Code](./day-21-code-security-and-safety/README.md)
- [Day 22: Reusing and Modularizing Code: Advantages and Best Practices](./day-22-reusing-and-modularizing-code/README.md)
- [Day 23: Optimizing Code Efficiency: Strategies for Fast & Efficient Code](./day-23-optimizing-code-efficiency/README.md)
- [Day 24: Securing Code: Keeping Code Safe & Secure](./day-24-securing-code/README.md)
- [Day 25: Team Development: Benefits of Collaboration in Code Development](./day-25-team-development/README.md)
- [Day 26: Code Management: Best Practices for Managing Code](./day-26-code-management/README.md)
- [Day 27: Code Scalability: Techniques for Writing Scalable Code](./day-27-code-scalability/README.md)
- [Day 28: Code Integration: Strategies for Integrating Code into Applications](./day-28-code-integration/README.md)
- [Day 29: Design Patterns: Understanding & Implementing Design Patterns in Code](./day-29-design-patterns/README.md)
- [Day 30: Code Architecture: Best Practices for Designing Code Architecture](./day-30-code-architecture/README.md)

---
[<< Go Back](../../README.md)
