const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./controllers/auth');
const resetPasswordRoutes = require('./controllers/resetPassword')
const testImageUploadRoutes = require('./controllers/testImageUpload');
const dotenv = require('dotenv')
dotenv.config();
const PORT = process.env.PORT;
const mongoose = require('mongoose');

app.use(cors());
app.use(bodyParser.json({limit:'200mb'}));
// mongodb+srv://mongodb:<password>@cluster0.ls1pe.mongodb.net/<dbname>?retryWrites=true&w=majority
mongoose.connect('mongodb+srv://mongodb:1234@cluster0.ls1pe.mongodb.net/Instagram?retryWrites=true&w=majority', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
});

app.use('/auth',authRoutes)
app.use('/reset',resetPasswordRoutes)
app.use('/api',testImageUploadRoutes)
app.use((req,res,next)=>{
    res.status(404).send("Page not found");
});
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
