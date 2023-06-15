import nextConnect from "next-connect";
import middleware from "../../lib/dbConnect";
import Project from "../../models/Project";

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    res
      .status(500)
      .json({ error: `Unable to fetch projects: ${error.message}` });
  }
});

handler.post(async (req, res) => {
  try {
    const projectData = req.body;
    const newProject = new Project(projectData);
    await newProject.save();
    res.status(201).json(newProject);
  } catch (error) {
    res
      .status(500)
      .json({ error: `Unable to create project: ${error.message}` });
  }
});

export default handler;
