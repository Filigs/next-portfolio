import nextConnect from "next-connect";
import middleware from "../../../lib/dbConnect";

import Project from "../../../models/Project";

const handler = nextConnect();

handler.use(middleware);

handler.put(async (req, res) => {
  try {
    const updatedProject = await Project.findByIdAndUpdate(
      req.query._id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updatedProject) {
      return res.status(404).json({ error: "Project not found" });
    }
    res.status(200).json(updatedProject);
  } catch (error) {
    res
      .status(500)
      .json({ error: `Unable to update project: ${error.message}` });
  }
});

handler.delete(async (req, res) => {
  try {
    const deletedProject = await Project.findByIdAndDelete(req.query._id);
    if (!deletedProject) {
      return res.status(404).json({ error: "Project not found" });
    }
    res.status(200).json(deletedProject);
  } catch (error) {
    res
      .status(500)
      .json({ error: `Unable to delete project: ${error.message}` });
  }
});

export default handler;
