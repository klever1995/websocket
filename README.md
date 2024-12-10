# WebSocket with Node.js in Docker

A simple WebSocket server using Node.js, dockerized for easy execution in any environment.

## Description

This is a basic WebSocket server implemented with Node.js. The server listens for WebSocket connections on port 8080 and sends a "Hello, World!" message to all connected clients. It also logs messages received from clients.

### Changes:
- Now, the server serves an `index.html` file for easy WebSocket client testing through a browser.
- WebSocket connection is established at `ws://localhost:8080`.

## Technologies Used

- Node.js
- WebSocket (ws library)
- Docker
- HTML (for testing via browser)

## Prerequisites

To run this project, you need to have Docker installed on your machine. If you don't have it, you can download it from [here](https://www.docker.com/products/docker-desktop).

## Instructions to Run the Project

1. **Clone this repository:**

   If you haven't cloned the repository yet, you can do so with the following command:

   ```bash
   git clone git clone git clone https://github.com/klever1995/websocket.git

2. **Build the Docker image:**

   Before running the container, build the Docker image using the following command:

   ```bash
   docker build -t ksrobalino/websocket:v1 .

3. **Push the image to Docker Hub (if needed):**

   If you'd like to upload the image to Docker Hub for others to use, you can do so with:

   ```bash
   docker push ksrobalino/websocket:v1

4. **Run the Docker container:**

   After building the image, run the container with the following command:

   ```bash
   docker run -d -p 8080:8080 --name websocket_container ksrobalino/websocket:v1

5. **Access the WebSocket server:**

   Once the container is running, you can connect to the WebSocket server using the following WebSocket URL:
   ```bash
   ws://localhost:8080
   
You can use a WebSocket client to test the connection. For example, use a WebSocket client extension in your browser or a WebSocket tool like [websocat](https://github.com/vi/websocat).

6. **Test the connection:**

-**When a client connects,** it will receive the message "Hello, World!".
-**If the client sends a message back to the server,** the server will log that message to the console

### Example of WebSocket Communication:

#### Client:
1. Connect to `ws://localhost:8080`.
2. Send the message: `"Hello from client"`.

#### Server:
1. The server will receive the message and print it in the terminal.
2. The server will respond with the message `"Hello, World!"`.

### Example Server Log:

```bash
Received message: Hello from client


