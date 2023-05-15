import data from "../../lib/resume.json";
import React from "react";
import photo from "../../public/display.jpg";
import Image from "next/image";
export default function Resume() {
  const { basics, education, work, skills, projects, awards } = data;

  const renderSkills = (skills) =>
    skills.keywords.map((skill, index) => (
      <li key={index} className="inline-block mb-2 mr-2">
        <span className="px-2 py-1 text-sm bg-blue-200 rounded">{skill}</span>
      </li>
    ));

  const renderProjects = (projects) =>
    projects.map((project, index) => (
      <div key={index} className="mb-4">
        <h3 className="text-lg font-semibold">{project.name}</h3>
        <p className="mb-2 text-sm">{project.description}</p>
        <ul>
          {project.keywords.map((keyword, index) => (
            <li key={index} className="text-xs">
              {keyword}
            </li>
          ))}
        </ul>
      </div>
    ));

  return (
    <div
      className="container p-8 mx-auto bg-gray-100"
      style={{ maxWidth: "794px" }}
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="lg:col-span-1">
          <div className="mb-4 text-center">
            <Image
              src={photo}
              alt="Profile"
              className="w-24 h-24 mx-auto mb-2 rounded-full"
            />
            <h1 className="mb-1 text-3xl font-bold text-blue-800">
              {basics.name}
            </h1>
            <p className="mb-1 text-base text-gray-700">
              {basics.location.address}
            </p>
            <p className="text-base text-gray-700">
              {basics.email} | {basics.phone} | {basics.website}
            </p>
          </div>
          <h2 className="mb-2 text-xl font-bold text-blue-800">Education</h2>
          {education.map((edu, index) => (
            <div key={index} className="mb-2">
              <h3 className="text-base font-semibold">{edu.institution}</h3>
              <p className="text-xs text-gray-600">
                {edu.studyType}, {edu.startDate} - {edu.endDate}
              </p>
            </div>
          ))}
          <h2 className="mb-2 text-xl font-bold text-blue-800">
            Work Experience
          </h2>
          {work.map((job, index) => (
            <div key={index} className="mb-2">
              <h3 className="text-base font-semibold">{job.position}</h3>
              <p className="text-xs text-gray-600">
                {job.company}, {job.startDate} - {job.endDate}
              </p>
              <ul className="list-disc list-inside">
                {job.highlights.map((highlight, index) => (
                  <li key={index} className="text-xs text-gray-600">
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="lg:col-span-1">
          <h2 className="mb-2 text-xl font-bold text-blue-800">Skills</h2>
          {skills.map((skill, index) => (
            <div key={index} className="mb-2">
              <h3 className="text-base font-semibold">{skill.name}</h3>
              <ul>{renderSkills(skill)}</ul>
            </div>
          ))}
          <h2 className="mb-2 text-xl font-bold text-blue-800">Projects</h2>
          {renderProjects(projects)}
        </div>
      </div>
      <div className="mb-4">
        <h2 className="mb-2 text-xl font-bold text-blue-800">Awards</h2>
        {awards.map((award, index) => (
          <div key={index} className="mb-2">
            <h3 className="text-base font-semibold">{award.title}</h3>
            <p className="text-xs text-gray-600">
              {award.awarder}, {award.date}
            </p>
            <p className="text-xs text-gray-600">{award.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
