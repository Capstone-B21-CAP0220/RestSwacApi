const data = require("../data/data")

class LaporanController {
    static async lihatLaporan(req,res,next){
        res.status(200)
        .send(data)
    }
    static async buatLaporan(req,res,next){
        const {nama, email, numberTelpon, deskripsi} = req.body
        if(nama && email && numberTelpon && deskripsi){
            res.status(201).json({mgs:"berhasil buat laporan", data:{nama,email,numberTelpon, "jenisLaporan":"kekerasan","tindakan":"polisi"}})
            res.send("data berhasil dibuat")
        }else{
            res.status(400).json({msg:"data gagal dibuat"})
        }
    }
}

module.exports =  LaporanController