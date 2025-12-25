import express from "express";
import bodyParser from "body-parser";
const app=express();
const port = 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res)=>{
    res.render("index.ejs", { head: "", body: "" });
})
app.get("/home", (req,res)=>{
    res.render("index.ejs", { head: "", body: "" });
})
app.get("/index", (req,res)=>{
    res.render("index.ejs", { head: "", body: "" });
})
app.get("/addblog", (req,res)=>{
    res.render("addblog.ejs");
})
app.post("/post",(req,res)=>{
   const title=req.body.title;
   const content=req.body.content;
   res.render("index.ejs",{
    head: title,
    body: content
   })

})










app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
