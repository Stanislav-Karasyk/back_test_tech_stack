const Bike = require("../services/schemas/bike");

const listBikes = async () => {
  const data = await Bike.find({});
  return data;
};

const addBike = async (body) => {
  const data = Bike.create(body);
  return data;
};

const updateBike = async (bikeId, body) => {
  const data = await Bike.findByIdAndUpdate(
    { _id: bikeId },
    { ...body },
    { new: true }
  );
  return data;
};

const removeBike = async (bikeId) => {
  const data = await Bike.findByIdAndRemove({ _id: bikeId });
  return data;
};

const updateStatusBike = async (bikeId, body) => {
  const data = await Bike.findByIdAndUpdate(
    { _id: bikeId },
    { ...body },
    { new: true }
  );
  return data;
};

module.exports = {
  listBikes,
  removeBike,
  addBike,
  updateBike,
  updateStatusBike,
};
