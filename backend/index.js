// import express
const express = require('express');

//initialize expess
const app = express();
const port = 5000;

//middlewares

app.use(express.json());
app.use(cors({
    origin : ['http://localhost:5173']
}));