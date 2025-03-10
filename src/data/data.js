// src/data/data.js
import sanlorenzoImage from '../assets/img/sanlorenzocharterfleet-com.webp';
import centroDemetraImage from '../assets/img/centrodemetra.webp';
import CrottiImage from '../assets/img/Homepage-Maria-Gabriella-Crotti.webp';
import generapmaImage from '../assets/img/genera.webp';

export const projects = [
  {
    id: 1,
    title: "Sanlorenzo Charter Fleet",
    image: sanlorenzoImage, 
    description: `
      Sanlorenzo Charterfleet è un progetto che mi ha permesso di mettere in pratica le mie competenze nello sviluppo di temi WordPress personalizzati. Ho sviluppato un tema totalmente custom, progettato per soddisfare le esigenze specifiche del cliente e garantire un'esperienza utente fluida e coinvolgente.

      **Cosa ho fatto:**
      - Sviluppo del Tema WordPress: Ho creato un tema WordPress da zero, senza utilizzare temi predefiniti o page builder, per garantire massima flessibilità e prestazioni ottimizzate.
      - Layout con Bootstrap: Ho utilizzato Bootstrap per creare un layout responsive e moderno, assicurandomi che il sito fosse perfettamente visualizzabile su qualsiasi dispositivo.
      - Gestione dei Dati con PHP: Ho implementato funzionalità personalizzate utilizzando PHP per gestire dinamicamente i dati, come la visualizzazione delle flotte di yacht e i dettagli dei contatti.
      - Ottimizzazione delle Prestazioni: Ho ottimizzato il codice e le risorse per garantire tempi di caricamento rapidi.
      - Integrazione di Funzionalità Avanzate: Ho integrato funzionalità come la prenotazione online e la gestione delle gallerie fotografiche.

      **Tecnologie Utilizzate:**
      - WordPress, Bootstrap, PHP, HTML/CSS/JavaScript, MySQL.

      **Risultati:**
      - Un sito web completamente personalizzato, che rispecchia l'eleganza e l'esclusività del brand SanLorenzo.
      - Miglioramento delle prestazioni e dell'usabilità, con feedback positivi da parte degli utenti finali.
      - Una soluzione scalabile e facile da gestire per il cliente.
    `,
    link: 'https://sanlorenzocharterfleet.com',
    contactInfo: {
      email: "progetto1@example.com",
      phone: "+39 123 456 7890",
    },
  },
  {
    id: 2,
    title: "Centro Demetra",
    image: centroDemetraImage, 
    description: `
        Per il progetto centrodemetra.com, ho sviluppato l'intero layout grafico partendo da zero, senza l’utilizzo di temi preconfezionati, garantendo un design su misura e un'esperienza utente ottimizzata. Ho interagito direttamente con i dati di WordPress tramite PHP, personalizzando le funzionalità del sito per adattarle alle esigenze specifiche del cliente.

Uno degli aspetti più rilevanti del progetto è stato lo sviluppo di uno store locator avanzato, realizzato attraverso l'integrazione con le API di Google Maps. Questo sistema consente agli utenti di individuare facilmente le sedi del centro, filtrando i risultati in base alla posizione e migliorando così l’accessibilità e la fruibilità del servizio.

Durante lo sviluppo, ho posto particolare attenzione alle prestazioni del sito, ottimizzando codice e risorse per garantire tempi di caricamento rapidi e una navigazione fluida. Il risultato è una piattaforma moderna, funzionale e scalabile, che unisce estetica e usabilità a un'infrastruttura solida e performante.
      `,
    link: 'https://centrodemetra.com',
    contactInfo: {
      email: "progetto2@example.com",
      phone: "+39 098 765 4321",
    },
  },
  {
    id: 3,
    title: "Maria Gabriella Crotti",
    image: CrottiImage, 
    description: `
       Per il sito shths-shahtoosh.com, dedicato all'alta moda e alle creazioni esclusive di Maria Gabriella Crotti, ho curato lo sviluppo utilizzando un tema altamente personalizzabile e il page builder Elementor. Questo approccio ha permesso di realizzare un design raffinato ed elegante, in linea con l'esclusività del brand, valorizzando al meglio la bellezza e l'artigianalità degli scialli in pelo di Chiru.

L'uso di Elementor ha consentito una gestione flessibile dei contenuti, permettendo aggiornamenti dinamici e un'organizzazione visiva che mette in risalto le collezioni e la filosofia del marchio. Ho ottimizzato il layout per garantire un'esperienza di navigazione fluida e intuitiva, con particolare attenzione alla resa estetica e alla compatibilità su tutti i dispositivi.

Il risultato è un sito che combina eleganza e funzionalità, offrendo agli utenti un viaggio immersivo nell’universo esclusivo di Shths Shahtoosh.
      `,
      link: 'https://shths-shahtoosh.com/',
    contactInfo: {
      email: "progetto2@example.com",
      phone: "+39 098 765 4321",
    },
  },
  {
    id: 4,
    title: "Genera PMA",
    image: generapmaImage,
    description: `
    Per il sito generapma.it, clinica specializzata in procreazione assistita, ho realizzato un completo restyling, trasformando un sito inizialmente basato su un tema con WP Bakery e un elevato numero di plugin in una soluzione interamente custom. L'obiettivo principale è stato migliorare sia le performance che la manutenibilità del sito, riducendo drasticamente il numero di plugin e sviluppando una struttura più leggera, scalabile ed efficiente.

Una delle sfide più significative è stata l’ottimizzazione delle prestazioni: grazie a un codice più pulito e a interventi mirati su script e risorse, i valori dei Core Web Vitals sono passati da 4 a 60, garantendo un sito più veloce, fluido e user-friendly.

Il nuovo sito non solo offre un'esperienza di navigazione più intuitiva e accessibile, ma è anche più stabile e performante, assicurando una gestione più efficiente dei contenuti e un impatto positivo sulla SEO e sull’esperienza utente.
  `,
    link: 'https://generapma.it',
    contactInfo: {
      email: "belaj.br@gmail.com",
      phone: "+39 320 66 325 75",
    },
  },
];

export const skills = [
  {
    id: 1,
    name: 'React',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
  },
  {
    id: 2,
    name: 'Vue.js',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg',
  },
  {
    id: 3,
    name: 'NextJs',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg',
  },
  {
    id: 4,
    name: 'Vite',
    logo: 'https://vitejs.dev/logo.svg',
  },
  {
    id: 5,
    name: 'Tailwind CSS',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
  },
  {
    id: 6,
    name: 'Node.js',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
  },
  {
    id: 7,
    name: 'Git',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg',
  },
  {
    id: 8,
    name: 'Figma',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
  },
  {
    id: 9,
    name: 'Bootstrap',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg',
  },
  {
    id: 10,
    name: 'PHP',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg',
  },
  {
    id: 11,
    name: 'Wordpress',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg',
  },
  {
    id: 12,
    name: 'Github',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
  }
];