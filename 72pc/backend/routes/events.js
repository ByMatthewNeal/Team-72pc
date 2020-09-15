const router = require('express').Router();
const Events = require('../models/events');

router.route('/').get((req,res) => {
    Events.find()
        .then(events => res.json(events))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const title = req.body.title;
    const date = Date.parse(req.body.date);
    const location = req.body.location;
    const picture = req.body.picture;
    const details = req.body.details;

    const newEvent = new Events ({
        title,
        date,
        location,
        picture,
        details,
    })

    newEvent.save()
        .then(() => res.json('Event Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req,res) => {
    Events.findById(req.params.id)
    .then(events => res.json(events))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Events.findByIdAndDelete(req.params.id)
        .then(() => res.json('Events deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').put((req,res) => {
    Events.findById(req.params.id)
    .then(events => {
        events.title = req.body.title;
        events.date = Date.parse(req.body.date);
        events.location = req.body.location;
        events.picture = req.body.picture;
        events.details = req.body.details;

        events.save()
        .then(() => res.json('Event Updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;