const express = require("express");
const router = express.Router();

const LaporanController = require('../controllers/laporanController')

router.get("/", LaporanController.lihatLaporan);
router.post("/", LaporanController.buatLaporan);

module.exports = router;