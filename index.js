import express from "express";

const app = express();
const port = 3000;
let formDataArray = [];

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Home page route
app.get("/", (req, res) => {
  res.render("index.ejs", { formDataArray: formDataArray });
});

// Create page route
app.get("/create", (req, res) => {
  res.render("create.ejs");
});
app.post("/create", (req, res) => {
  res.render("create.ejs");
});

app.post("/post", (req, res) => {
  const currentDateTime = new Date();
  const formData = {
    firstName: req.body.fName,
    lastName: req.body.lName,
    email: req.body.email,
    title: req.body.title,
    content: req.body.content,
    dateTime: currentDateTime.toLocaleString(),
  };

  formDataArray.push(formData);

  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
