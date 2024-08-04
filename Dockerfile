# Use the official Node.js image.
FROM node:18

# Set the working directory in the container.
WORKDIR /usr/src/app

# Copy package.json and package-lock.json.
COPY package*.json ./

# Install dependencies.
RUN npm install

# Install nodemon globally (optional but recommended for development)
RUN npm install -g nodemon

# Copy the rest of the application code into the working directory.
COPY . .

# Rebuild bcrypt using the container's architecture
RUN npm rebuild bcrypt --build-from-source

# Expose the port the app runs on.
EXPOSE 8000

# Define the command to run the app with nodemon.
CMD ["nodemon", "index.js"]