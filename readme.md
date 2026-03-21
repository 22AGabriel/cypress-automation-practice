![Cypress Tests](https://github.com/22AGabriel/cypress-automation-practice/actions/workflows/cypress.yml/badge.svg)

# Cypress Testing Project (API + UI)
This project contains automated tests built with Cypress, covering both API and UI testing scenarios.
It demonstrates validation of CRUD operations, user interactions, and error handling using real-world applications, following QA best practices and CI/CD integration.

---

### 🧪 Tech Stack

- **Cypress**
- **JavaScript**
- **Cypress-Mochawesome Reporter**
- **GitHub Actions (CI/CD)**
 
---

### 🌐 Applications under test

#### 🔹 API Testing:
- Base URL: `https://jsonplaceholder.typicode.com`
- Endpoints tested:
  - `GET /posts`
  - `GET /posts/{id}`
  - `POST /posts`
  - `PUT /posts/{id}`
  - `DELETE /posts/{id}`
  
### 🔹 UI Testing:
- Base URL: `https://todomvc.com/examples/react/dist/#/active`
- Features tested:
  - Add new tasks
  - Mark tasks as completed
  - Delete tasks
  - Filter tasks (All, Active, Completed)

---

### 📋 Features

- API Testing (CRUD operations)
- UI Testing (user flows)
- Positive and negative test cases
- Reusable commands and fixtures
- Automated test reporting
- CI/CD pipeline integration

---

### ⚙️ CI/CD Pipeline

This project includes a CI pipeline built with GitHub Actions that:

- Runs API and UI tests automatically on every push to main
- Executes all tests in a single Cypress run to generate a unified report
- Generates test reports using Mochawesome
- Uploads reports as downloadable artifacts

This ensures continuous validation of the application and visibility of test results.

---

### 🛠️ Installation

```npm install```

---

### ▶️ Run Tests

Open Cypress (UI mode):

```npx cypress open``` 

Run all tests (headless mode):

```npx cypress run```

Run API or UI tests only:

API: ```npm run test:api```

UI: ```npm run test:ui```

Run tests for CI (API + UI together):

```npm run test:ci```

---

### 📊 Test Reports

This project uses Mochawesome for generating test reports. 

Reports are automatically generated during CI execution and can be downloaded from GitHub Actions as artifacts.

Each report includes:

- Test execution summary
- Passed and failed test cases
- Error details
- Screenshots of failures (when applicable)

### 🔍 Report Overview
![Report Overview](./docs/report-overview.png)

### 🔍 Report Overview Details
![Report OverviewDetails](./docs/report-overview-detail.png)

### ❌ API Failure Example
![API Failure](./docs/api-failure-detail.png)

### ❌ UI Failure Example
![UI Failure](./docs/ui-failure-detail.png)

Failing tests cases were intentionally created to demonstrate the reporting capabilities and to validate error handling in both API and UI tests.

---

### 🧠 Testing Approach

Tests were designed following QA best practices:

- Clear and independent test cases
- Validation of both happy and edge cases
- Separation between API and UI tests
- Reusable and maintainable code structure

---

### 📈 Future Improvements

- Environment configuration
- Cross-browser testing
- Integration with performance testing tools (e.g. Apache JMeter)
 
---

### 👨‍💻 Author

Gabriel Azubel
