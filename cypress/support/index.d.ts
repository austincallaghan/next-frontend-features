///<reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Get an element by it's test id attribute (web: `data-testid`, React Native: `testID`)
     * @example
     * cy.getByTestID('my-test-id')
     */
    getByTestID(testID: string, options?: { timeout?: number }): Chainable<Subject>;

    /**
     * Take a screenshot of the viewable screen using Happo
     * @example
     * cy.takeFullScreenshot()
     */
    takeFullScreenshot<T>(options?: T): Chainable<Subject>;
  }
}
