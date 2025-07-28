import multer from "multer";

const storage = multer.diskStorage({
    filename: function (req, file, callback) {
        callback(null, Date.now + file.originalname);
    }
})

export const upload = multer({storage})