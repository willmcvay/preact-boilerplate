# (P)React Boilerplate

Opinionated TypeScript boilerplate and tooling for React or Preact Redux Projects. See branches for React or Preact versions.

There is a very simple skeletion app fetching data from the Reddit API and styled with Semantic UI (Styled Components is included, Semantic just for rapid prototyping purposes), demonstrating the full end to end Redux pattern. The boilerplate is intended to be as typesafe as possible throughout, is linted to community standards and has unit, e2e & performance tests included.

## Getting started

### To build for dev
``` 
yarn

yarn dev
```
HMR dev server available on [port 8080](http://localhost:8080)
### To build for prod
``` 
yarn build

yarn start
```
Again, server available on [port 8080](http://localhost:8080)
### To run the linter (Prettier & TSLint)
``` 
yarn lint
```
This also runs as a pre-commit hook
### To run the unit tests (Jest & Enzyme)
``` 
yarn test
```
This also runs as a pre-push hook
### To run the unit tests in dev mode
``` 
yarn test-dev
```
### To run the performance Tests (Lighthouse & Jest)
``` 
yarn test-perf
```
### To run the E2E Tests (Webdriver)
``` 
yarn test-e2e
```