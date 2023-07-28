# Nike Shoe Store Project Readme

Welcome to the Nike Shoe Store project! This web application is built using React and Express.js, where all the main components are developed with React. The project incorporates Auth0 for the login system, allowing users to securely log in and access their accounts. Additionally, for processing payments, the application utilizes Stripe, integrating server-side code to handle payment transactions.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Authentication with Auth0](#authentication-with-auth0)
- [Payment with Stripe](#payment-with-stripe)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Nike Shoe Store project is a full-stack web application built to showcase and sell Nike shoes. It utilizes React for the frontend to create a dynamic and interactive user interface, and Express.js for the backend to handle API requests and database operations. The application implements Auth0 for user authentication, ensuring secure access to user accounts, and Stripe for handling payment transactions during the checkout process.

## Features

- Browse and search for Nike shoes
- User registration and login using Auth0
- Add shoes to the shopping cart
- View and update the shopping cart
- Secure checkout with Stripe payment integration
- Order history for authenticated users
- Admin panel to manage shoe inventory

## Prerequisites

Before running the application, ensure you have the following installed:

- Node.js (v12 or above)
- npm (Node Package Manager)

## Installation

1. Clone this repository to your local machine.

```
git clone https://github.com/your-username/nike-shoe-store.git
```

2. Navigate to the project directory.

```
cd nike-shoe-store
```

3. Install the required dependencies for both the client (React) and server (Express) applications.

```
npm install
cd client
npm install
cd ../server
npm install
```

## Configuration

1. Auth0 Configuration:
   - Create an account on Auth0 (https://auth0.com/) if you haven't already.
   - Set up a new application on Auth0 dashboard to get the client ID and domain.
   - Update the client-side configuration file with your Auth0 credentials:
     ```
     ./client/src/auth_config.json
     ```

2. Stripe Configuration:
   - Sign up for a Stripe account (https://stripe.com/) or use your existing one.
   - Obtain the Stripe publishable key and secret key from the Stripe dashboard.
   - Store the Stripe secret key securely as an environment variable on your server.

3. Server Configuration:
   - Create a `.env` file in the server directory and add the Stripe secret key:
     ```
     STRIPE_SECRET_KEY=your_stripe_secret_key_here
     ```

## Usage

1. Start the server:

```
cd server
npm start
```

2. Start the client (React) application in another terminal window:

```
cd client
npm start
```

The React application will automatically open in your default web browser at `http://localhost:3000/`.

## Authentication with Auth0

This application uses Auth0 for user authentication. When users try to access certain protected routes or perform actions that require authentication, they will be redirected to the Auth0 login page. Once logged in, they will be redirected back to the application with an access token, allowing them to access protected resources.

## Payment with Stripe

Stripe is integrated into the application to handle payment processing. When a user proceeds to checkout, the frontend sends the necessary information to the backend, which then communicates with Stripe using the secret key. Stripe processes the payment securely, and the application receives a response indicating the success or failure of the transaction.

## Contributing

We welcome contributions from the community! If you find any issues or have suggestions for improvements, feel free to open a pull request.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code as per the terms of the license.

Thank you for using the Nike Shoe Store project! If you have any questions or need further assistance, please don't hesitate to contact us.

Happy shoe shopping! 🎉
