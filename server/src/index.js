import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.listen(3333, () => {
  console.log("Server started on port 3333");
});

app.get("/", (req, res) => {
  return res.json({ message: "Hello World" });
});
