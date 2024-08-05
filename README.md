# TaskMaster

TaskMaster is a Node.js application for managing tasks. This application provides CRUD (Create, Read, Update, Delete) operations for tasks and user authentication using JWT (JSON Web Tokens). 

## Features

- Create, read, update, and delete tasks
- User authentication and authorization
- API documentation using Swagger
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


## 2. Usage

### Start the Application
To start the application in development mode, use:

```
npm install -g nodemon

nodemon
```

### 3. API Documentation
The API documentation is available via Swagger UI:
Swagger UI: http://localhost:8000/api-docs


## 4 Docker Setup

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

