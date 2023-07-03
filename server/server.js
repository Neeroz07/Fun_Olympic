import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import userRouter from "./Routes/UserRouter.js";
import movieRouter from "./Routes/MovieRouter.js";
import categoriesRouter from "./Routes/CategoriesRouter.js";
import { errorHandler } from './middlewares/errorMiddleware.js';
import Uploadrouter from "./Controllers/UploadFile.js";
// import routerss from "./Routes/routers.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

connectDB();

app.get("/", (req, res) => {
  res.send("API is running.....");
});

// app.use("/",routerss);
app.use("/api/users", userRouter);
app.use("/api/movies", movieRouter);
app.use("/api/categories", categoriesRouter);
app.use("/api/upload", Uploadrouter);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
