# JS Code Auditor
A lightweight, terminal-based Static Analysis Tool (Linter) designed to enforce clean code standards and identify structural inefficiencies in JavaScript source files.

## Overview
This tool was built to automate the code review process by identifying "code smells" that affect maintainability and performance. It focuses on logical complexity and modern best practices, providing a structured report of potential issues.

## Key Features
*   **Nesting Depth Analysis:** Detects "Arrow Code" (excessive nesting) using a state-aware logic gate to prevent redundant logging.
*   **Variable Audit:** Flags single-letter variable names (e.g., `x`, `a`) to encourage descriptive naming conventions.
*   **Modernization Check:** Identifies usage of the outdated `var` keyword, suggesting `let` or `const` for better scoping.
*   **Scannable Reporting:** Outputs findings in a clean, tabular format using `console.table()` for immediate developer feedback.

## How to Run

### Prerequisites
*   [Node.js](https://nodejs.org/) (Version 14 or higher recommended)

### Installation
1. Clone the repository:
```bash
   git clone [https://github.com/Fahim1150/js-bug-hunter.git](https://github.com/Fahim1150/js-bug-hunter.git)
```
2. Navigate to the project folder:
```bash   
    cd js-code-auditor
```
Usage
1 Place the JavaScript file you wish to audit in the project directory (e.g., test-code.js).
2 Update the fileName variable in auditor.js or pass it as an argument.
3 Run the auditor:
```bash
   node auditor.js
```
Sample Output
(Index) Line    Issue               Detail                          Severity        
0       12      High Complexity  Nesting exceeded 3 levels.         High
1       24      Modernization   Use 'let/const' instead of 'var'    Medium
2       45      Naming          Single-letter variable              Low

### Technical Implementation
1. State Management: Implemented Boolean flags to handle "warn-once" logic for nested blocks.

2. RegEx Parsing: Utilizes Regular Expressions for precise pattern matching of variable declarations.

3. File Stream API: Uses Node.js fs module for efficient file reading and line-by-line processing.
