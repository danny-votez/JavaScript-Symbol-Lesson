// In this lesson, we are going to demostrate some key aspects with the JavaScript Symbol
// First, Symbol is a primitive data type introduced in ES6
// Symbolsa are immutable, which means they cannot be changed
// They are also unique
// Example

// Declaring and explainig two symbols with same description

const item1 = Symbol('Amazing');
const item2 = Symbol('Amazing');
// In this case, despite the items having the same values, the symbols are not the same
// This is shown as below, upon running the === (Strict Equality Comparison Operator in JavaScript)
console.log(item1 === item2);    // It rerturns false as the two items are not strictly equal
                                // Symbols are immutable and unique