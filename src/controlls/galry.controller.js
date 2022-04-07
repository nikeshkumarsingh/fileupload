const express = require("express");
const Galry = require("../models/galry.models.js");
const crudcontroller = require("./crud.cotroller");
const router = express.Router();
router.get("", async (req, res) => {
  try {
    const galry = await Galry.find().populate("userId").lean().exec();

    return res.status(200).send(galry);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});
router.post("", crudcontroller.post(Galry));
router.delete("/:id", crudcontroller.deleteOne(Galry));
module.exports = router;
