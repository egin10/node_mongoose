const mongoose = require('mongoose'),
        Schema = mongoose.Schema;

// Schema ntuk membuat struktur dari collection(table) student yang berupa object
let studentSchema = new Schema({
    nim: String,
    nama: String,
    kelas: String
});

// Define model student dengan Schema studentSchema yang telah dibuat
// untuk menghubungkan collection di mongodb dengan model studentSchema.
let student = mongoose.model('student', studentSchema);

// Export model student
module.exports = student;