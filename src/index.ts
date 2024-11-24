import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import sequelize from "./config/database";
import userRoutes from "./routes/userRoutes";
import meterRoutes from "./routes/meterRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/user", userRoutes);
app.use("/meter", meterRoutes);

sequelize.authenticate().then(() => {
  console.log('Connected to the database');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(error => console.log('Database connection error:', error));

