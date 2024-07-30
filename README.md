# Food Delivery Web Page

## Tool in Use
- React JS, HTML/CSS, MongoDB
- Depencies in use: axios, express, stripe

## Video Demo
[![Video demo walkthrough](https://img.youtube.com/vi/61FYixVP4Ok/hqdefault.jpg)](https://youtu.be/61FYixVP4Ok])

## Features include inside this app

### Frontend

- User able to increment the count for each menu item from Home page
- User able to decrement the count for each menu item from Home page
- The increment of the count will reflect in the cart page
- User able to remove the menu item from the Cart Page
- User can filter the menu item based on the Food Category
- Responsive Design with mobile friendly

### Backend

- Admin able to add new menu item into the menu list
- User able to create an account with email
- User able to create order based on the menu items they add into the cart
- User able to make the purchase of the order through Stripe API
- User able to view all their orders
- User able to track the order current status
- All foods, address, order, and user account information are stored in the DB with 3 tables: foods, orders, users

## Initial Set Up for dependencies

- npm install
- npm install react-router-dom

## New Things Learn

- Set Up React Router

1. main.jsx
   a. import { BrowserRouter } from 'react-router-dom'
   b.
   <!-- wrap <App /> inside the <browserRouter> -->

2. App.jsx
   a. import each folder jsx file under the pages
   b.
   <!-- <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/cart' element={<Cart />} />
    <Route path='/order' element={<PlaceOrder />} />
   </Routes> -->

- Set Up Backend

1. npm init
2. When it's entry point: Type in "server.js"
3. Add a new folder called "backend" after npm init, add another file "server.js"
4. After redirect to backend folder, add dependencies that need to install
5. npm install express mongoose jsonwebtoken bcrypt cors dotenv body-parser multer stripe validator nodemon
   - express -
   - mongoose - help to connect to DB
   - jsonwebtoken - create authenticat system
   - bcrypt - incrept user data ans store in DB
   - cors - give the permission to frontend to connect with backend
   - dotenv - with environment variable
   - body-parser - parse data coming from user
   - multer - create image towards system
   - stripe - add payment kpt on the web page
   - validator - check the password and email id is valid or not
   - nodemon - when save the project, server will restart
6. After all npm dependencies install, update the "scripts" inside the package.json
   - Original: "test": "echo \"Error: no test specified\" && exit 1"
   - After: "server": "nodemon server.js"
7. Then inside the backend folder, create the following folder for the backend folder structure
   - config - store the configuration file like DB config
   - models - store the models from the MongoDB
   - middleware - store all the middleware
   - controllers - add the logic of the backend
   - routes
   - uploaders - all the image uploaded by the users
8. Then create .env file that store all the environment
9. To test with api, instead of browser, we use extension "Thunder Client"

- Set Up MongoDB

1. Google "Mongodb atlas" and sign in
2. Create Organization and Project
3. Create Database with Provider Google Cloud

- Initialize Set Up for Admin Page

1. npm install axios react-toastify react-router-dom
   a. axios: create the network request for GET, POST
   b. react-toastify: create the toast notification
   import { ToastContainer, toast } from 'react-toastify';
   import 'react-toastify/dist/ReactToastify.css';

- How to setup with router and controller initially

1. Create userController.js
   a. First create the functionality by url (ex: addItem, removeItem, getItem)
   b. Import the Models
   c. Export the above 3 functions
2. Create userRoute.js
   a. Import the functions from the controller
   b. Initialize with const xxxRouter = express.Router();
   c. Then xxxRouter.get() or xxxRouter.post()
3. Create userModel.js
4. Inside the server.js
   a. Add on app.use("/api/xxx", xxxRouter)

## Question need for reasearch

1. what is @keyframe in the css
   - It could reused in the transition with opacity with some UI/UX design
