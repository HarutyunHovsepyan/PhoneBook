const express = require("express");
const app = express();
const cors = require('cors');
const { Phonebook } = require('./model/model');
const { AllController } = require("./controller/AllController");
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({ origin: "http://localhost:3000", credentials: true }))

app.get("/", (req, res) => {
    res.send({ status: "OK" })
})

app.post("/addPhone", AllController.addPhone)
app.post("/allPhone", AllController.allPhones)
app.post("/getPhone/:id", AllController.getPhone)
app.post("/delPhones/:id", AllController.delPhone)
app.post("/editPhone/:id", AllController.editPhone)
app.post("/findPhone", AllController.findPhone)


app.listen(5000);