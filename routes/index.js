import express from 'express';
import parcels from './ParcelRoutes';

const router = express.Router();

router.use('/', parcels)
router.all('/', (req, res) => {
    res.json({ message: "welcome to the awesome api"});
});

export default router;