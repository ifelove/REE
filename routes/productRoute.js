import express from "express";
const router = express.Router();
//import { authenticateUser, authorizePermissions } from "../middleware/authMiddleware";

import {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController";

//const { getSingleProductReviews } = require("../controllers/reviewController");

router.route("/").post(createProduct).get(getAllProducts);
router
  .route("/:id")
  .get(getSingleProduct)
  .patch(authenticateUser, updateProduct)
  .delete(authenticateUser, deleteProduct);

//router.route("/:id/reviews").get(getSingleProductReviews);

export default router;
