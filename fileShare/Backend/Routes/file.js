const express =require("express") ;
const { fileModels } = require("../models/file.modes");
const router= express.Router() ;
const { uploadFile} = require("../Controler/uploadFile"); ;
const {upload} =require("../middleWare/multer")
router.post("/upload", upload.single("file"),uploadFile ) ;
router.get("/file/:fileId",async(req,res)=>{
    const Id= req.params.fileId
    try{ 
        const file = await fileModels.findById(Id);
        file.downloadContent++ ;
        file.save() ;
        res.download(file.path ,file.name)
        
console.log(file)
    }catch(err){
        console.log(err.message)
    }
    
} );
module.exports={router}