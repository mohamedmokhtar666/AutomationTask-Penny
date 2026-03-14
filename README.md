# Automation Testing Project

# Project Overview

This project contains automated end-to-end tests developed using Playwright with TypeScript to validate core user functionalities on the website:

https://automationexercise.com/

The automation framework follows the Page Object Model (POM) design.

# The automated scenarios include:

User Registration

Successful Login

Invalid Login Scenarios

Logout functionality

# Tools & Technologies Used:

Playwright	End-to-end browser automation

TypeScript	Programming language used for test development

Node.js	Runtime environment

Faker.js	Generating dynamic test data

Git	Version control

GitHub	Source code repository   

Html report

applied cross-browser end-to-end testing so we can run with three browsers (chrome,firefox,webkit) through 
# commands : npx playwright test --project=chromium

npx playwright test --project=firefox

npx playwright test --project=webkit

# CI/CD Integration

This automation framework can be integrated into a CI/CD pipeline to automatically execute tests whenever code is pushed to the repository or a pull request is created.

In this project, GitHub Actions can be used to run Playwright tests automatically.

# Continuous Integration Workflow

The pipeline performs the following steps:

Trigger workflow when code is pushed or a pull request is created.

Install project dependencies.

Install Playwright browsers.

Execute the automated tests.

Generate and upload the Playwright HTML test report.

# Pipeline Outcome

After each pipeline run:

All automated tests will be executed.

The Playwright HTML report will be generated.

The report will be uploaded as a pipeline artifact.

