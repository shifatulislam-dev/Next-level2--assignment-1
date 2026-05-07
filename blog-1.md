## Introduction

Generics in TypeScript allow you to write flexible and reusable code while maintaining strong type safety.

## What are Generics?

Generics allow you to create components that work with any data type.


function identity<T>(value: T): T {
  return value;
}

identity<string>("Hello");
identity<number>(123);


* T is a type placeholder
* It adapts based on input

## Without Generics (Problem)
function identity(value: any): any {
  return value;
}

* No type safety
* Loses type information

## With Generics (Solution)
function identity<T>(value: T): T {
  return value;
}

* Keeps type
* Ensures consistency

## Generics with Arrays
function getFirst<T>(arr: T[]): T {
  return arr[0];
}

getFirst<number>([1, 2, 3]);
getFirst<string>(["a", "b"]);

## Generics with Interfaces
interface ApiResponse<T> {
  data: T;
  success: boolean;
}

const response: ApiResponse<string> = {
  data: "Hello",
  success: true,
};

## Why Generics are Powerful

* Reusable code
* Type safety maintained
* Works with any data structure

## Conclusion

Generics help you:

* Write flexible functions
* Maintain strict typing
* Avoid using any

Use Generics when building reusable and scalable TypeScript code.
