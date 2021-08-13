const express = require("express");
const router = express.Router();
const bikesController = require("../../controllers/bikes");

router.get("/", bikesController.listBikes).post("/", bikesController.addBike);

router
  .delete("/:bikeId", bikesController.removeBike)
  .patch("/:bikeId", bikesController.updateBike);

router.patch("/:bikeId/availability", bikesController.updateStatusBike);
module.exports = router;
