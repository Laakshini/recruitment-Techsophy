# Getting Started with Techsophy Bootstrapped Template

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Overview

Ready-to-use web app with all basic and necessary components integrated with KeyCloak authentication, SxP, and MUI styled components.

The main agenda of this template project is to reduce development time by providing a base project where developers don't have to start development from scratch.

This project uses Keycloak for Identity and Access Management.

## Prerequisites

Before using, ensure you have the following prerequisites:

- node.js version 20 or higherCheck by using `node --version` in the terminal or CMD. If it's not version 20, switch to version 20 using NVM.


## Available Scripts

In the project directory, you can run:

### `npm install` || `yarn install`

Install node Modules.

## Setting up `.env` file

Copy the content below and create a new file named `.env` in the root directory of your project.

```plaintext
# .env file

# Keycloak URL: The URL where your Keycloak authentication server is hosted.
REACT_APP_KEYCLOAK_URL={Keycloak URL}

# Realm: The realm within your Keycloak server where your application is configured.
REACT_APP_KEYCLOAK_REALM={Realm}

# Client ID: The unique identifier for your application registered in Keycloak.
REACT_APP_KEYCLOAK_CLIENT_ID={Client ID}

# Gateway URL: The URL of your API gateway, which may handle authentication and routing requests to your backend services.
REACT_APP_API_GATEWAY_URL={Gateway URL}

```

### `npm start` || `yarn start`

Runs the app in development mode.
Open [http://localhost:3000/](http://localhost:3000/) to view it in the browser.
The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.
Your app is ready to be deployed!
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**
If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.
Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point, you’re on your own.
You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However, we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## List of Features

Below is the list of features implemented in this application:

- Header
- SideNav
- Theme
- Profile

The Header contains a SideNav, Theme, and Profile. The Theme icon, when clicked, can change the theme of the application (it toggles between dark and light mode for this application). The SideNav contains a list of pages, and clicking on each page will navigate to that component.

## Customizations

The `Navigator.tsx` file in `src` contains all routing for this application. The routes are defined in the `Routes.ts` file in `src`, and you can add any routes to this file.

The `pages` folder in `src` contains all UI components for this application. You can add your own components to this folder.

## Redux Integrated

`Redux Toolkit` is integrated into this project to manage global state. The `redux` folder in `src` contains all Redux-related files, including actions, reducers, and store configuration. You can add additional reducers and actions as needed for your application's state management.

## Issues

If you encounter any issues or have suggestions for improvements, please open an issue on the [GitHub repository](https://github.com/TechsophyOfficial/reactjs-bootstrap-template/tree/singleTenant).

## Support

For any inquiries or support requests, please contact [Techsophy](https://techsophy.com/).

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
To learn React, check out the [React documentation](https://reactjs.org/).
# recruitment-Techsophy
