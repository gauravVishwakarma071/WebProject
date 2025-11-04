// In JavaScript, an execution context is an abstract concept representing the environment in which a specific piece of JavaScript code is executed. It essentially defines the environment where the current code is running, including access to variables, functions, and the value of this.

// There are three main types of execution contexts: 

// Global Execution Context (GEC): This is the default execution context created by the JavaScript engine when a script file is loaded. All code that is not inside of a function gets executed within the GEC. There can only be one GEC for each JavaScript file.

// Function Execution Context (FEC): A new FEC is created every time a function is invoked. This context contains all the information specific to that function's execution, including its arguments, local variables, and the this binding within that function.

// Eval Execution Context: This is a special type of execution context created when code is executed inside an eval() function.

// Each execution context goes through two distinct phases:

// Creation Phase: In this phase, the JavaScript engine scans the code within the context and sets up its environment. This involves:

// Variable Environment: Memory is allocated for variable and function declarations. var variables are initialized to undefined, while let and const variables are marked as "uninitialized." Function declarations are stored in their entirety.

// Lexical Environment: This defines how variables and functions are resolved within the current scope and its parent scopes (the scope chain).

// this Binding: The value of the this keyword is determined and bound within the context.

// Execution Phase: After the creation phase, the JavaScript engine executes the code line by line within the context, assigning values to variables, and performing operations.