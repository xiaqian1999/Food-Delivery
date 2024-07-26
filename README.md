# Food Delivery Web Page

## Tool in Use

## Features include inside this app

### Frontend

- User able to increment the count for each menu item from Home page
- User able to decrement the count for each menu item from Home page
- The increment of the count will reflect in the cart page
- User able to remove the menu item from the Cart Page
- User can filter the menu item based on the Food Category
- Responsive Design with mobile friendly

### Backend

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
   a. express -
   b. mongoose - help to connect to DB
   c. jsonwebtoken - create authenticat system
   d. bcrypt - incrept user data ans store in DB
   e. cors - give the permission to frontend to connect with backend
   f. dotenv - with environment variable
   g. body-parser - parse data coming from user
   h. multer - create image towards system
   i. stripe - add payment kpt on the web page
   j. validator - check the password and email id is valid or not
   k. nodemon - when save the project, server will restart
6. After all npm dependencies install, update the "scripts" inside the package.json
   a. Original: "test": "echo \"Error: no test specified\" && exit 1"
   b. After: "server": "nodemon server.js"
7. Then inside the backend folder, create the following folder for the backend folder structure
   a. config - store the configuration file like DB config
   b. models - store the models from the MongoDB
   c. middleware - store all the middleware
   d. controllers - add the logic of the backend
   e. routes
   f. uploaders - all the image uploaded by the users
8. Then create .env file that store all the environment
9. To test with api, instead of browser, we use extension "Thunder Client"

- Set Up MongoDB

1. Google "Mongodb atlas" and sign in
2. Create Organization and Project
3. Create Database with Provider Google Cloud

## Question need for reasearch

1. what is @keyframe in the css
   - It could reused in the transition with opacity with some UI/UX design
