function combineArraysWithTypeAssertion<T>(arr1: T[], arr2: T[]): T[] {
  return [...arr1, ...arr2];
}

const arr1 = [1, 2, 3];
const arr2 = ["a", "b", "c"];

//This would result in an error, because of type mismatch
// const combined = combineArraysWithTypeAssertion(arr1, arr2);

function combineArraysWithUnion<T extends string | number>(arr1: T[], arr2: T[]): T[] {
  return [...arr1, ...arr2];
}

const combined = combineArraysWithUnion(arr1, arr2); // No error if elements are all strings or numbers
const combined2 = combineArraysWithUnion([1, 2, "a"], [3, "b", "c"]);

function combineArraysAnyType(arr1: any[], arr2: any[]): any[]{
  return [...arr1, ...arr2];
}

const combined3 = combineArraysAnyType(arr1, arr2); //This will compile, but without type safety