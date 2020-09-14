const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const  uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const connection = mongoose. connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
})

const aboutRouter = require('./routes/about');
const eventRouter = require('./routes/events')
const homeRouter = require('./routes/home')
const newsRouter = require('./routes/news')
const rosterRouter = require('./routes/roster')

app.use('/about', aboutRouter);
app.use('/event', eventRouter);
app.use('/home', homeRouter);
app.use('/news', newsRouter);
app.use('/roster', rosterRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});