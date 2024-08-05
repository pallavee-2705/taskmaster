markdown
Copy code
# TaskMaster

TaskMaster is a Node.js application for managing tasks. This application provides CRUD (Create, Read, Update, Delete) operations for tasks and user authentication using JWT (JSON Web Tokens). 

## Features

- Create, read, update, and delete tasks
- User authentication and authorization
- API documentation using Swagger
- Docker containerization for easy deployment

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [API Documentation](#api-documentation)
4. [Docker Setup](#docker-setup)
5. [Contributing](#contributing)
6. [License](#license)

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [MongoDB](https://www.mongodb.com/) (for local development)

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/taskmaster.git
   cd taskmaster
Install Dependencies

bash
Copy code
npm install
Environment Variables

Create a .env file in the root directory and add the following variables:

plaintext
Copy code
JWT_SECRET=your_jwt_secret
MONGODB_URI=mongodb://localhost:27017/taskmaster
Replace your_jwt_secret with a secure random string.

Usage
Start the Application

To start the application in development mode, use:

bash
Copy code
npm start
By default, the application will run on http://localhost:8000.

Run Tests

To run the tests, use:

bash
Copy code
npm test
API Documentation
The API documentation is available via Swagger UI:

Swagger UI: http://localhost:8000/api-docs
Docker Setup
Prerequisites
Docker installed on your machine.
Build Docker Image
To build the Docker image for the application, run:

bash
Copy code
docker build -t taskmaster-app .
Run Docker Container
To run the Docker container, use:

bash
Copy code
docker run -p 8000:8000 taskmaster-app
This maps port 8000 of your local machine to port 8000 in the Docker container.

Stop Docker Container
To stop the Docker container, first find the container ID using:

bash
Copy code
docker ps
Then stop the container using:

bash
Copy code
docker stop <container-id>
Replace <container-id> with the actual ID of your running container.

Contributing
If you'd like to contribute to the project, please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature/YourFeature).
Make your changes and commit (git commit -am 'Add new feature').
Push to the branch (git push origin feature/YourFeature).
Create a new Pull Request.
