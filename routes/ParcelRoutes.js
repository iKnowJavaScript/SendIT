import express from 'express';
import Parcels from '../controller/ParcelController';

const router = express.Router();

// get app parcel order
router.get('/api/v1/parcels', Parcels.getAllParcels);

// get a single parcel
router.get('/api/v1/parcels/:parcelId', Parcels.getSingleParcel);

// get specific user parcel
router.get('/api/v1/users/:userId/parcels', Parcels.getUserParcels);


// add new parcel order
router.post('/api/v1/parcels', Parcels.createParcelOrder);

// updating parcel detail
router.patch('/api/v1/parcels/:parcelId', Parcels.changeDestination);

// cancel parcel delivery
router.put('/api/v1/parcels/:parcelId/cancel', Parcels.cancelParcelOrder);

export default router;