# TaskMaster

TaskMaster is a Node.js application for managing tasks. This application provides CRUD (Create, Read, Update, Delete) operations for tasks and user authentication using JWT (JSON Web Tokens). 

## Features

- Create, read, update, and delete tasks
- User authentication and authorization
- API documentation using Postman
- Docker containerization for easy deployment


## 1. Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [MongoDB](https://www.mongodb.com/) (for local development)

### Steps

 **Clone the Repository and Install Dependencies**

   ```bash
   git clone https://github.com/your-username/taskmaster.git
   cd taskmaster
   npm install
```

### 3. API Documentation
The API documentation is available on Postman. This documentation provides detailed information about all available endpoints, including request types, parameters, and response formats. It also includes examples of requests and responses to help you understand how to interact with the API.

Postman Documentation Link: https://documenter.getpostman.com/view/24266746/2sA3rxpYVU 

In the Postman documentation, you will find:

- Detailed Descriptions: Each endpoint is described in detail, including its purpose and functionality.
- Request Examples: Examples of how to format requests to each endpoint.
- Response Examples: Examples of the responses you can expect from the API, including success and error cases.
- Authentication Information: Instructions on how to provide authentication tokens to access protected endpoints.

## 2. Running the Application

### Using Nodemon
To start the application in development mode, use:

```
npm install -g nodemon
nodemon
```
By default, the application will run on http://localhost:8000.

### Using Docker

### Prerequisites
Docker installed on your machine.

### Steps:

#### 1. Build Docker image:
```
docker build -t taskmaster-app .
```

#### 2. Run Docker Container:
```
docker run -p 8000:8000 taskmaster-app
```
This maps port 8000 of your local machine to port 8000 in the Docker container.

#### 3. To Stop Docker Container:
To stop the Docker container, first find the container ID using:
```
docker ps
```

#### 4.Then stop the container using:
```
docker stop <container-id>
```

Replace <container-id> with the actual ID of your running container.

## 5. Checking Out the Project
After running the project successfully, you can check it out by visiting:

http://localhost:8000
Open this URL in your web browser to access the TaskMaster application.
