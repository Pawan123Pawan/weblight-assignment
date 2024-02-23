# App Backend

This project implements a small-scale server application for an FMCG commercial app with basic functionalities like authentication, role management, CRUD operations, filtering, pagination, and Swagger documentation.

## Installation

Clone the repository:

#Install dependencies:
npm install

#Set up environment variables:
-PORT=3000
-MONGODB_URI=your mogobd uri
-JWT_SECRET=your_secret_key_here

#Usage
-Start the server:
node index.js


##Tested Endpoints on postman

### Authentication

- `POST /api/auth/v1/register`: Register a new user.
- `POST /api/auth/v1/login`: Log in and receive a JWT token.


### Products

- `GET /api/v1/product/get-product`: Get a list of products.
- `GET /api/v1/product/get-product/:slug`: Get a specific product by ID.
- `POST /api/v1/product/create-product`: Create a new product.
- `PUT /api/v1/product/create-product:id`: Update a product by ID.
- `DELETE /api/v1/product/product:id`: Delete a product by ID.
- `GET /api/v1/product/product-list/:page`: Pagination.

### Features

- Filtering, Pagination, and Sorting: Use query parameters for filtering, pagination, and sorting.
- Role-based Access Control: Use the admin role to access restricted routes.
- for admin email:admin@gmail.com and password : 123456
- only admin can do all changes and user can see .


## Time Spent

I spent approximately [18 hours] on this project.



