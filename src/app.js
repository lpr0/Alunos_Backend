import express from "express"
import rotas from "./routes/index.js";

const app = express();
rotas(app);

export default app;