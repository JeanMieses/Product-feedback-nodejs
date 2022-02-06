const express = require('express');
const app = express();

//get all feedbacks
app.get('/', (req, res) => {
    res.send('Hello World!');
})

// create a new feedback
app.get('/new', (req, res) => {
    res.send('create new feedback');
})

app.post('/', (req, res) => {
    res.send('creating new');
})

// Get one feedback
app.get('/:id', (req, res) => {
    res.send('detail');
})


// update a feedback
app.get('/:id/edit', (req, res) => {
    res.send('update');
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