const router = require('express').Router();
const News = require('../models/news');

router.route('/').get((req,res) => {
    News.find()
        .then(news => res.json(news))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const title = req.body.title;
    const date = Date.parse(req.body.date);
    const picture = req.body.picture;
    const story = req.body.story;

    const newNews = new News({
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

router.route('/:id').put((req,res) => {
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