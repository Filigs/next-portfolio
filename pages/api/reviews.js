import nextConnect from "next-connect";
import middleware from "../../lib/dbConnect";
import Review from "../../models/Review";

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
  try {
    const reviews = await Review.find();
    res.status(200).json(reviews);
  } catch (error) {
    res
      .status(500)
      .json({ error: `Unable to fetch reviews: ${error.message}` });
  }
});

handler.post(async (req, res) => {
  try {
    const reviewData = req.body;
    const newReview = new Review(reviewData);
    await newReview.save();
    res.status(201).json(newReview);
  } catch (error) {
    res
      .status(500)
      .json({ error: `Unable to create review: ${error.message}` });
  }
});

export default handler;
