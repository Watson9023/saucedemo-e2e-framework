# SauceDemo E2E Framework

Playwright and TypeScript test framework covering the SauceDemo purchase flow and key validation scenarios.

The framework follows a maintainable structure with separation of test logic, page behaviour, selectors, fixtures, and test data.

## Features

* Playwright + TypeScript
* Page Object Model (POM)
* Separate selectors
* Separate test data
* Fixtures for page objects
* Positive and negative test coverage
* HTML reporting
* Screenshots, video, and trace collection on failure
* GitHub Actions workflow

## Public SauceDemo Login Information

```text
standard_user / secret_sauce
locked_out_user / secret_sauce
invalid_user / wrong_password
```

## Project Structure

```text
.
├── fixtures/
│   └── sauceFixture.ts
├── pages/
│   ├── BasePage.ts
│   ├── CartPage.ts
│   ├── CheckoutPage.ts
│   ├── InventoryPage.ts
│   └── LoginPage.ts
├── selectors/
│   ├── CartSelectors.ts
│   ├── CheckoutSelectors.ts
│   ├── InventorySelectors.ts
│   └── LoginSelectors.ts
├── test-data/
│   ├── products.ts
│   └── users.ts
├── tests/
│   ├── checkout.spec.ts
│   ├── login.spec.ts
│   └── purchase.spec.ts
├── utils/
│   ├── Logger.ts
│   └── TestDataFactory.ts
├── playwright.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Automated Scenarios

### Login

* Standard user can log in successfully
* Invalid credentials display the expected error
* Locked-out user cannot access the application

### Checkout Validation

* Checkout cannot continue when first name is missing

### Purchase Journey

* User can complete a purchase for a selected product
* Product is added to cart successfully
* Cart contents are verified before checkout
* Order confirmation is displayed after purchase

## Installation

```bash
npm install
npx playwright install
```

## Run All Tests

```bash
npx playwright test
```

## Run Smoke Tests

```bash
npm run test:smoke
```

## Run Regression Tests

```bash
npm run test:regression
```

## View HTML Report

```bash
npm run report
```

## Continuous Integration

A GitHub Actions workflow is included:

```text
.github/workflows/playwright.yml
```

The workflow installs dependencies, installs Playwright browsers, executes the test suite, and publishes the Playwright HTML report.