import nextConnect from "next-connect";
import middleware from "../../lib/dbConnect";
import Testimonial from "../../models/Testimonial";

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.status(200).json(testimonials);
  } catch (error) {
    res
      .status(500)
      .json({ error: `Unable to fetch testimonials: ${error.message}` });
  }
});

handler.post(async (req, res) => {
  try {
    const testimonialData = req.body;
    const newTestimonial = new Testimonial(testimonialData);
    await newTestimonial.save();
    res.status(201).json(newTestimonial);
  } catch (error) {
    res
      .status(500)
      .json({ error: `Unable to create testimonial: ${error.message}` });
  }
});

export default handler;
