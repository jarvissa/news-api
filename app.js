const express = require('express');
const app = express();

const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const cors = require('cors');

require('dotenv/config');

const newsRoutes = require('./routes/news');

app.use(cors());
app.use(bodyParser.json());

app.use('/news', newsRoutes);

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log('Connected to the database!');
});

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});