import { Given, When, Then } from '@cucumber/cucumber'
import { strict as assert } from 'assert'
import { VegetablesManager } from '../utils/VegetablesManager.ts';

const manager = new VegetablesManager()

/* ---------- GIVEN ---------- */

// Sets the initial stock quantity for a specific vegetable (e.g., "Given I have 5 'cucumbers'").
Given('I have {int} {string}', (amount: number, vegetable: string) => {
  manager.setVegetable(vegetable, amount)
  console.log(`[GIVEN] Initialized stock: ${amount} ${vegetable}(s). Current stock: ${manager.getVegetable(vegetable)}`)
})

/* ---------- WHEN ---------- */

// Simulates eating a specific quantity of a vegetable, triggering the logic and error checks.
When('I eat {int} {string}', (amount: number, vegetable: string) => {
  manager.eatVegetable(vegetable, amount)
  console.log(`[WHEN] Attempted to eat ${amount} ${vegetable}(s). Stock after: ${manager.getVegetable(vegetable)}`)
})

// Simulates the action of making a salad, consuming specific amounts of cucumbers and carrots.
When(
  'I make a salad with {int} cucumbers and {int} carrots',
  (cucumbers: number, carrots: number) => {
    manager.makeSalad(cucumbers, carrots)
    console.log(`[WHEN] Attempted to make a salad (C:${cucumbers}, R:${carrots}). Total salads: ${manager.getSalads()}`)
  }
)

/* ---------- THEN ---------- */

// Asserts that the remaining stock for a specific vegetable matches the expected amount.
Then('I should have {int} {string}', (expected: number, vegetable: string) => {
  assert.equal(manager.getVegetable(vegetable), expected)
  console.log(`[THEN] Asserted ${vegetable} stock. Expected: ${expected}, Actual: ${manager.getVegetable(vegetable)}.`)
})

// Asserts that the total number of salads produced matches the expected amount.
Then('I should have {int} salad', (expected: number) => {
  assert.equal(manager.getSalads(), expected)
  console.log(`[THEN] Asserted salad count. Expected: ${expected}, Actual: ${manager.getSalads()}.`)
})

/* Asserts that an error was recorded during a previous step and that the error message 
matches the expected string.*/
Then(
  'I get the error message {string}',
  (expectedMessage: string) => {
    assert.equal(manager.getError(), expectedMessage)
    console.log(`[THEN] Asserted error message. Expected: '${expectedMessage}'. Actual: '${manager.getError()}'.`)
  }
)
