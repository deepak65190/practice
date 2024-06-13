const express=require("express") ;
const {notesModel}=require("../models/notes.model") ;
const notesRoute=express.Router() ;
notesRoute.get("/",async(req,res)=>{
    try{
        const notes=await notesModel.find() ;
        res.send(notes)
    }catch(err){
        res.status(404).send("no data found")
    }
    

}) 

//create notes
notesRoute.post("/create" ,async(req,res)=>{
    const data=req.body ;
    console.log(data ,"body")
    try{
        const note= new notesModel(data) ;
        console.log(note ,"no")
        await note.save() ;
        res.send("post created")
    }catch(err){
res.send("something sent wrong 500")
    }


})

//update notes
notesRoute.patch("/update/:id" ,async(req,res)=>{
    const id=req.params.id ;
    const data=req.body ;
    console.log(id ,data)
    try{
await notesModel.findByIdAndUpdate(id, data) ;
res.status(404).send({statusCode:"200" ,mesg:"updated successfully"})
    }catch(err){
        console.log(err)
    }
})

notesRoute.put("/update/:id", async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    try {
        const updatedNote = await notesModel.findByIdAndUpdate(id, data, { new: true });
        if (!updatedNote) {
            return res.status(404).send("Note not found");
        }
        res.send("Note updated");
    } catch (err) {
        console.error(err);
        res.status(500).send("Something went wrong");
    }
});

//delete notes
notesRoute.delete("/delete/:id" ,async(req,res)=>{
    const id=req.params.id ;
   console.log(id)
    try{
await notesModel.findByIdAndDelete(id) ;
 
res.status(200).send({ statusCode: 200, message: "Note deleted" });

    }catch(err){
        console.log(err) 
        res.send(err)
    }
})
module.exports={notesRoute}