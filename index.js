const express = require('express');
const app = express();
const path = require('path');

// allows us to use EJS
app.set('view engine', 'ejs');

// this joins the path name of this file index.js with '/views';
// allows for running index.js outside of working directory. 
app.set('views', path.join(__dirname, '/views'));


app.get('/', (req, res) => {
    res.render('home');  // aka 'views/home.ejs'
})

app.get('/cats', (req, res) => {
    const cats = [
        'Blue', 'Rocket', 'Monty', 'Stephanie', 'Winston'
    ]

    res.render('cats', { allCats: cats });
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.render('subreddit', { subreddit });
})

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random', { rand: num }); // the render method's 2nd arg accepts object with key-value pairs;
                                        // this object is pushed thru to html and accesible there with key.
})

app.listen(3000, () => {
    console.log("Listening on port 3000");
})