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


FROM node:18.13.0-buster

# Expose MongoDB port
EXPOSE 27017/tcp

# Create volumes for MongoDB data and logs
VOLUME /var/lib/mongodb
VOLUME /var/log/mongodb

# Install dependencies and MongoDB
RUN apt-get update -q && \
    apt-get install -y curl gnupg && \
    curl -fsSL https://www.mongodb.org/static/pgp/server-4.0.asc | apt-key add - && \
    echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/debian buster mongodb-org/4.0 main" | tee /etc/apt/sources.list.d/mongodb-org-4.0.list && \
    apt-get update && \
    apt-get install -y mongodb-org && \
    apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* ~/.cache ~/.npm

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

# Start Node.js app (MongoDB needs to be started separately)
CMD ["node", "index.js"]
