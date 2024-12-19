# Docker Official Image Node
FROM node:18-alpine

# Set working directory in the container
WORKDIR /app

# Copy dependencies to container
COPY package.json /app

# Run commands for setting temporarily stop rigid SSL verification (this is not recommendable, we need SSL verification, it wouldn´t apply for real cases)
RUN npm config set registry http://registry.npmjs.org/ 

RUN npm config set "strict-ssl" false -g

# Install node_modules from package.json
RUN npm install

# Copy code
COPY . /app

# Expose the port from container
EXPOSE 5173

#Command for running the application
CMD [ "npm", "run", "dev", "--", "--host"]