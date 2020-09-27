# T9

[Description](#description) | [Live Website](#live-website) | [Approach](#approach) | [Technologies Used](#technologies-used) | [Tests](#tests) | [Getting Started](#getting-started) | [How to Run the App](#how-to-run-the-app) | [How to Run the tests](#how-to-run-the-tests) | [Continuous Integration and Delivery](#continuous-integration-and-delivery) | [TODO](#TODO)

## Description

Web app that allows users to input numbers on a keypad and returns predictive text.

## Live Website
![](./assets/t9.gif)

## Approach

I followed TDD for implementing the algorithm on the back end. See my approach [here](./predictive-text-approach.md)

- API endpoint returns array of strings when given a numeral string
- Logic is implemented in back end service
- MVP consists of an input numbers and list of predictions on the front end and 1 api endpoint on the backend

## Technologies Used

**Main technologies:**
- Suggested: Node, React, redux
- Additional: [Styled components](https://reactjs.org/): For its modular / component css that makes styling react components very easy.

**Testing:**
- Jest, Enzyme, Supertest

**Linting**
- Eslint, prettier

## Tests

**Algorithm unit test example**
![](./assets/unit.PNG)

**Component unit test example**
![](./assets/component.PNG)

**Api endpoint example**
![](./assets/api.PNG)

## Getting Started

In terminal and desired file location:

1. Clone: `git clone git@github.com:HarryMumford/T9.git`
2. Install dependencies from route directory and client folder (`npm i`)

## How to Run the app

3. Run server in backend: `npm run dev`
4. Run react project in client folder: `npm start` (in a new terminal)

## How to Run the tests

- Watch all back end tests `npm t`
- Watch all client tests `cd client && npm t`

## TODO

- [x] Unit test / integration test components with enzyme and jest
- [x] Api end point test using supertest
- [x] Implement t9 combination algorithm using TDD
- [x] Build apple-like phone UI
- [x] Design a display UI
- [ ] Host on Heroku
- [ ] Implement Trie solution to filtering words based on prefixes
- [ ] Write more integration tests simulating user clicks
- [ ] Test actions and reducers
