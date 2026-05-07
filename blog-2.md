## Introduction

As TypeScript projects grow larger, managing logic becomes difficult. Object-Oriented Programming (OOP) helps solve this problem. The four pillars—Inheritance, Polymorphism, Abstraction, and Encapsulation—make code more structured, reusable, and easy to maintain.

## Encapsulation (Data Protection)

Encapsulation means hiding internal data and controlling how it is accessed.

```ts
class BankAccount {
  private balance: number = 0;

  deposit(amount: number) {
    if (amount > 0) {
      this.balance += amount;
    }
  }

  getBalance() {
    return this.balance;
  }
}
```

* Protects data from direct access
* Reduces unexpected bugs
* Improves control over logic

## Abstraction (Hide Complexity)

Abstraction means exposing only necessary parts and hiding complex implementation.

```ts
abstract class Payment {
  abstract pay(amount: number): void;
}

class CreditCardPayment extends Payment {
  pay(amount: number) {
    console.log(`Paid ${amount} using Credit Card`);
  }
}
```

* Focus on what to do, not how
* Reduces complexity
* Makes code easier to understand

## Inheritance (Code Reuse)

Inheritance allows a class to reuse properties and methods from another class.

```ts
class Animal {
  speak() {
    console.log("Animal makes a sound");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Dog barks");
  }
}
```

* Avoids code duplication
* Promotes reuse
* Makes extending features easier

## Polymorphism (Multiple Behavior)

Polymorphism allows the same method to behave differently based on the object.

```ts
class Shape {
  draw() {
    console.log("Drawing shape");
  }
}

class Circle extends Shape {
  draw() {
    console.log("Drawing circle");
  }
}

class Square extends Shape {
  draw() {
    console.log("Drawing square");
  }
}
```

* Increases flexibility
* Makes systems scalable
* Easy to add new behavior

## How They Work Together

* Encapsulation protects data
* Abstraction hides complexity
* Inheritance reduces repetition
* Polymorphism adds flexibility

Together, they:

* Simplify large codebases
* Improve readability
* Reduce bugs
* Help teams manage logic easily

## Conclusion

The four pillars of OOP help manage complexity in large TypeScript projects by making code clean, reusable, and scalable.