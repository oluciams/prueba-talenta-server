import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import infoTextsRoutes from "./routes/infoTexts";


dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/infoTexts", infoTextsRoutes);



app.listen(process.env.PORT || 3001, () => {
  console.log(`runnig in port ${process.env.PORT || 3001}`)
})