// import express
const express = require('express');
const userRouter = require('./routers/userRouter');
const spaceRouter = require('./routers/spaceRouter');
const bookingRouter = require('./routers/bookingRouter');
const feedbackRouter = require('./routers/feedbackRouter');
const utilRouter = require('./routers/util');
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
app.use('/util', utilRouter);

app.use(express.static('./static/uploads'));

//routes
app.get('/', (req, res) => {
    res.send('response from express');
});


app.listen(port, () => {
    console.log('server started');
} );