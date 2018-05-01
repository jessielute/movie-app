//MOVIE APP

//BOILERPLATE CODE
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.listen(8080, () => {
    console.log('Server Started on http://localhost:8080');
    console.log('Press CTRL + C to stop server');
});

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});