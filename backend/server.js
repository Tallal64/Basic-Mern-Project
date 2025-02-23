import dotenv from "dotenv";
import app from "./app.js";
import { connectDB } from "./db/index.js";

dotenv.config({
  path: "./backend/.env",
});

const PORT = process.env.PORT || 4000;

connectDB()
  .then(() => {
    app.get("/", (_, res) => {
      res.send("Hello World!");
    });

    app.listen(PORT, () => {
      console.log(`app is listening on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MONGODB connection failed", error);
  });
