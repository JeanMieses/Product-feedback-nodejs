const express = require('express');
const app = express();
var methodOverride = require('method-override');

//serving static files
app.use(express.static('public'))
app.set('view engine', 'ejs');
app.use(methodOverride('_method'))

//get all feedbacks
app.get('/', (req, res) => {
   res.render('feedback/index');
})

// create a new feedback
app.get('/new', (req, res) => {
    res.render('feedback/new');
})

app.post('/', (req, res) => {
    res.send('creating new');
})

// Get one feedback
app.get('/:id', (req, res) => {
    res.render('feedback/feedback');
})

// update a feedback
app.get('/:id/edit', (req, res) => {
    res.render('feedback/edit');
})

app.put('/:id', (req, res) => {
    res.send('Updating feedback');
})

//delete a feedback
app.delete('/:id', (req, res) => {
    res.send('deleting');
})


app.listen(3000, () => {
    console.log('Server started on port 3000');
});