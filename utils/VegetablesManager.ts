export class VegetablesManager {
  // Stores the quantity of each vegetable (e.g., 'cucumbers': 5).
  private stock = new Map<string, number>();
  // Tracks the total number of salads successfully made.
  private salads = 0
  // Stores the last error message encountered during an operation, or null if the last operation succeeded.
  private lastError: string | null = null

  /**
   * Sets or updates the stock quantity for a specific vegetable.
   * @param name The name of the vegetable (string).
   * @param amount The new quantity to set (number).
   */
  setVegetable(name: string, amount: number) {
    this.stock.set(name, amount);
  }

  /**
   * Attempts to consume a quantity of a specific vegetable.
   * Decrements stock if available; otherwise, sets a descriptive error message.
   * @param name The name of the vegetable (string).
   * @param amount The quantity to consume (number).
   */
  eatVegetable(name: string, amount: number) {
    const current = this.stock.get(name) ?? 0

    if (amount > current) {
      this.lastError = `It is not possible to eat more ${name} than what are available`
      return
    }

    this.stock.set(name, current - amount);
    this.lastError = null
  }

  /**
   * Attempts to make a salad by consuming specific quantities of cucumbers and carrots.
   * Increments the salad count only if both ingredients are successfully consumed (i.e., no 'lastError' is set).
   * @param cucumbers The quantity of cucumbers to use (number).
   * @param carrots The quantity of carrots to use (number).
   */
  makeSalad(cucumbers: number, carrots: number) {
    this.eatVegetable('cucumbers', cucumbers)
    this.eatVegetable('carrots', carrots)

    if (!this.lastError) {
      this.salads++
    }
  }

  /**
   * Retrieves the current stock quantity for a specific vegetable.
   * @param name The name of the vegetable (string).
   * @returns The current stock quantity (number), defaults to 0 if not found.
   */
  getVegetable(name: string): number {
    return this.stock.get(name) ?? 0
  }

  /**
   * Retrieves the total count of successfully made salads.
   * @returns The number of salads (number).
   */
  getSalads(): number {
    return this.salads
  }

  /**
   * Retrieves the last error message set by an operation.
   * @returns The error message (string) or null.
   */
  getError(): string | null {
    return this.lastError
  }
}
