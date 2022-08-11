*Website URL*: http://group24-expensetracker-dev.us-east-1.elasticbeanstalk.com/

## Authors

* Abhishek Uppe (https://github.com/uppeabhishek/)
* Vatsal Yadav (https://github.com/Vatsalyadav/)
* Devarshi Vyas (dv459527@dal.ca)
* Ayush Verma (https://github.com/ayushverma8/)
* Smit Thakkar (https://github.com/whitetiger47/)
* Benny Tharigopala (https://github.com/Tech-Knight-Danny/)

## Features developed

1. Group Expense Tracking

2. Payment Reminder

3. Categorial Expense (Tags)

4. User management

5. Expense Tracker

6. In-App Payment Integration

7. Coupon Management

8. Notifications

9. Analytics


## Tasks developed

1. Group Expense Tracking
   1. Create Group
   2. Edit Group
   3. View Group
   4. Delete Group

2. Payment Reminder
   1. Create Payment Reminder
   2. Modify Payment Reminder
   3. Delete Payment Reminder
   4. View Payment Reminder

3. Categorical Expense (Tags)
   1. Create Tag
   2. Edit Tag
   3. View Tag Details (an individual tag)
   4. View Tags (per user)
   5. Delete Tag

4. User Management
   1. SignIn
   2. SignUp
   3. Change Password
   4. Logout

5. Expense Tracker
   1. Add Expense
   2. Edit Expense
   3. Settle Uppe
   4. Delete Expense

6. In-App Payment Integration
   1. Initiate Payment
   2. Input Payment Method Details
   3. View Payment Status
   4. View Payment History

7. Coupon Management
   1. View Coupons
   2. Redeem Coupons
   3. Coupon Redeemed

8. Notifications
   1. Notification Settings
   2. Email Notification
   3. View Notification

9. Analytics
   1. Analytics
   2. Expense Analytics
   3. Spending Trends
   4. Expense Tracking

## Getting Started

### Prerequisites

To have a local copy of this applicationup and running on your local machine, you will first need to
install the following software / libraries / plug-ins

```
NodeJS: Latest LTS version download from https://nodejs.org/en/.
Git: Latest source release download from https://git-scm.com/downloads.
```

See the following section for detailed step-by-step instructions on how to install this software / libraries / plug-ins

### Installing

Run the following commands in both the frontend and backend root folder to install and run the application

```
npm install
npm start
```

## Deployment

1. Create a AWS account from [here](https://portal.aws.amazon.com/billing/signup).
2. Install elastic beanstalk client using from [here](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-install.html)
4. Run the following commands

```
eb init
eb create
eb deploy
```

## Built With

**Frontend**

- [ReactJS](https://reactjs.org/) - The core web library (framework) used.
- [React Router DOM](https://v5.reactrouter.com/) - Routing library for single page application.
- [React Bootstrap](https://react-bootstrap.github.io/) - User Interface components for React.
- [SweetAlert2](https://sweetalert2.github.io/) - Beautiful Alerts for React.
- [React Redux](https://react-redux.js.org/) - Used for state management.
- [Redux Saga](https://redux-saga.js.org/) - Middleware for redux.
- [React Datepicker](https://www.npmjs.com/package/react-datepicker) - Reusable datepicker component for React.
- [Moment](https://www.npmjs.com/package/moment) - A JavaScript date library for parsing, validating, manipulating, and formatting dates.

**Backend**

* [Node](https://nodejs.org/en/) - The core backend library (framework) used.
* [Express](https://expressjs.com/) - Framework for creating single page routes.
* [Postgresql](https://www.postgresql.org/) - SQL Database for the application.
* [Supabase](https://supabase.com/) - API Client for PostgreSQL.
* [Docker](https://www.docker.com/) - Creating single container for frontend and backend folder.
* [AWS Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/) - Used for deploying both frontend and backend applications using Docker.
* [Nodemailer](https://nodemailer.com/about/) - Node.js module to send emails.
* [Node Schedule](https://github.com/node-schedule/node-schedule#readme) - A flexible job scheduler for Node.js for scheduling emails.

## Folder Structure

**Frontend**

* For frontend the folder structure used is the default react folder structure.
* All the assets are stored in frontend/src/assets.
* All the React Components are stored in frontend/src/components.
* All the css files other then App.css and index.css are stored in frontend/src/css.
* The redux structure containing actions, reducers and sagas in frontend/src/redux.

**Backend**

* For backend the folder structure used is the default nodejs and expressjs folder structure.
* All the API logic and end points are stored in backend/controllers.
* All the models or database connection are stored in backend/models.
* All the backend routes are stored in backend/routes.

