import express from "express";
import { protect,admin } from "../middlewares/Auth.js";
import * as moviesController from "../Controllers/MovieController.js";

const router = express.Router();


router.post("/import", moviesController.importMovies);
router.get("/", moviesController.getMovies);
router.get("/:id", moviesController.getMovieById);
router.get("/rated/top", moviesController.getTopRatedMovies);
router.get("/random/all", moviesController.getRandomMovies);

router.post("/:id/reviews",protect, moviesController.createMovieReview);


router.put("/:id", protect, admin, moviesController.updateMovie);
router.delete("/:id", protect, admin, moviesController.deleteMovie);
router.delete("/", protect, admin, moviesController.deleteAllMovies);
router.post("/", protect, admin, moviesController.createMovie);


router.post("/sendpasswordlink",async(req,res) =>{
console.log(req.body);
});










export default router;