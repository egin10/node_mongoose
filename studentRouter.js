const express = require('express'),
    mongoose = require('mongoose'),
    config = require('./database'),
    router = express.Router(),
    student = require('./studentModel');

// Hubungkan ke database
mongoose.connect(config.database);

// root
router.get('/', (req, res) => {
    res.send('Akademis API');
});

// ambil semua data dari collection students
router.get('/all', (req, res) => {
    student.find( {}, (err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.json(data);
        }
    })
});

// ambil data by nim dari collection students
router.get('/:nim', (req, res) => {
    student.find( {"nim": req.params.nim}, (err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.json(data);
        }
    })
});

// simpan(add) data ke collection students (tabel)
router.post('/add', (req, res) => {
    let mhs = new student();
    mhs.nim = req.body.nim;
    mhs.nama = req.body.nama;
    mhs.kelas = req.body.kelas;

    //Simpan ke Collection Student
    mhs.save((err) => {
        if (err) {
            res.send(err);
        }
        res.json({ "status": "200", "ket": "success" });
    });
});

// Update data collection students
router.post('/update', (req, res) => {
    student.update({ "nim": req.body.nimLama },
        { "nim": req.body.nim, "nama": req.body.nama },
        (err, data) => {
            if (err) {
                res.send(err);
            }
            res.json({ "status": "200", "ket": "success" });
        });
});

// Hapus data collection students
router.get('/delete/:id', (req, res) => {
    student.remove({ "_id": req.params.id }, (err) => {
        if (err) {
            res.send(err);
        }
        res.json({ "status": "200", "ket": "success" });
    });
});

module.exports = router;