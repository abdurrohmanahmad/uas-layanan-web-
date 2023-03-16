const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const {db} = require('./model/dbConection')

const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

const port = 3001;

//REad data
app.get('/api/readDataUMKM', (req, res) => {
    const sqlQuery = "SELECT * FROM profil";

    db.query(sqlQuery, (err, result) => {
        if(err){
            console.log("error")
        }else{
            res.send(result);
            console.log("result")
        }
    })
  });

//REad Data Id

app.get('/api/readDataUMKM/:id', (req, res) => {
    const userId = req.params.id;
    
    const sqlQuery = "SELECT * FROM profil WHERE id = ?";
    db.query(sqlQuery, userId, (err, result) => {
        if(err){
            console.log("err")
        }else{
            res.send(result)
            console.log("result")
        }
    })
})

//CReate Data UMKM
app.post('/api/createDataUMKM', (req, res) => {
    const namaUMKM = req.body.nama_umkm;
    const namaOwner = req.body.nama_owner;
    const profilURL = req.body.profil_url;
    const gambarOwner = req.body.gambar_owner;
    const detailUMKM= req.body.detail_umkm;
    const alamatPerusahaan = req.body.alamat_perusahaan;
    const mottoUMKM = req.body.motto_umkm;
    const pass = req.body.password;
  
    const sqlQuery = "INSERT INTO profil (nama_umkm, nama_owner, profil_url, gambar_owner, detail_umkm, alamat_perusahaan, motto_umkm, password) VALUE (?, ?, ?, ?, ?, ?, ?, ?)";

    db.query(sqlQuery, [namaUMKM, namaOwner, profilURL, gambarOwner,detailUMKM, alamatPerusahaan, mottoUMKM, pass], (err, result) => {
        if(err){
            console.log("error")
            console.log(err)
        }else{
            res.send(result);
            console.log("result")
            
        }
    })
  });


//EDit or UPdate

app.put('/api/updateDataUMKM', (req, res) => {
    const namaUMKM = req.body.nama_umkm;
    const namaOwner = req.body.nama_owner;
    const profilURL = req.body.profil_url;
    const gambarOwner = req.body.gambar_owner;
    const detailUMKM= req.body.detail_umkm;
    const alamatPerusahaan = req.body.alamat_perusahaan;
    const mottoUMKM = req.body.motto_umkm;
    const pass = req.body.password;
  
    const sqlQuery = "UPDATE profil SET nama_umkm = ?, nama_owner = ?, profil_url = ?, gambar_owner = ?, detail_umkm = ?, alamat_perusahaan = ?, motto_umkm = ?, password = ? WHERE nama_umkm = ?";

    db.query(sqlQuery, [namaUMKM, namaOwner, profilURL, gambarOwner,detailUMKM, alamatPerusahaan, mottoUMKM, pass], (err, result) => {
        if(err){
            console.log("error")
            console.log(err)
        }else{
            res.send(result);
            console.log("result")
            
        }
    })
  });

// app.put('/api/updateDataUMKM', (req, res) => {
//     const namaUMKM = req.body.nama_umkm;
//     const namaOwner = req.body.nama_owner;
//     const profilURL = req.body.profil_url;
//     const gambarOwner = req.body.gambar_owner;
//     const detailUMKM= req.body.detail_umkm;
//     const alamatPerusahaan = req.body.alamat_perusahaan;
//     const mottoUMKM = req.body.motto_umkm;
//     const pass = req.body.password;
   
  
//     const sqlQuery = "UPDATE profil SET nama_umkm = ?, nama_owner = ?, profil_url = ?, gambar_owner = ?, detail_umkm = ?, alamat_perusahaan = ?, motto_umkm = ?, password = ? WHERE nama_umkm = ? "

//     db.query(sqlQuery, [namaUMKM, namaOwner, profilURL, gambarOwner, detailUMKM, alamatPerusahaan, mottoUMKM, pass], (err, result) => {
//         if(err){
//             console.log(err)
//             console.log("error")
//         }else{
//             res.send(result);
//             console.log("result")
            
//         }
//     })
//   });


//DElete
app.delete('/api/deleteDataUMKM', (req, res) => {
    const userId = req.body.id;
  
    const sqlQuery = "DELETE FROM profil WHERE id = ?";
    db.query(sqlQuery, userId, (err, result) => {
      if(err){
        console.log("error");
      }else{
        res.send(result);
        console.log("result");
      }
    });
  });

  app.listen(port, () => {
    console.log("Server berjalan di port " + port)
})