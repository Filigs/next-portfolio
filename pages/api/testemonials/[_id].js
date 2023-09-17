import nextConnect from "next-connect";
import middleware from "../../../lib/dbConnect";

import Testimonial from "../../models/Testimonial";

const handler = nextConnect();

handler.use(middleware);

handler.put(async (req, res) => {
  try {
    const updatedTestimonial = await Testimonial.findByIdAndUpdate(
      req.query._id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updatedTestimonial) {
      return res.status(404).json({ error: "Testimonial not found" });
    }
    res.status(200).json(updatedTestimonial);
  } catch (error) {
    res
      .status(500)
      .json({ error: `Unable to update testimonial: ${error.message}` });
  }
});

handler.delete(async (req, res) => {
  try {
    const deletedTestimonial = await Testimonial.findByIdAndDelete(
      req.query._id
    );
    if (!deletedTestimonial) {
      return res.status(404).json({ error: "Testimonial not found" });
    }
    res.status(200).json(deletedTestimonial);
  } catch (error) {
    res
      .status(500)
      .json({ error: `Unable to delete testimonial: ${error.message}` });
  }
});

export default handler;
