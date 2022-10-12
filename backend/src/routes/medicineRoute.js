const express = require('express');
const {createMedicine, deleteMedicine, getMedicine, updateMedicine} = require('../controllers/medicineController.js');
const router = express.Router();
var multer  = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
var upload = multer({ storage: storage })
router.get('/',getMedicine);

router.post('/', createMedicine);

router.delete('/:id',  deleteMedicine);

router.put('/:id', updateMedicine);

router.post('/upload-medicine', upload.single('medicineImg'), async (req, res, next) =>{
    try {
        // const { medicineImg: { path, mimetype } } = req;
        // const result = await ;
        // res.status(result.status || 200).send(result.data);
      } catch (err) {
        next(err);
      }
  })

module.exports = router;