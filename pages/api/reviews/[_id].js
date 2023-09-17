import nextConnect from "next-connect";
import middleware from "../../../lib/dbConnect";

import Review from "../../../models/Review";

const handler = nextConnect();

handler.use(middleware);

handler.put(async (req, res) => {
  try {
    const updatedReview = await Review.findByIdAndUpdate(
      req.query._id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updatedReview) {
      return res.status(404).json({ error: "Review not found" });
    }
    res.status(200).json(updatedReview);
  } catch (error) {
    res
      .status(500)
      .json({ error: `Unable to update review: ${error.message}` });
  }
});

handler.delete(async (req, res) => {
  try {
    const deletedReview = await Review.findByIdAndDelete(req.query._id);
    if (!deletedReview) {
      return res.status(404).json({ error: "Review not found" });
    }
    res.status(200).json(deletedReview);
  } catch (error) {
    res
      .status(500)
      .json({ error: `Unable to delete review: ${error.message}` });
  }
});

export default handler;
