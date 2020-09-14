const router = require('express').Router();
const News = require('../models/news');
let news = require('../models/news.model')

router.route('/').get((req,res) => {
    Event.find()
        .then(news => res.json(exercises))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const title = req.body.title;
    const date = Date.parse(req.body.date);
    const picture = req.body.picture;
    const story = req.body.story;

    const newNews = new Event({
        title,
        date,
        picture,
        story,
    })

    newNews.save()
        .then(() => res.json('News Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req,res) => {
    News.findById(req.params.id)
    .then(news => res.json(news))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    News.findByIdAndDelete(req.params.id)
        .then(() => res.json('News deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req,res) => {
    News.findById(req.params.id)
    .then(news => {
        news.title = req.body.title;
        news.date = Date.parse(req.body.date);
        news.picture = req.body.picture;
        news.story = req.body.story;

        news.save()
        .then(() => res.json('News Updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;