const multer = require("multer");
var path = require('path');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./views/img");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() +  path.extname(file.originalname))
   
  },
});

module.exports = multer({ storage: storage });
