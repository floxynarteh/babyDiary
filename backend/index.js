const express = require("express");
const app = express();
const path = require("path");
const collection = require("./mongo");
// const { default: UserForm } = require("../src/components/UserForm");
const userFormPath = path.join(__dirname, "../src/components/UserForm");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "js");
app.set("views", userFormPath);

app.get("/", (req, res) => {
  res.render("UserForm");
});

app.post("/saveData", async (req, res) => {
  const childFirstName = req.body.childFirstName;
  await collection.insertMany([{ childFirstName }]);
  const childLastName = req.body.childLastName;
  await collection.insertMany([{ childLastName }]);
  const placeOfBirth = req.body.placeOfBirth;
  await collection.insertMany([{ placeOfBirth }]);
  const date = req.body.date;
  await collection.insertMany([{ date }]);
  const country = req.body.country;
  await collection.insertMany([{ country }]);
  const gender = req.body.gender;
  await collection.insertMany([{ gender }]);
  res.send("Saved");
});

app.listen(8080, () => {
  console.log("port connected");
});
