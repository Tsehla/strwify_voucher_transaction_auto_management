# # Use a Node.js base image with the desired version
# FROM node:18.13.0-alpine

# # Create app directory
# WORKDIR /usr/src/app

# # Copy package.json and package-lock.json (if present)
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy app source code
# COPY . .

# # Expose the port for your Node.js app (replace with your actual port)
# EXPOSE 8084

# # Start the Node.js app
# CMD [ "node", "index.js" ]
# -------------------------------------------------------------


# Use a Node.js base image with the desired version
FROM node:18.13.0-alpine

# Install MongoDB v3.6
RUN apk update && \
    apk add --no-cache mongodb=3.6.23-r0

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if present)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app source code
COPY . .

# Expose the port for your Node.js app (replace with your actual port)
EXPOSE 8084

# Start the MongoDB service and the Node.js app
CMD mongod --fork --logpath /var/log/mongodb.log --dbpath /data/db && node index.js
