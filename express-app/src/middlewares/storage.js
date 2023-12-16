import multer from 'multer';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/public/img/uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({storage:storage})

export const uploadImg = mulimport multer from "multer"

const guardar = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, "./public/uploads")
    },
    filename: (req,file,cb) =>{
        if(file !== null){
            const ext = file.originalname.split('.').pop()
            cb(null,Date.now()+'.'+ext)
        }
    } 
})

const filtro = (req,file,cb) => {
    if(file && (file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/png')){
        cb(null,true)
    }else{
        cb(null,false)
    }
}
export const subirImagen = 