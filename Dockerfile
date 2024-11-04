# Use an official Cypress base image
FROM cypress/base:latest

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the Cypress project files to the container
COPY . .

# Expose the port if your application needs one
EXPOSE 4000

# Run Cypress tests, or start your application
CMD ["npm", "start"]
