const express = require("express");

//routes
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//express config
const app = express();

//Port (using 3000 in localhost)
const PORT = process.env.PORT || 3000;

//data parsing express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//using the routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//listener
app.listen(PORT, function() {
    console.log(`App listening on PORT: ${PORT}`);
});