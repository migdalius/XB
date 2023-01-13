const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
mongoose.set("strictQuery", true);
dotenv.config();

//
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");

// mongo db connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connection success!"))
  .catch((err) => console.log(err));

//add json
app.use(express.json());
// endpoints
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});
