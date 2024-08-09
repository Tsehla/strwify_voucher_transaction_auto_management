# # Use a Node.js base image with the desired version
FROM node:18.13.0-alpine

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

# Start the Node.js app
# CMD [ "node", "index.js" ]
CMD [ "npm", "start" ]
# -------------------------------------------------------------

# FROM node:18.13.0-buster

# # Create app directory
# WORKDIR /app

# # Copy package.json and package-lock.json (if present)
# COPY package*.json ./

# # Install app dependencies
# RUN npm install

# # Copy app source code
# COPY . .

# # Expose the port for your Node.js app
# EXPOSE 8084

# # Start Node.js app
# CMD ["node", "index.js"]
