const { fileModels } = require("../models/file.modes");
const uploadFile = async (req, res) => {
   
  const fileObj = {
    path: req.file.path,
    name: req.file.originalname,
  };
  try {
    const file =  await fileModels.create(fileObj);
    
    //res.end({ path: `http://localhost:8080/file/${file._id}` });
     res.status(200).json({ path: `http://localhost:8080/file/${file._id}` });
     
  } catch (err) {
    console.log(err.message);
  }
};
// const downloadImage = async (req, res) => {
//     const Id=req.par
//   try {
//     const down = await fileModels.findById()
//     // down.downloadContent++;
//     // await down.save();
//     // res.download(down.path, down.name);
//   } catch (err) {
//     console.log(err);
//   }
// };
module.exports = { uploadFile };
