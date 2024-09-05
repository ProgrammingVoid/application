# Learn about the frontend of PlantKeeper

## Original contributors

Rafael Dousse, Eva Ray, Quentin Surdez and Rachel Tranchida.

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

## Technical choices

In the development of the PlantKeeper frontend, we made several key technical decisions to ensure both a smooth
development process and a maintainable, efficient application. Below, we explain the reasoning behind these choices:

### React

We chose __React__ as the core framework for building the user interface for several reasons:

- __Familiarity__: As a team, we had a bit of experience with React from previous projects, which made it a natural
  choice. However, our primary goal was to deepen our understanding and become more proficient with it.
- __Component-based architecture__: React encourages breaking down the UI into reusable components. This modular
  approach not only makes the codebase easier to maintain but also allows us to isolate and manage different parts of
  the UI independently, improving code readability and reusability. For example, we made components to represent the
  navbar, the plants description or the sensors description that we reused in multiple places in the app.
- __Efficient rendering__: React’s __virtual DOM__ enables efficient updates to the UI by only re-rendering components
  that
  have changed, which improves performance.

By utilizing React, we built a dynamic and scalable frontend that is adaptable to future changes and expansions.

### Tailwind CSS

For styling, we opted to use __Tailwind CSS__ instead of traditional CSS. The main reasons for this choice were:

- __Ease of use__: Classic CSS can often become tedious, especially in maintaining large projects where style
  definitions can overlap or become repetitive. Tailwind's utility-first approach allows us to apply styles directly in
  the HTML, which makes it more intuitive and quicker to implement.
- __Maintainability__: With Tailwind, there's no need to write long CSS files. Instead, styling is achieved using
  utility
  classes, which allows for greater consistency across the application. This keeps our styles organized and easy to
  change
  without breaking existing functionality.
- __Customization__: Tailwind also allows for easy customization, enabling us to adjust styles as needed, while still
  keeping things simple and straightforward. This was particularly useful as we didn’t want to focus heavily on
  intricate
  design work, yet needed flexibility for tweaking the UI and give a recognizable look to the app.

In summary, Tailwind gave us a balance between flexibility and ease of use, making it a practical choice for a team not
deeply focused on design but still aiming for a clean and functional UI.

### Axios

We integrated Axios to handle HTTP requests from the frontend to the backend API. Axios simplifies the process of making
API calls and provides a more elegant and clearer syntax compared to the native JavaScript `fetch()` method. Its
promise-based
architecture ensures easier error handling and response manipulation, allowing us to easily handle API responses
such as retrieving plant data or sending sensor, plant or user information updates. Overall, Axios allowed us to
efficiently manage communication between the frontend and backend, ensuring smooth data handling.

### Design approach

As our team does not have formal training in web design, we aimed to keep the design of __PlantKeeper__ clean and simple
with the following principles in mind:

- __Minimalist color scheme__: We chose to use a basic and minimalistic color scheme to ensure the interface remains
  user-friendly and intuitive.
- __Inspired layouts__: Inspired by popular websites that showcase articles and dashboards, we adhered to familiar
  design conventions that users are accustomed to. This decision helped us avoid overly complicated or tacky designs
  that could lessen the user experience.
- __Functionality over aesthetic__: Our primary focus was functionality, ensuring that users can easily navigate the
  site, check their plant data, and receive notifications. A clean and straightforward design helps keep the user
  experience smooth and focused on the key features.

### React Router

To manage routing within the application, we used __React Router__. React Router is a library that allows us to
define routes in a declarative way, making it easier to navigate between different pages and components. By using React
Router, we were able to create a flawless user experience with dynamic routing, enabling users to move between pages
without the need for a full page reload.

### Route management and authentication

To secure certain parts of the application, we implemented two types of routes: __public__ and __authenticated__ routes.

- __Public routes__: These are accessible to all users without requiring authentication. For example, pages like the
  login or sign-up page fall under public routes.
- __Authenticated routes__: For pages that display sensitive or personalized data, such as the plant monitoring
  dashboard, we created protected routes. Accessing these routes requires the user to be authenticated.
- __JWT Authentication__: We used JWT tokens to determine if a user is logged in and authorized to access authenticated
  routes. When a user logs in, a token is issued and stored. Each time an authenticated request is made, this token is
  verified to ensure the user has the right permissions.
- __Redirects__: If a non-authenticated user attempts to access an authenticated route, the system will automatically
  redirect them to the login page. This ensures security by preventing unauthorized access.

By splitting the routes and using JWT tokens for authentication, we have ensured a secure and seamless user experience
across both public and private parts of the application.

