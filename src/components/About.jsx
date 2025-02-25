import React from 'react';
import {skills} from '../data/data';
const About = () => {
  // Lista delle tecnologie con i relativi loghi (puoi usare percorsi locali o URL)


  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="font-orbitron text-3xl font-bold text-gray-800">Chi sono</h2>
        <p className="font-inter mt-4 text-dark-600 leading-8">
        Sono  uno sviluppatore front-end specializzato nella realizzazione di siti web moderni e performanti. Aiuto aziende e professionisti a costruire la loro presenza online attraverso soluzioni personalizzate, scalabili e ben ottimizzate.

Sviluppo interfacce su misura, curando ogni dettaglio per garantire un’esperienza utente fluida e intuitiva. Lavoro con HTML, CSS, JavaScript e framework avanzati per creare design funzionali e dinamici, ottimizzati per velocità e accessibilità.

Se hai bisogno di un sito web efficace e ben strutturato, contattami per trasformare la tua idea in una soluzione concreta.</p>
        {/* Lista delle competenze */}
        <div className="mt-8">
          <h3 className="font-orbitron text-2xl font-bold text-gray-800">Tecnologie che utilizzo</h3>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {skills.map((tech, index) => (
              <div key={index} className="flex flex-col items-center p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="h-12 w-12 object-contain"
                />
                <p className="font-inter mt-2 text-sm text-gray-700">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;