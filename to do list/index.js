import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db= new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "Permalist",
  password: "123456",
  port: 5432,
})

db.connect();



async function getData(){
  let result = await db.query("SELECT * FROM items ORDER BY id");
  return result.rows;
}

app.get("/", async (req, res) => {
  let items = await getData();
  res.render("index.ejs", {
    listTitle: "Today",
    listItems: items,
  });
});



app.post("/add", (req, res) => {
  const item = req.body.newItem;
  let ans=[item];
  db.query("INSERT INTO items(title) VALUES($1)",ans);
  res.redirect("/");
});

app.post("/edit", (req, res) => {
  let id = parseInt(req.body.updatedItemId);
  let newTitle= req.body.updatedItemTitle;
  db.query("UPDATE items SET title=$1 WHERE id=$2",[newTitle,id]);
  res.redirect("/");
});

app.post("/delete", (req, res) => {
  let result = parseInt(req.body.deleteItemId);
  db.query("DELETE FROM items WHERE id=$1",[result]);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
