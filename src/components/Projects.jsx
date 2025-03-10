import React from "react";
import { Link } from "react-router-dom";
import { useProjects } from "../data/data.js"; 
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  const projects = useProjects(); // Otteniamo i dati dei progetti

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 font-orbitron">{t("projects.title")}</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={project.image}
                alt={t(`projects.${project.id}.alt`, { defaultValue: project.title })}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 font-orbitron">
                  {project.title}
                </h3>
                <p className="mt-2 text-gray-600">
                  {project.description ? `${project.description.substring(0, 100)}...` : ""}
                </p>
                <Link
                  to={`/project/${project.id}`}
                  className="mt-4 inline-block bg-black text-white px-4 py-2 border border-black hover:bg-white hover:text-black transition font-orbitron"
                >
                  {t("buttons.title")}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
