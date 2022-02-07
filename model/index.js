const mongoose = require('mongoose');
require('dotenv').config();
const dbURI = process.env.MONGODB_URI;

//connecting to DB
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('CONNECTION OPEN');
    }).catch((err) => {
        console.log('Failed to connect');
        console.log(err);
    })


const feedbackSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    category: {
        type: String,
        enum: ['enhancement', 'feature', 'bug', 'UI', 'UX'],
    },

    upvotes: {
        type: Number,
        required: true,
    },

    // status: {
    //     type: String,
    //     required: true
    // },

    description: {
        type: String,
        required: true
    }
})

const Feedback = mongoose.model('Feedback', feedbackSchema);
module.exports = Feedback;