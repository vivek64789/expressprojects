const multer = require('multer');

// file upload 
const storage = multer.diskStorage({
    destination: function (req,file,cb) {
        cb(null, './src/assets/images/');
    },
    filename: function (req,file, cb) {
        cb(null, Date.now()+file.originalname);
    }
});

// const filterImages = function (req,file,cb) {
//     return (req,file,cb) => {
//         if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
//             cb(null,true);
//         }else{
//             cb(null,false);
//         }
//     }
// }
    
const upload = multer({storage: storage});


module.exports = upload;