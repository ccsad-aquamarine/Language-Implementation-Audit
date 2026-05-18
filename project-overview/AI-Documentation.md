# AI Usage Documentation
## Language Implementation Audit — Cliftunes
## Tool Used: Claude (Anthropic) — claude.ai

---

## Overview
Claude was used as an assistant throughout this project
to help with syntax, code structure, and environment
setup. All generated code examples were manually reviewed,
tested by running each .ts file individually using
ts-node, and verified to produce correct output before
being accepted into the final submission. The notebook
was manually compiled, Claude served as a syntax and
concept reference, not an autonomous generator. All
analyses, reflections, and conclusions are the author's
own words and decisions.

---

## Prompts and Outputs

---

### 1. Environment Setup
**Prompt:** Asked how to run TypeScript in Jupyter on
VSCode using tslab and ran into multiple errors including
missing kernels, PATH issues, and jupyter not being
recognized as a command.

**Assistance:** Claude walked through installing tslab
globally via npm, registering the tslab kernel using
tslab install, fixing PATH environment variables,
force reinstalling Jupyter, and verifying the tslab
kernel was available. All steps were executed and
verified by the author before proceeding.

---

### 2. Section 2.1 — Data Types (A)
**Prompt:** Asked for help with TypeScript syntax for
data type examples including primitives, string, nullable
union types, type inference, arrays, tuples, boolean,
and any/unknown.

**Assistance:** Claude provided syntax references and
code structure for each data type. All examples were
reviewed and tested by the author. The analysis
explaining TypeScript's type system was written based
on the author's understanding after reviewing the code.

---

### 3. Section 2.1 — Expressions and Assignment (B)
**Prompt:** Asked for syntax help on arithmetic,
compound assignment, comparison operators including
=== vs ==, boolean logic, ternary, and nullish
coalescing in TypeScript.

**Assistance:** Claude provided syntax references for
each operator type. The author reviewed and tested each
example and verified the output before accepting them
into the notebook.

---

### 4. Section 2.1 — Control Structures (C)
**Prompt:** Asked for syntax help on if/else, switch,
for, for...of, while, do/while, and break/continue
in TypeScript.

**Assistance:** Claude provided syntax references for
each control structure. All examples were run and
verified by the author before being added to the notebook.

---

### 5. Section 2.1 — Subprograms (D)
**Prompt:** Asked for syntax help on typed functions,
default parameters, recursion, rest parameters, arrow
functions, closures, and named parameters via
destructuring.

**Assistance:** Claude provided syntax references and
explained the differences between TypeScript functions
and C# methods. The author reviewed all examples,
tested them individually, and verified the output
before accepting them.

---

### 6. Section 2.1 — Encapsulation (E)
**Prompt:** Asked for syntax help on non-OOP
encapsulation using TypeScript namespaces and
export keyword.

**Assistance:** Claude provided syntax references
for namespace structure and export visibility control.
The author applied all examples, tested them, and
verified output before accepting them.

---

### 7. Section 2.1 — OOP (F)
**Prompt:** Asked for syntax help on inheritance,
polymorphism, abstract classes, interfaces, access
modifiers, and method overloading in TypeScript.

**Assistance:** Claude provided syntax references
for each OOP concept highlighting differences from
C# such as no virtual/override keywords needed and
compile time only private enforcement. All examples
were reviewed and tested by the author.

---

### 8. Section 2.1 — Concurrency (G)
**Prompt:** Asked for syntax help on async/await,
Promise, Promise.all, async error handling, parallel
execution, and async return values in TypeScript.

**Assistance:** Claude provided syntax references
for each concurrency pattern and explained the
difference between TypeScript's single threaded
event loop and C#'s true multi-threading. All
examples were reviewed and tested by the author.

---

### 9. Section 2.1 — Exception and Event Handling (H)
**Prompt:** Asked for syntax help on try/catch/finally,
instanceof error type checking, throw, custom
exceptions, event handling via callback arrays,
and error propagation.

**Assistance:** Claude provided syntax references
and explained why TypeScript uses instanceof checks
instead of multiple catch blocks. The author reviewed
all examples, tested them, and verified output before
accepting them.

---

### 10. Section 2.2 — Performance and Memory Analysis
**Prompt:** Asked for syntax help on measuring
execution time using performance.now() and memory
using process.memoryUsage() to compare string
concatenation vs array join in TypeScript.

**Assistance:** Claude provided syntax references
for performance.now() and process.memoryUsage().
The author ran both implementations, recorded the
actual performance numbers, and wrote the analysis
and conclusion based on the observed results.

---

### 11. Section 3 — Comparative Analysis
**Prompt:** Asked for help structuring the comparison
table between TypeScript and PHP across all 8 concepts.

**Assistance:** Claude helped structure the table
format and provided reference points for comparison.
The author reviewed all entries, verified accuracy,
and adjusted conclusions based on personal
understanding of both languages.

---

### 12. Section 4 — Code Smell and Refactoring
**Prompt:** Asked for syntax help identifying a
code smell in TypeScript and writing the refactored
version using the same concept as the C# version
but in TypeScript.

**Assistance:** Claude suggested string concatenation
in a loop as the code smell and provided syntax for
the array join refactor as the TypeScript equivalent
of StringBuilder. The author ran both files separately
and verified the performance output before accepting.

---

## Summary

| Section | AI Assisted | Reviewed by Author | Tested |
| :--- | :--- | :--- | :--- |
| Environment Setup | Yes | Yes | Yes |
| 2.1 Data Types | Syntax only | Yes | Yes |
| 2.1 Expressions | Syntax only | Yes | Yes |
| 2.1 Control Structures | Syntax only | Yes | Yes |
| 2.1 Subprograms | Syntax only | Yes | Yes |
| 2.1 Encapsulation | Syntax only | Yes | Yes |
| 2.1 OOP | Syntax only | Yes | Yes |
| 2.1 Concurrency | Syntax only | Yes | Yes |
| 2.1 Exception Handling | Syntax only | Yes | Yes |
| 2.2 Performance Analysis | Syntax only | Yes | Yes |
| 3. Comparative Analysis | Structure only | Yes | Reviewed |
| 4. Code Smell | Syntax only | Yes | Yes |
| 5. Reflection | None | N/A | N/A |

---

## Disclaimer
Claude was used strictly as a syntax and concept
reference, similar to how a developer would use
documentation or Stack Overflow. All code was
manually tested using ts-node before being
accepted. All analyses, reflections, and
conclusions are entirely the author's own. The
notebook was manually compiled by the author
and not auto-generated.