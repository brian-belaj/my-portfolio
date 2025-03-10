import React from 'react';
import { useParams } from 'react-router-dom';
import { useProjects } from '../data/data'; // Importa useProjects
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';

const ProjectDetail = () => {
  const { id } = useParams();
  const projects = useProjects(); // Ottieni la lista dei progetti
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <div className="container mx-auto px-6 py-20">Progetto non trovato</div>;
  }

  return (
    <div>
      <Navbar hideLinks={true} />
      {/* Hero con due colonne */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 font-orbitron">{project.title}</h1>
            <a href={project.link} target='_blank' rel='noreferrer'>
              <button className="mt-4 px-5 py-3 bg-black text-white rounded-0 hover:bg-white hover:text-black border-2 border-black transition duration-300">
                Vai al sito
              </button>
            </a>
          </div>
          {/* Colonna destra: Immagine */}
          <div>
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Sezione descrittiva */}
      <section className="container mx-auto px-6 py-20 bg-gray-100">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 font-orbitron">Descrizione del Progetto</h2>
          <p className="text-gray-600 whitespace-pre-line">{project.description}</p>
        </div>
      </section>

      {/* Componente Contact */}
      <Contact projectContact={project.contactInfo} />
    </div>
  );
};

export default ProjectDetail;
