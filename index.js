const express = require('express');
const app = express();
const methodOverride = require('method-override');
const Feedback = require('./model/index');

//serving static files
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));
app.get('/favicon.ico', (req, res) => res.status(204)); //I needed this line code to avoid the favicon.ico error
app.use(express.urlencoded({extended: true}));

//get all feedbacks
app.get('/', async(req, res) => {
   const feedbacks = await Feedback.find();
   res.render('feedback/index', {feedbacks});
})

// create a new feedback
app.get('/new', (req, res) => {
    res.render('feedback/new');
})

app.post('/', async (req, res) => {
    const {title, category, description} = req.body;
    const feedback = new Feedback({title, category, description, upvotes: 0});
    await feedback.save();
    res.redirect('/');
})

// Get one feedback
app.get('/:id', async(req, res) => {
    const feedback = await Feedback.findById(req.params.id);
    res.render('feedback/feedback', {feedback});
})

// update a feedback
app.get('/:id/edit', async(req, res) => {
    const feedback = await Feedback.findById(req.params.id);
    res.render('feedback/edit', {feedback});
})

app.put('/:id', async(req, res) => {
    const {title, category, description} = req.body;
    const feedback = await Feedback.findByIdAndUpdate(req.params.id, {title, category, description});
    await feedback.save();
    res.redirect(`/${req.params.id}`);
})

//delete a feedback
app.delete('/:id', async(req, res) => {
    await Feedback.findByIdAndDelete(req.params.id);
    res.redirect('/');
})

app.listen(3000, () => {
    console.log('Server started on port 3000');
});