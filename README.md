# Routable Coding Challenge

One Paragraph of project description goes here

## The Challenge

For this exercise, you will consume GitHub issues to create a simple interface that will
aid a product manager in prioritizing issues and/or enhancements for a given repository.

There's no need to worry about logging in via GitHub at this point: when a user hits the site, they should submit an appropriate GitHub API key. Once the API key is submitted, send them to the prioritization interface.

When a user first loads the application, they should be able to choose a given repository that they have access to. Once selecting this repository, the screen should change from a single column interface to a two column interface. The left side depicting a list of repositories the user has access to and the right being the encapsulated issues of the given repository. (Don’t worry about pagination. Keep it simple.)

The default rank of the issues should be what the API supports by default: created, desc. Once the issues load a user should be able to re-order the issues in whatever priority suits the current need for that sprint. The customized order should be able to be persisted in a current client-side session so that if you refresh the page, the order will remain.

### Prerequisites

This code runs on Google Chrome. You will need a [Github Token](https://github.com/settings/tokens) to interface with this app.

### Installing

After cloning the repo, simply run:

```bash
npm install
```

in the root, then:

```bash
npm start
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

This project uses [Jest](https://jestjs.io/en/) and [Enzyme](https://airbnb.io/enzyme/). To run the automated tests, run:

```bash
npm run test
```

in the root.

## Built With

* [React](https://reactjs.org/) - The web framework used
* [Redux-Toolkit](https://redux-toolkit.js.org/) - State Management Toolset
* [Redux-Form](https://redux-form.com/8.3.0/) - Form state Management
* [Moment](https://momentjs.com/) - Time parsing and manipulation
* [Styled-Components](https://styled-components.com/) - CSS in JS styling library
* [Reselect](https://github.com/reduxjs/reselect) - A selector library for Redux
* [Recompose](https://github.com/acdlite/recompose) - It was Hooks before Hooks!

## Authors

* **Erin Hinson** - *Initial and Subsequent work* - [ehinson](https://github.com/ehinson)
