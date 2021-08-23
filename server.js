const express = require("express");
const mongoose = require("mongoose");
const routes = require("./controllers");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dbExample", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTypology: true
});




app.use(routes);


app.listen(PORT, console.log(`Listening on PORT ${PORT}`));