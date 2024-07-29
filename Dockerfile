# Use an official Node.js runtime as a parent image
FROM node:18.13.0

# Install MongoDB
RUN apt-get update && \
    apt-get install -y wget gnupg && \
    wget -qO - https://www.mongodb.org/static/pgp/server-3.6.asc | apt-key add - && \
    echo "deb [ arch=amd64,arm64 ] http://repo.mongodb.org/apt/debian stretch/mongodb-org/3.6 main" | tee /etc/apt/sources.list.d/mongodb-org-3.6.list && \
    apt-get update && \
    apt-get install -y mongodb-org=3.6.8 mongodb-org-server=3.6.8 mongodb-org-shell=3.6.8 mongodb-org-mongos=3.6.8 mongodb-org-tools=3.6.8 && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Create the MongoDB data directory
RUN mkdir -p /data/db

# Set the working directory
WORKDIR /usr/src/app

# Copy the current directory contents into the container at /usr/src/app
COPY . .

# Install app dependencies
RUN npm install

# Expose the port that MongoDB and your app will run on
EXPOSE 27017 8084

# Start MongoDB and your Node.js app
CMD mongod --fork --logpath /var/log/mongodb.log && node your-app.js
