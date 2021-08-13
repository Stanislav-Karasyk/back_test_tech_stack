const Bikes = require('../model/bikes');
// const Bike = require('../services/schemas/bike');

const listBikes = async (req, res, next) => {
  try {
    const bikes = await Bikes.listBikes();
    return res.json({
      status: "Success",
      code: 200,
      message: "Bike list found",
      data: {
        bikes,
      },
    });
  } catch (e) {
    next(e);
  }
};

const addBike = async (req, res, next) => {
  try {
    const bike = await Bikes.addBike(req.body);
    return res.status(201).json({
      status: "Success",
      code: 201,
      message: "Bike successfully created",
      data: {
        bike,
      },
    });
  } catch (e) {
    next(e);
  }
};

const removeBike = async (req, res, next) => {
  try {
    const bike = await Bikes.removeBike(
      req.params.bikeId
    );
    if (bike) {
      return res.json({
        status: "Success",
        code: 200,
        message: "Bike deleted",
        data: {
          bike,
        },
      });
    } else {
      return res.status(404).json({
        status: "Error",
        code: 404,
        message: "Not Found",
      });
    }
  } catch (e) {
    next(e);
  }
};

const updateBike = async (req, res, next) => {
  try {
    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({
        status: "Error",
        code: 400,
        message: "Bad request",
      });
    }
    const bike = await Bikes.updateBike(
      req.params.bikeId,
      req.body
    );
    if (bike) {
      return res.json({
        status: "Success",
        code: 200,
        message: "Bike updated successfully",
        data: {
          bike,
        },
      });
    } else {
      return res.status(404).json({
        status: "Error",
        code: 404,
        message: "Not Found",
      });
    }
  } catch (e) {
    next(e);
  }
};

const updateStatusBike = async (req, res, next) => {
  try {
    const bike = await Bikes.updateStatusBike(
      req.params.bikeId,
      req.body,
    );
    if (bike) {
      return res.json({
        status: 'success',
        code: 200,
        message: 'Bike updated',
        data: {
          bike,
        },
      });
    } else {
      return res.status(404).json({
        status: 'error',
        code: 404,
        message: 'Not Found',
      });
    }
  } catch (e) {
    next(e);
  }
};

module.exports = {
  listBikes,
  addBike,
  updateBike,
  removeBike,
  updateStatusBike,
};
