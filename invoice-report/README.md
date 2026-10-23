# invoice-report

Invoice aggregation application with lodash 4.17.20 pinned in package-lock.json. `npm start` prints a customer total; tests cover aggregation, empty input, negative values and dependency usage in tests. The pin is affected by [CVE-2021-23337](https://github.com/advisories/GHSA-35jh-r3h4-6jhm), fixed for that advisory in 4.17.21. It deliberately provides dependency-update and delivery input; it does not expose the vulnerable template function.

Build and test:

```sh
npm ci && npm test
```
