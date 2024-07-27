const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { db } = require("./model/dbConection");

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3001;

app.post("/api/siswa", (req, res) => {
  const namaSiswa = req.body.nama;
  const asalSiswa = req.body.asal;
  const nimSiswa = req.body.nim;

  const sqlQuery = "INSERT INTO siswa (nama, asal, nim) VALUE (?, ?, ?)";

  db.query(sqlQuery, [namaSiswa, asalSiswa, nimSiswa], (err, result) => {
    if (err) {
      console.log("error");
      console.log(err);
    } else {
      res.send(result);
      console.log("result");
    }
  });
});

app.get("/api/siswa", (req, res) => {
  const sqlQuery = "SELECT * FROM siswa";

  db.query(sqlQuery, (err, result) => {
    if (err) {
      console.log("error");
    } else {
      res.send(result);
      console.log("result");
    }
  });
});

app.put("/api/updateSiswa/:nim", (req, res) => {
  const nimSiswa = req.params.nim;
  const namaSiswa = req.body.nama;
  const asalSiswa = req.body.asal;

  const sqlQuery = "UPDATE siswa SET nama = ?, asal = ?  WHERE nim = ?";
  db.query(sqlQuery, [namaSiswa, asalSiswa, nimSiswa], (err, result) => {
    if (err) {
      console.log("error");
    } else {
      res.send(result);
      console.log(result);
    }
  });
});

app.delete("/api/deleteSiswa/:nim", (req, res) => {
  const nimSiswa = req.params.nim;

  const sqlQuery = "DELETE FROM siswa WHERE nim = ?";
  db.query(sqlQuery, [nimSiswa], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Gagal menghapus siswa.");
    } else if (result.affectedRows === 0) {
      // Jika tidak ada baris yang terhapus, kirim respons bahwa siswa tidak tersedia
      res.status(404).send("Siswa tidak tersedia.");
    } else {
      console.log(result);
      res.send("Siswa berhasil dihapus.");
    }
  });
});

app.patch("/api/editSiswa/:nim", (req, res) => {
  // Mengambil NIM siswa dari parameter URL
  const nimSiswa = req.params.nim;
  // Mengambil data nama dan asal siswa dari body request
  const namaSiswa = req.body.nama;
  const asalSiswa = req.body.asal;

  // Query SQL untuk memperbarui data siswa berdasarkan NIM
  const sqlQuery = "UPDATE siswa SET nama = ?, asal = ? WHERE nim = ?";
  db.query(sqlQuery, [namaSiswa, asalSiswa, nimSiswa], (err, result) => {
    if (err) {
      // Jika terjadi kesalahan saat query ke database, kirim respons dengan status 500 dan pesan kesalahan
      console.error("Error updating siswa:", err);
      res
        .status(500)
        .send({ error: "Terjadi kesalahan saat memperbarui informasi siswa." });
    } else if (result.affectedRows === 0) {
      // Jika tidak ada baris yang diperbarui, kirim respons dengan status 404 dan pesan bahwa siswa tidak ditemukan
      res.status(404).send({ error: "Siswa tidak ditemukan." });
    } else {
      // Jika berhasil, kirim respons dengan pesan sukses dan hasil query
      res.send({ message: "Informasi siswa berhasil diperbarui.", result });
      console.log("Siswa diperbarui:", result);
    }
  });
});

app.head("/api/headSiswa/:nim", (req, res) => {
  // Mengambil NIM siswa dari parameter URL
  const nimSiswa = req.params.nim;

  // Query SQL untuk memeriksa apakah data siswa dengan NIM tertentu ada
  const sqlQuery = "SELECT 1 FROM siswa WHERE nim = ?";
  db.query(sqlQuery, [nimSiswa], (err, result) => {
    if (err) {
      // Jika terjadi kesalahan saat query ke database, kirim respons dengan status 500
      console.error("Error checking siswa:", err);
      res.status(500).send();
    } else if (result.length === 0) {
      // Jika siswa tidak ditemukan, kirim respons dengan status 404
      res.status(404).send();
    } else {
      // Jika siswa ditemukan, kirim respons dengan status 200 tanpa isi
      res.status(200).send();
    }
  });
});

app.listen(port, () => {
  console.log("Server berjalan di port " + port);
});
