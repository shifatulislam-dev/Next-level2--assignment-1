// Problem 1
const filterEvenNumbers = (numbers: number[]): number[] => {
  const evenNumbers = numbers.filter((number) => number % 2 === 0);
  return evenNumbers;
};

// Problem 2
const reverseString = (value: string): string => {
  const reversedValue = value.split("").reverse().join("");
  return reversedValue;
};

// Problem 3
type StringOrNumber = string | number;

const checkType = (value: StringOrNumber): "String" | "Number" => {
  const typeCheckingResult = typeof value === "string" ? "String" : "Number";
  return typeCheckingResult;
};

// Problem 4
const getProperty = <T extends object, K extends keyof T>(
  object: T,
  key: K
): T[K] => {
  const propertyResult = object[key];
  return propertyResult;
};

// Problem 5
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const toggleReadStatus = (book: Book): Book & { isRead: boolean } => {
  const updatedBook = {
    ...book,
    isRead: true,
  };

  return updatedBook;
};

// Problem 6
class Person {
  public name: string;
  public age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  public grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    const studentDetails = `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    return studentDetails;
  }
}

// Problem 7
const getIntersection = (firstArray: number[], secondArray: number[]): number[] => {
  const interSection: number[] = [];

  firstArray.map((number) => {
    if (secondArray.includes(number)) {
      interSection.push(number);
    } else if (!secondArray.includes(number)) {
      return;
    }
  });

  return interSection;
};

