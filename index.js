const express = require('express')
const mongoose = require('mongoose');
const Todo = require('./models/todo.model.js');
const todoRoute = require('./routes/todo.route.js');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/todos', todoRoute);

app.get('/', (req, res) => {
    res.send("Hello from node API server updated");
});

mongoose.connect("mongodb://localhost:27017")
.then(()=>{
    console.log("Connected to database");
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });
})
.catch(() =>{
console.log("Connection failed");
});
