const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Tetris time.');
});

app.listen(3000, () => console.log('Tetris app listening on port 3000!'));