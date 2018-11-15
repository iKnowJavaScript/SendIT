import parcels from '../database/data';

class ParcelDelivery {
    getAllParcels(req, res) {
        res.status(200).json({
            message: 'Successfully retrieved all parcel orders',
            parcels: parcels,  
        });
    }

    getSingleParcel(req,res) {
        const parcelId = parseInt(req.params.parcelId, 10);
        const parcel = parcels.find(parcelData => parcelData.parcelId === parcelId);
        if(parcel) {
            res.status(200).json({
                message: 'Parcel order successfully retrieved',
                parcel,
            });
        }else{
            res.status(404).json({
                message: 'Parcel order does not exist',
            });
        }
    }

    // work on this
    getUserParcels(req,res) {
        const parcelArray = [];
        const userId = parseInt(req.params.userId, 10);
        parcelArray.push(parcels.find(parcelData => parcelData.userId === userId));
        const parcel = parcelArray;
        if(parcel) {
            res.status(200).json({
                message: 'User Parcels successfully retrieved',
                parcel,
            });
        }else{
            res.status(404).json({
                message: 'User does not exist',
            });
        }   
    }

    // create Parcel order
    createParcelOrder(req, res) {
        if (!req.body.weight) {
          return res.status(400).json({
            message: 'weight is required',
          });
        } if (!req.body.receiver) {
          return res.status(400).json({
            message: 'receiver\'s name is required',
          });
        } if (!req.body.pickup) {
          return res.status(400).json({
            message: 'pickup location is required',
          });
        } if (!req.body.destination) {
          return res.status(400).json({
            message: 'destination is required',
          });
        } if (!req.body.userId) {
          return res.status(400).json({
            message: 'userId is required',
          });
        }
        const parcelData = {
          parcelId: parcels.length + 1,
          userId: req.body.userId,
          weight: req.body.weight,
          receiver: req.body.receiver,
          pickup: req.body.pickup,
          destination: req.body.destination,
        };
    
        parcels.push(parcelData);
        return res.status(201).json({
          message: 'parcel order added successfully',
          parcelData,
        });
      }
    
      // cancel parcel order
      cancelParcelOrder(req, res) {
        let targetParcel;
        const parcelId = parseInt(req.params.parcelId, 10);
    
        parcels.forEach((parcel, index) => {
          if (parcel.parcelId === parcelId) {
            targetParcel = parcel;
            parcels.splice(index, 1);
          }
        });
    
        if (targetParcel) {
          return res.status(200).json({
            message: 'Parcel order has been cancelled successfully',
          });
        }
        return res.status(404).json({
          message: 'parcel order not found',
        });
      }
      
      // Update parcel order detail
      changeDestination(req, res) {
        const parcelId = parseInt(req.params.parcelId, 10);
        let parcelOrder;
        let parcelIndex;
    
        parcels.map((parcelData, index) => {
          if (parcelData.parcelId === parcelId) {
            parcelOrder = parcelData;
            parcelIndex = index;
          }
        });
    
        if (!req.body.destination) {
          return res.status(404).json({
            message: 'Only destination can be change',
          });
        }
    
        const changeDestination = {
          parcelId: parcelOrder.parcelId,
          userId: parcelOrder.userId,
          weight: parcelOrder.weight,
          receiver: parcelOrder.receiver,
          pickup: parcelOrder.pickup,
          destination: req.body.destination,
        };
    
        parcels.splice(parcelIndex, 1, updateParcelOrder);
    
        return res.status(201).json({
          message: 'Parcel order destination changed',
          changeDestination,
        });
    }
}


const Parcels = new ParcelDelivery();
export default Parcels;