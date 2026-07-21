# Random Quote App

A simple web application that displays random quotes using the ZenQuotes API.  
Built with **Node.js (Express)** as a backend proxy to avoid CORS issues, and a static frontend with HTML, CSS, and JavaScript.  
Containerized with Docker for easy deployment.

---

## 🚀 Features
- Fetches random quotes from ZenQuotes API
- Backend proxy with Express to bypass CORS
- Copy-to-clipboard button for quotes
- Custom favicon for a polished look
- Dockerized for portability

---

## 🖥️ Run Locally
1. Clone the repo:
   ```bash
   git clone https://github.com/YOURUSERNAME/random-quote-app.git
   cd random-quote-app

1. Clone the repo:
   *(Run in your terminal or gitbash preferably)*
   git clone https://github.com/drizljr144/todo-app.git
   cd todo-app
2. Install dependencies:
    npm install
3. Run the app:
    npm start
4. Open in browser:
    http://localhost:4000

DOCKER INSTRUCTIONS
1. Build the image
    docker build -t random-quote-app .
2. Run the container
    docker run -p 8080:4000 drizljr144random-quote-app:latest
3. Open in browser
    http://localhost:4000

4. Pull from Dockerhub
    docker pull drizljr144/random-quote-app:latest
    
    docker run -p 8080:4000 drizljr144random-quote-app:latest
    (*This is to pull the prebuilt image*)

PROJECT STRUCTURE
(*it was fun to type*)

random-quote-app/
│── server.js        # Express backend proxy
│── public/
│   ├── index.html   # Frontend
│   ├── style.css    # Styling
│   ├── script.js    # Client-side logic
│   └── favicon.ico  # Tab icon
│── package.json     # Dependencies
│── Dockerfile       # Container instructions
│── README.md        # Documentation