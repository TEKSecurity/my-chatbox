# my-chatbox
Wanted to make my own chatgpt for fun. 

AI Chatbox Home Lab

A locally hosted ChatGPT-style chat application built with **Node.js**, **Express**, and the **OpenAI API**.  
This project demonstrates a simple full-stack setup, secure API key handling, and local development best practices.

Features
- Local web-based chat interface
- Backend API using Node.js + Express
- Secure API key handling via environment variables
- Uses OpenAI Responses API
- Simple, clean UI
- Designed as a home-lab / learning project
- 
Technologies Used
- Node.js
- Express
- HTML / CSS / JavaScript
- OpenAI API

npm install

Create an OpenAI API key

Go to: https://platform.openai.com/api-keys

Create a new secret key

Copy it (you will only see it once)
$env:OPENAI_API_KEY="sk-your-api-key-here"
echo $OPENAI_API_KEY to verify
node server.js
http://localhost:3000


