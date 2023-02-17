# Clean Code: Design Patterns



## Design Patterns: Understanding & Implementing Design Patterns in Code.

> Design patterns for efficient coding. Master the use of design patterns to write better code and improve outcomes.

Design patterns are pre-established solutions to common design problems in software development. By providing a common language and framework, they make it easier to write scalable and maintainable code. Some of the most commonly used design patterns include the Model-View-Controller (MVC), Factory, and Singleton patterns. Understanding and applying design patterns is a crucial aspect of software development as it leads to more organized, reusable and maintainable code.

### Guidelines for Understanding and Implementing Design Patterns in Code:

- **Study common patterns:** Become familiar with the most frequently used design patterns and their applications.
- **Select appropriate pattern:** Determine the most suitable design pattern for the problem, considering performance, scalability, and maintainability.
- **Opt for simplicity:** Pick the simplest design pattern that meets the requirements.
- **Ensure consistency:** Use patterns consistently throughout the code for uniformity and maintainability.
- **Document the pattern:** Document the design pattern applied, to make it easier for others to comprehend the code.
- **Refactor regularly:** Regularly examine and refactor the code to ensure it follows design patterns and best practices.
- **Avoid over-reliance:** Don't overuse design patterns and keep the code straightforward, as excessive complexity can negatively affect understandability and maintainability.
- **Collaborate with team:** Collaborate with other team members to share knowledge and experiences, ensuring consistency in pattern usage.
- **Use patterns as guidelines:** Treat design patterns as suggestions instead of rigid rules and modify them as needed to better serve the project's specific requirements.

By following these guidelines, you'll effectively understand and apply design patterns in your code, resulting in organized, maintainable, and scalable code.

## Types of Design Patterns

- **Singleton pattern:** This pattern ensures that a class has only one instance and provides a global point of access to it.
- **Factory pattern:** This pattern provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.
- **Observer pattern:** This pattern defines a one-to-many dependency between objects so that when one object changes state, all of its dependents are notified and updated automatically.
- **Decorator pattern:** This pattern dynamically adds/overrides behavior in an existing method of an object.
- **Command pattern:** This pattern encapsulates a request as an object, thereby letting you parameterize clients with different requests, queue or log requests, and support undo-able operations.
- **Facade pattern:** This pattern provides a simplified interface to a complex system of classes, library or framework.

## Examples

### Singleton Pattern

The Singleton pattern is a design pattern used to ensure that a class has only one instance, while providing a single point of access to this instance for all other objects.

```JS
class Singleton {
  static instance;

  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    this.singletonProperty = "This is a singleton property";
  }
}

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log(instance1 === instance2); // Output: true
console.log(instance1.singletonProperty); // Output: "This is a singleton property"

```

In this example, the `Singleton` class has a static property `instance` which holds the single instance of the class. The static method `getInstance()` returns the instance, creating it if it doesn't exist yet. The constructor ensures that only one instance is created by checking if an instance already exists and returning it if it does.

### Factory Pattern

The Factory pattern is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.

```JS
// Superclass
class Shape {
  draw() {}
}

// Subclasses
class Circle extends Shape {
  draw() {
    console.log("Drawing a Circle");
  }
}

class Rectangle extends Shape {
  draw() {
    console.log("Drawing a Rectangle");
  }
}

// Factory
class ShapeFactory {
  static getShape(shapeType) {
    switch (shapeType) {
      case "CIRCLE":
        return new Circle();
      case "RECTANGLE":
        return new Rectangle();
      default:
        return null;
    }
  }
}

// Client
const shape = ShapeFactory.getShape("CIRCLE");
shape.draw(); // Output: Drawing a Circle

```

In this example, the `Shape` class serves as the superclass and `Circle` and `Rectangle` classes serve as the subclasses. The `ShapeFactory` class serves as the factory and has a static method `getShape` that returns an object of the appropriate type based on the input shapeType. The client can then use the factory to create a specific shape object, which can then be used to call the `draw` method.

### Observer Pattern

The Observer pattern is a design pattern in which an object, called the subject, maintains a list of its dependents, called observers, and notifies them automatically of any changes to its state. It allows multiple objects to be notified of changes to the state of a subject, without coupling the observer objects to the subject or to each other.

```JS
class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notify(data) {
    this.observers.forEach(observer => observer.update(data));
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }

  update(data) {
    console.log(`${this.name} received update: ${data}`);
  }
}

const subject = new Subject();
const observer1 = new Observer("Observer 1");
const observer2 = new Observer("Observer 2");

subject.subscribe(observer1);
subject.subscribe(observer2);

subject.notify("Hello World");

subject.unsubscribe(observer1);

subject.notify("Hello Again");

```

