# DT42 Piggy Web ![Node.js CI](https://github.com/david30907d/DT42_PIGGY_WEB/workflows/Node.js%20CI/badge.svg)

This Web of Piggy Project

## Install

Npm dependencies, for linter, formatter and commit linter (optional):
1. `brew install npm`
2. `npm ci`

## Run

1. Build image: `docker build -t davidtnfsh/dt42_piggy_front_end --cache-from davidtnfsh/dt42_piggy_front_end:cache .`
2. Docker: `docker run --rm -p 5000:5000 -it davidtnfsh/dt42_piggy_front_end:latest`
3. Local: `npm start`

## Config
### Dashboard Config

> src/config/dashboardConfig.js

* Condition: It's a arrow function which would return `true/false`, please implement your condition and the icon would be popped up when the condition is met.
* Icon: You can use any icon tag in [semantic UI](https://react.semantic-ui.com/elements/icon/)
* Color: You can use any color tag in [semantic UI](https://react.semantic-ui.com/elements/label/#variations-colored)

```js
const DashboardConfig = {
  dashboard_days: 7,
  hours_per_day: 24,
  step_of_hours_per_day: 3,
  icons: [
    {
      condition: (label) => label === "分娩",
      icon: "heart",
      color: "red",
    },
    {
      other_icon: "something"
    }
  ],
};
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
