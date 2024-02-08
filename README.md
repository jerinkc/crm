# CRM

CRM is a Customer Relationship Management application built with React for the frontend and Rails for the backend. It offers essential features for managing customer interactions, tracking leads, and maintaining client relationships.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [To-Do](#To-Do)

## Features

- **Admin Authentication:** Secure token-based authentication system for administrators.
- **Customer Management:** Easily store and update customer details, including contact information, notes, and communication history.

## Installation

Follow these steps to set up the CRM application on your local machine:

1. Clone the repository to your local environment.
2. Open separate terminals for the `crm_rails` and `crm_react` directories.
3. Start the frontend React app by running `npm start` within the `crm_react` directory.
4. Install dependencies for the backend Rails app using `bundle install` within the `crm_rails` directory.
5. Set up the database by running `rails db:create db:migrate db:seed`.
6. Seed the database with initial data using `rails db:seed`.
7. Launch the Rails backend server with `rails s`.

## Usage

To use the CRM application:

1. Access the application through `http://localhost:3000` in your web browser.
2. Log in using the default credentials: `admin@example.com` for email and `password` for the password.
3. View all customers listed on the left-hand side of the application.
4. Select a customer from the panel to interact with their details.
5. Click on the customer's title to view and manage their information.
6. Edit or delete customer details using the navigation bar within the interaction panel.

## To-Do

Enhancements planned for future iterations:

1. Implement delete functionality for customers within the admin dashboard.
2. Develop an interaction pane and functionality for both administrators and customers to facilitate communication.
3. Write comprehensive tests for both Rails and React components to ensure application stability and reliability.
