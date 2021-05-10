const express = require("express");
const router = express.Router();

const laporanRoutes = require('./laporan')

router.get('/', (req, res) => {
    res.send('Hello World!! Produced By Capstone Swac team')
})

router.use('/laporan', laporanRoutes)

module.exports = router;
