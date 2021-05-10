class LaporanController {
    static async lihatLaporan(req,res,next){
        res.send('OK! Meanmpilkan all laporan')
    }
    static async buatLaporan(req,res,next){
        res.send('OK! Laporan dibuat')
    }
}

module.exports =  LaporanController