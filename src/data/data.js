// src/data/data.js
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';

// Import immagini
import sanlorenzoImage from '../assets/img/sanlorenzocharterfleet-com.webp';
import centroDemetraImage from '../assets/img/centrodemetra.webp';
import CrottiImage from '../assets/img/Homepage-Maria-Gabriella-Crotti.webp';
import generapmaImage from '../assets/img/genera.webp';

// Hook per ottenere i progetti tradotti
export const useProjects = () => {
  const { t } = useTranslation();

  return useMemo(() => [
    {
      id: 1,
      title: t("projects.sanlorenzo.title"),
      image: sanlorenzoImage,
      description: t("projects.sanlorenzo.description"),
      link: 'https://sanlorenzocharterfleet.com',
      detail: t("projects.detail"),
    },
    {
      id: 2,
      title: t("projects.demetra.title"),
      image: centroDemetraImage,
      description: t("projects.demetra.description"),
      link: 'https://centrodemetra.com',
      detail: t("projects.detail"),
    },
    {
      id: 3,
      title: t("projects.crotti.title"),
      image: CrottiImage,
      description: t("projects.crotti.description"),
      link: 'https://shths-shahtoosh.com/',
      detail: t("projects.detail"),
    },
    {
      id: 4,
      title: t("projects.genera.title"),
      image: generapmaImage,
      description: t("projects.genera.description"),
      link: 'https://generapma.it',
      detail: t("projects.detail"),
    },
  ], [t]);
};

// Lista di skill
export const skills = [
  { id: 1, name: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
  { id: 2, name: 'Vue.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg' },
  { id: 3, name: 'NextJs', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg' },
  { id: 4, name: 'Vite', logo: 'https://vitejs.dev/logo.svg' },
  { id: 5, name: 'Tailwind CSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
  { id: 6, name: 'Node.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
  { id: 7, name: 'Git', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg' },
  { id: 8, name: 'Figma', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg' },
  { id: 9, name: 'Bootstrap', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg' },
  { id: 10, name: 'PHP', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg' },
  { id: 11, name: 'Wordpress', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg' },
  { id: 12, name: 'Github', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' },
];
