const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// This will print to server console method that was used ("GET/POST/PUT/DELETE") where and when.
app.use((req, res, next) => {
    const url = req.url;
    const method = req.method;
    const requestedAt = new Date().toLocaleTimeString();
    const result = `${method} ${url} ${requestedAt}`;
    console.log(result);
    next();
});


const  uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const connection = mongoose. connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
})

const eventRouter = require('./routes/events')
const newsRouter = require('./routes/news')



app.use('/events', eventRouter);
app.use('/news', newsRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});