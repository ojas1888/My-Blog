const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const dbConnect=require("./config/mongo.js");
const userRoutes = require("./routes/userRoute.js");
dotenv.config();

const app = express();
//DB
dbConnect();

app.use("/api/users", userRoutes);

//server
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is running ${PORT}`));

//