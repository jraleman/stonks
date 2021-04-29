# Stonks

Stock market quote app using React.

Demo can be accessed via [jraleman.com/stonks](https://jraleman.com/stonks)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setup

To run the app in the development mode, run the following script:

```
yarn start
```

- This will open [http://localhost:3000](http://localhost:3000) to view it in the browser.

To launch the test runner in the interactive watch mode, run the following script:

```
yarn test
```

- This demonstrates use of Test Driven Development (TDD)

To build the app for production to the `build/` folder, run the following script:

```
yarn build
```

- This correctly bundles React in production mode and optimizes the build for the best performance.
- The build is minified and the filenames include the hashes.

## Technical Information

### Specifications

- Responsive, works on mobile browser
- List of stocks are displayed in a table.
- When a stock is selected, it displays the details of that stock.
- These quotes are retrieved asynchronously from a source on the internet.
- The source of the selected stock quotes returns a JSON response.

### Dependencies

- `axios`
- `d3js`
- `i18next`
- `react-i18next`
- `react-table`
- `reactstrap`
- `styled-components`

## TODO

- [ ] Make list of stocks editable
