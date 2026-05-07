// Problem 1
const filterEvenNumbers = (numbers: number[]): number[] => {
  return numbers.filter((number) => number % 2 === 0);
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

