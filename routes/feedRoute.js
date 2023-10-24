import express from "express";
const router = express();

import {
  createFeed,
  updateFeed,
  getAllFeeds,
  getSingleFeed,
  deleteFeed,
} from "../controllers/feedController";

import {
  authenticateUser,
  authorizePermissions,
} from "../middleware/authMiddleware";

router.route("/").post(authenticateUser, createFeed).get(getAllFeeds);
router.route("/:id").patch(updateFeed).get(getSingleFeed).delete(deleteFeed);

export default router;
