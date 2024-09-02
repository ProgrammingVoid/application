# Learn about the frontend of PlantKeeper

## Original contributors
Rafael Dousse, Eva Ray, Quentin Surdez and Rachel Tranchida

## Launch frontend locally

To set up and run the frontend of the Plant Keeper application locally, follow the steps outlined below:

### 1. Clone the repository

First, clone the repository using the following command:

```bash
 git clone git@github.com:Plant-keeper/application.git
```

### 2. Install Node.js and npm

Ensure you have Node.js and npm installed on your system. If not, you can install them using the following command (for
Debian/Ubuntu-based systems):

```bash
  sudo apt install nodejs npm
```

Alternatively, visit the [Node.js official website](https://nodejs.org/fr) for installation instructions tailored to
other operating systems.

### 3. Install Project Dependencies

Navigate to the root directory of the cloned repository and install the necessary dependencies using npm:

```bash
  cd application
  npm install
```

### 4. Update the server URL

This repository is configured for the deployed version of the app. To use the app locally, you'll need to update the
server URL. Open the file src/constants.ts and change the server URL to http://localhost:4000. The updated line should
look like this:

```typescript
export const SERVER_URL = 'http://localhost:4000';
```

### 5. Run the frontend

Start the frontend application with the following command:

```bash
  npm start
```

### 6. Access the application

Once the frontend is running, open your web browser and navigate to: [http://localhost:3000](http://localhost:3000).
You should see the Plant Keeper application running.

### 7. Ensure backend is running

To fully utilize the application, ensure that the backend server is running. If it isn't, you won't be able to do basic
actions, like signing up or logging in. For more details on setting up the backend,
refer to the [backend README](../backend/README.md).

### 8. You're ready to go!

You are now all set to use the app! If you have any questions or run into any issues, feel free to reach out to us at
*info@plantkeeper.ch*. We're happy to help!

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more
information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
