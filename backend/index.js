// import express
const express = require('express');
const userRouter = require('./routers/userRouter');
const spaceRouter = require('./routers/spaceRouter');
const bookingRouter = require('./routers/bookingRouter');
const feedbackRouter = require('./routers/feedbackRouter');
const cors = require('cors');

//initialize expess
const app = express();
const port = 5000;

//middlewares

app.use(express.json());
app.use(cors({
    origin : ['http://localhost:5173']
}));

app.use('/user', userRouter);
app.use('/space', spaceRouter);
app.use('/booking', bookingRouter);
app.use('/feedback', feedbackRouter);


//routes
app.get('/', (req, res) => {
    res.send('response from express');
});

app.get('/home', (req, res) => {
    res.send('response from home');
});

app.get('/add', (req, res) => {
    res.send('response from add');
});

app.get('/getall', (req, res) => {
    res.send('response from getall');
})

app.listen(port, () => {
    console.log('server started');
} );