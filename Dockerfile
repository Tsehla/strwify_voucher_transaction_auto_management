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

# Install necessary dependencies
RUN apk add --no-cache \
    curl \
    tar \
    tzdata \
    ca-certificates \
    && update-ca-certificates

# Download and install MongoDB v3.6
RUN curl -O https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-3.6.23.tgz \
    && tar -zxvf mongodb-linux-x86_64-3.6.23.tgz \
    && mv mongodb-linux-x86_64-3.6.23 /usr/local/mongodb \
    && rm mongodb-linux-x86_64-3.6.23.tgz \
    && ln -s /usr/local/mongodb/bin/* /usr/local/bin/

# Create MongoDB data directory
RUN mkdir -p /data/db

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
