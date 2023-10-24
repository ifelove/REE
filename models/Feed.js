import  mongoose from "mongoose";

const FeedSchema = new mongoose.Schema({
  date_posted: { type: Date, default: Date.now() },
  poster: { type: String },
  feed_img: { type: String },
  poster_img: { type: String },
  content: { type: String },
  title: { type: String },
  userLike: { type: Boolean, default: false },
});

export default mongoose.model("Feed", FeedSchema);
