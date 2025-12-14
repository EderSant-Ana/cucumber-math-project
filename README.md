# 🥒 Cucumber TypeScript BDD Example: Vegetable Management 🥗

## Overview

This project serves as a minimal example of **Behavior-Driven Development (BDD)** using **Cucumber.js** and **TypeScript**. It implements and tests a simple `VegetablesManager` class responsible for tracking vegetable inventory and the production of salads, including validation for insufficient stock.

## Technologies Used 🛠️

The core of this project is built around the following technologies:

* **TypeScript (TS) 🟦:** Used for writing the step definitions, utility logic, and enforcing strong typing.
* **Cucumber.js 🥒:** The BDD framework used to define and execute the feature files.
* **Node.js / CommonJS 🟢:** The runtime environment, with configuration to handle both TypeScript and CommonJS modules.
* **ts-node:** Allows running TypeScript files directly without a separate compilation step.

## Project Dependencies 📦

The primary dependencies for running and developing the project are listed in `package.json`:

### Production Dependencies
* `@cucumber/cucumber`: The core BDD framework.
* `ts-node`: Used to execute TypeScript files for Cucumber.
* `typescript`: The TypeScript language compiler.

### Development Dependencies
* `@types/node`: TypeScript definitions for the Node.js runtime.

## Project Structure 📁

The project follows a standard BDD layout with separate directories for features, step definitions, and utility code:

| File/Folder | Purpose | Details |
| :--- | :--- | :--- |
| `features/` | Feature Files | This directory holds the `.feature` files (not provided, but expected) that define the behavior in Gherkin syntax. |
| `step-definitions/` | Step Implementations | Contains the TypeScript files, such as `mathematics.ts`, that implement the Gherkin steps defined in the feature files. |
| `utils/` | Business Logic | Contains core utility or business logic classes, such as `VegetablesManager.ts`. |
| `cucumber.cjs` | Cucumber Configuration | The main configuration file for Cucumber, specifying feature paths (`paths: ['features/*.feature']`) and required files (`require: ['step-definitions/*.ts']`). |
| `tsconfig.json` | TypeScript Configuration | Configures the TypeScript compiler, enabling features like `"allowJs": true` to include JavaScript files like `cucumber.cjs`. |
| `package.json` | Project Manifest | Defines project metadata, dependencies, and the `test` script (`"test": "npx cucumber-js"`). |

## 💡 Implementation Explanation

The project uses Cucumber.js 🥒 and TypeScript 🟦 to implement and test the vegetable management logic. ❗The original feature file was refined to avoid missing implementation, ambiguity, and promote code reuse 📚.

The **Step Definitions** in `step-definitions/mathematics.ts` are key to this reusable design. They employ **Capture Groups** (`{int}` for numbers and `{string}` for vegetable names) to link generic Gherkin steps to the underlying logic, allowing a single step like `Given I have {int} {string}` to handle any vegetable and amount. 

The core business logic is encapsulated within the `VegetablesManager` class located in `utils/VegetablesManager.ts`. This class manages the inventory using a private `Map` 🥕🥦.
* The `eatVegetable` method implements validation: if the consumption amount exceeds the current stock, it prevents the stock update and sets the `lastError` 🛑.
* The **error scenario** is verified using the step `Then I get the error message {string}`, which asserts the stored error message.
* The `makeSalad` method utilizes `eatVegetable` for both ingredients and only increments the `salads` count 🥗 if no error was recorded during the consumption of the ingredients.

This architecture cleanly separates the high-level behavioral specification (Feature file) from the low-level business rules (the `VegetablesManager` utility) and the test automation layer (Step Definitions) ✅.

## How to Run the Project 🚀

### Prerequisites
You need to have **Node.js** installed on your system.

### Installation
First, install the project dependencies from the `package.json` file:

```bash
npm install
```

### Running the Tests 🧪
The package.json defines a test script using the cucumber-js command. Execute the tests using the following command:

```bash
npm test
# or
npx cucumber-js
```

The output format is configured to show a summary and a progress-bar. An example successful output would look like this:

3 scenarios (3 passed)  
12 steps (12 passed)

