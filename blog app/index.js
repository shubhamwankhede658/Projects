import express from "express";
import bodyParser from "body-parser";

const app= express();
const port=3000;

let posts=[];
let idCounter=1;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.render("index.ejs",
        {posts}
    );
})


app.get("/create",(req,res)=>{
    res.render("create.ejs");
})

app.post("/create",(req,res)=>{
    let title=req.body["title"];
    let content = req.body["content"]
    posts.push({id:idCounter++, title,content});
    res.redirect("/");
})

app.get("/edit/:id",(req,res)=>{
    const post= posts.find(p=> p.id==req.params.id);
    console.log(post);
    res.render("edit.ejs",{post});
})

app.post("/edit/:id",(req,res)=>{
    const post= posts.find(p=> p.id==req.params.id);
    let title= req.body["title"];
    let content= req.body["content"];

    post.title=title;
    post.content=content;
    res.redirect("/");
})

app.get('/delete/:id',(req,res)=>{
     posts = posts.filter(p => p.id != req.params.id);
  res.redirect('/');
})

app.listen(port,()=>{
    console.log("server is listening on port ",port);
})
