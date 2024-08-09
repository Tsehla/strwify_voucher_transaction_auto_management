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

# Use a Bitnami Node.js image that includes MongoDB
# FROM bitnami/node:18.13.0-debian-11-r0


FROM registry.gitlab.com/tozd/docker/dinit:ubuntu-bionic

# Expose MongoDB port
EXPOSE 27017/tcp

# Create volumes for MongoDB data and logs
VOLUME /var/lib/mongodb
VOLUME /var/log/mongod

# Install MongoDB
RUN apt-get update -q -q && \
  apt-get install --yes --force-yes mongodb && \
  apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* ~/.cache ~/.npm

# Copy MongoDB configuration and service files
# Ensure these paths are correct relative to the Dockerfile
COPY ./etc/service/mongod /etc/service/mongod
COPY ./log-3.0 /etc/service/mongod/log
COPY ./etc/mongodb.conf /etc/mongodb.conf

# Install Node.js
RUN apt-get update && \
    apt-get install -y curl gnupg && \
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Verify Node.js and npm installation
RUN node -v && npm -v

# Create app directory
WORKDIR /app

# Copy package.json and package-lock.json (if present)
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy app source code
COPY . .

# Expose the port for your Node.js app
EXPOSE 8084

# Start Node.js app (MongoDB is managed separately)
CMD ["node", "index.js"]
