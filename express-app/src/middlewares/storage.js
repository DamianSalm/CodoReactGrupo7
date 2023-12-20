import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "/img/uploads");
  },
  filename: function (req, file, cb) {
    console.log("file: ", file)
    
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
},});

const filtro = (req, file, cb) => {
  if (
    file &&
    (file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/png")
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

export const uploadImg = multer({ storage: storage, fileFilter: filtro });
