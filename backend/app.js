import express from "express";

const app = express();

app.use(express.json());

// Routing
import productRoutes from "./routes/product.routes.js";
app.use("/api/products", productRoutes);

export default app;
