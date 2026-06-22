import express from "express";
import cors from "cors";
import chatRoute from "./routes/chat.js";

const app = express();

app.use(cors());

app.use(express.json({
  limit: "50mb"
}));

app.use("/api", chatRoute);

app.get("/", (req, res) => {
  res.json({
    status: "online",
    name: "Waguri AI Backend"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server Running");
});