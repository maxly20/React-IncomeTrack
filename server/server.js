const express = require('express');
const app = express();
const mongoose = require('mongoose');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');


// body parse
app.use(express.json())


// sanitize middleware
app.use(xss());
app.use(mongoSanitize());








const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`sever is running on port ${port}`);
});
