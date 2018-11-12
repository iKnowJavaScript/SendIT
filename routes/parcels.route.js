const router = require('express').Router();
const parcels = require('../database/data');

router.get('/', (req, res) => {
	if (!parcels) {
		res.status(404).json({ message: 'No Parcel found' });
	}
	res.json(parcels);
});

// get a single parcel
router.get('/:quote', (req, res) => {
	const reqQuote = req.params.quote;
	const parcel = parcels.find(c => c.quote === parseInt(reqQuote));
	// if there is no such quote
	if (!parcel) res.status(404).json({ message: 'No Parcel found' });
	res.json(parcel);
});


// add new parcel
router.post('/parcels', (req, res) => {
	const parcel = {
		quote: parcels.length + 1,
		username: req.body.username,
		date: req.body.date,
	};

	parcels.push(parcel);

	res.json(parcel);
});

// updating parcel detail
router.put('/parcels/:quote', (req, res) => {
	const reqQuote = req.params.quote;
	const parcel = parcels.find(c => c.quote === parseInt(reqQuote));

	const index = parcels.indexOf(parcel);
	const keys = Object.keys(req.body);

	keys.forEach(key => { 
		parcel[key] = req.body[key] 
		});

	parcels[index] = parcel;

	res.json(parcels[index]);
});

// deleting data
router.delete('/parcels/:quote', (req, res) => {
	const reqQuote = req.params.quote;
	const parcel = parcels.find(c => c.quote === parseInt(reqQuote));

	const index = parcels.indexOf(parcel);

	parcels.splice(index, 1);

	res.json({ message: `User ${reqQuote} deleted` });
});

module.exports = router;