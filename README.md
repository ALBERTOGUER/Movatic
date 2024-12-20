# Movatic
## Description
### The current project includes a complete environment comprising a **frontend** built with **React and Vite** and a backend powered by Python and Flask, all runnig in Docker containers. It displays a table of station data from bike-share systems across the globe. 

## Prerequisites
1. Docker: Install Docker following the [official guide](https://www.docker.com/).
2. Docker Compose: Ensure you have Docker Compose installed (it comes bundled with Docker Desktop).
3. Node.js Install Node.js (preferably the latest LTS version) from [here](https://nodejs.org/en/download/package-manager/current)
4. Visual Studio Code (optional): Download from [here](https://code.visualstudio.com/download).
5. Docker Extension for VSCode (optional): Install it from the VSCode Marketplace.

## Steps to Run the Project
### 1. First Run - Force Build

This ensures all images are built from scratch, ignoring the cache:

`docker-compose up --build`

### 2. Run Without Building

If no changes were made and rebuilding is unnecessary, run:

`docker-compose up`

### 3. Run in Detached Mode (Background)

To run containers in the background (without showing logs):

`docker-compose up -d`

To stop containers running in detached mode:

`docker-compose down`

## Additional Commands

### 1. Build Without Cache

To force Docker to rebuild images without using the cache:

`docker-compose build --no-cache`

### 2. Build Specific Images

To build only a single service image:

`docker-compose build <service-name>`

For example:

`docker-compose build backend`

### 3. Run a Service in Interactive Mode

Useful for debugging or testing:

`docker-compose run <service-name>`

## Using Docker in Visual Studio Code

To simplify Docker operations, you can use the Docker extension in VSCode:
1. Open your project in VSCode.
2. Install the Docker extension:\
• Go to the Extensions panel in VSCode.\
• Search for Docker and install it.
3. Use the Docker sidebar to:\
• View images and containers.
• Build images.\
• Start or stop containers.\

## Cleanup

1. Stop and Remove Containers and Networks

`docker-compose down`

2. Remove Specific Images

`docker rmi <image-id>`

3. Remove All Docker Resources (Containers, Images, Networks, Volumes)

⚠️ Use with caution; this will remove everything.

`docker system prune -a`

## Project Structure

├── backend/         # Backend code and configuration (Python/Flask)\
│   ├── Dockerfile\
│   └── app.py\
├── frontend/        # Frontend code and configuration (React/Vite)\
│   ├── Dockerfile\
│   └── src/\
├── docker-compose.yml  # Docker services configuration\
└── README.md           # This file\

## Common Issues & Solutions
Ensure you have all dependancies installed. Run
`npm install`
`pip install -r requirements.txt`
If the set up takes a lot of time try running\
`docker login`