n this example, the `Subject` class maintains a list of observers and provides methods for subscribing and unsubscribing observers, and for notifying observers of changes to its state. The `Observer` class is a simple class that defines an `update` method that can be called by the subject to notify the observer of changes.

### Decorator pattern

The Decorator pattern is a structural design pattern that allows adding new behaviors to objects dynamically by placing them inside special wrapper objects.

```JS
class Car {
  drive() {
    return "Driving a car";
  }
}

class SportsCar extends Car {
  drive() {
    return "Driving a sports car";
  }
}

class AutoPilot {
  constructor(car) {
    this.car = car;
  }

  drive() {
    return this.car.drive() + " with autopilot";
  }
}

const myCar = new SportsCar();
const myAutoPilotCar = new AutoPilot(myCar);

console.log(myCar.drive()); // "Driving a sports car"
console.log(myAutoPilotCar.drive()); // "Driving a sports car with autopilot"

```

In this example, the `AutoPilot` class acts as a decorator that adds autopilot functionality to a `Car` object. The `SportsCar` class extends the `Car` class and provides additional functionality. The `AutoPilot` class takes a `Car` object as its argument and returns a new object with the autopilot functionality added to it.

### Command pattern

The Command pattern is a behavioral design pattern that provides a way to encapsulate a request as an object, allowing you to issue requests without knowing the receiver of the request. This can be useful when you want to decouple the sender and receiver of a request, and when you want to queue or log requests.

```JS
class BankAccount {
  constructor(balance) {
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance -= amount;
  }
}

class BankAccountCommand {
  constructor(account, action, amount) {
    this.account = account;
    this.action = action;
    this.amount = amount;
    this.success = null;
  }

  call() {
    switch (this.action) {
      case 'deposit':
        this.account.deposit(this.amount);
        this.success = true;
        break;
      case 'withdraw':
        if (this.account.balance >= this.amount) {
          this.account.withdraw(this.amount);
          this.success = true;
        } else {
          this.success = false;
        }
        break;
      default:
        throw new Error(`Invalid action: ${this.action}`);
    }
  }

  undo() {
    if (!this.success) return;

    switch (this.action) {
      case 'deposit':
        this.account.withdraw(this.amount);
        break;
      case 'withdraw':
        this.account.deposit(this.amount);
        break;
      default:
        throw new Error(`Invalid action: ${this.action}`);
    }
  }
}

const bankAccount = new BankAccount(100);
const depositCommand = new BankAccountCommand(bankAccount, 'deposit', 50);
const withdrawCommand = new BankAccountCommand(bankAccount, 'withdraw', 150);

depositCommand.call();
console.log(bankAccount.balance); // 150

withdrawCommand.call();
console.log(bankAccount.balance); // 150

withdrawCommand.undo();
console.log(bankAccount.balance); // 150

depositCommand.undo();
console.log(bankAccount.balance); // 100

```

In this example, we have a `BankAccount` class that represents a bank account, with deposit and withdraw methods. We then create a `BankAccountCommand` class that encapsulates a request to perform an action (deposit or withdraw) on a `BankAccount`. The `call` method executes the request, and the `undo` method undoes the request.

### Facade pattern

The Facade pattern provides a simplified interface to a complex system. The idea is to create a single class, known as the Facade, which provides a simple interface for accessing the functionality of multiple, complex underlying classes. Here's a simple example in JavaScript:

```JS
class ComplicatedClassA {
  doSomethingA() {
    console.log("Doing something A");
  }
}

class ComplicatedClassB {
  doSomethingB() {
    console.log("Doing something B");
  }
}

class Facade {
  constructor() {
    this.classA = new ComplicatedClassA();
    this.classB = new ComplicatedClassB();
  }

  doSomething() {
    this.classA.doSomethingA();
    this.classB.doSomethingB();
  }
}

const facade = new Facade();
facade.doSomething();

// Output:
// Doing something A
// Doing something B

```

In this example, `Facade` provides a simplified interface to `ComplicatedClassA` and `ComplicatedClassB`. Instead of having to interact with both classes separately, the client can simply use the `Facade` class, which provides a single method `doSomething()` that calls both `doSomethingA()` and `doSomethingB()`.

---

#CleanCode #DesignPatterns #CodeDesign #SoftwareDesign #SoftwareArchitecture #ProgrammingPatterns #CodeBestPractices #ObjectOrientedDesign #SoftwareEngineering #DesignThinking #ProgrammingPrinciples

---

[<< Previous](../day-28-code-integration/README.md) **\_\_\_**
[Next >>](../day-30-code-architecture/README.md)
