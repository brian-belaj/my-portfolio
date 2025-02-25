import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/data"; // Importa i dati

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 font-orbitron">Progetti</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-md">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-800 px-6 pt-6 font-orbitron">
                {project.title}
              </h3>
              <p className="mt-2 text-gray-600 px-6">
                {project.description.substring(0, 100)}...{" "}
              </p>
              <Link
                to={`/project/${project.id}`}
                className="mt-4 mb-6 mx-6 px-3 py-2 inline-block bg-black text-white hover:bg-white hover:text-black hover:border font-orbitron rounded-0 transition"
              >
                Vedi Dettagli
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
