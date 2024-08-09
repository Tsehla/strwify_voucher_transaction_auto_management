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
VOLUME /var/log/mongod

# Install MongoDB and supervisord
RUN apt-get update -q -q && \
  apt-get install --yes mongodb supervisor && \
  apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* ~/.cache ~/.npm

# Copy supervisord configuration file
COPY ./supervisord.conf /etc/supervisor/conf.d/supervisord.conf

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

# Start supervisord
CMD ["/usr/bin/supervisord"]
