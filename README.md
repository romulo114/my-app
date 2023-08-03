# Purchase Order Bulk Insert Feature

## Description

This project implements a feature that allows employees to bulk insert purchase order information. It consists of a front-end web interface and a back-end API service. Users can submit purchase order details through a form, including the date, vendor name, and a CSV file containing information about the products (Model Number, Unit Price, Quantity). The application validates the submitted data and displays success messages or validation errors accordingly. Valid submissions are saved in a storage system.

## Technologies Used

- Front-end:
  - React as a JavaScript library
  - TypeScript
  - Tailwind CSS as a style library
  - react-toastify for a toast view
  - axios for REST APIs
<br />
- Back-end:
  - Express as a node.js language-based backend framework
  - SQLite as a file based database
  - body-parser to parsing request bodies in Express. It can parse JSON, URL-encoded, and multipart/form-data request bodies.
  - cors for enabling Cross-Origin Resource Sharing (CORS) in Express. It allows a web application running at one origin to access resources from a different origin
  - csv-parser to parse CSV files and streams into arrays or objects.
  - fs for working with the file system. It provides functions for reading, writing, and manipulating files and directories.
  - multer to handling multipart/form-data requests in Express. It can parse file uploads and store them on the server.
  - nodemon to automatically restarting a Node.js application when changes are made to its source code. It can be used during development to speed up the development process.

## Running the Application

To run the application, follow these steps:

1. Clone the repository from Github.
2. Install the required dependencies for both the front-end and back-end components by running `npm install` or `yarn` 
3. Start the back-end API service by running `npm run backend` or `yarn backend`
4. Start the front-end web interface by running `npm run start` or `yarn start`
5. Access the application in a web browser by visitin `localhost:3000`

## Time Estimate

The estimated time for completing this exercise is 8 hours.
