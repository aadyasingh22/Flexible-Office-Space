const multer = require("multer");
const router = require("express").Router();

const mystorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./static/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const myStorage = multer({ storage: mystorage });

router.post("/uploadfile", myStorage.single("myfile"), (req, res) => {
  res.status(200).json({ status: "success" });
});

module.exports = router;