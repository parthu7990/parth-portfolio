export interface Project {
  title: string;
  category: string;
  description: string;
  tech: string[];
  image: string;
  size: 'small' | 'medium' | 'large';
  link: string;
  github: string;
}

export const projects: Project[] = [
  {
    title: 'My Personal Portfolio',
    category: 'Full Stack',
    description:
      'A futuristic personal portfolio with 3D visuals, smooth scroll, and immersive storytelling — built with React, Three.js and Motion.',
    tech: ['React', 'TypeScript', 'Three.js', 'Tailwind'],
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&auto=format&fit=crop',
    size: 'medium',
    link: 'https://parth-portfolio-lovat-mu.vercel.app/',
    github: 'https://github.com/parthu7990/',
  },
  {
    title: 'Bloom Template',
    category: 'Frontend',
    description:
      'Modern and responsive business website built using the Bloom HTML template, suitable for agencies, portfolios, and creative professionals.',
    tech: ['TypeScript', 'React.js', 'Html', 'Tailwind CSS'],
    image:
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&auto=format&f it=crop',
    size: 'medium',
    link: 'https://parthu7990.github.io/Bloom-template/',
    github: 'https://github.com/parthu7990',
  },
  {
    title: 'Gwalia Sweets & Restaurant Project',
    category: 'Frontend, Backend',
    description:
      'Restaurant management web application built with Django, featuring menu display, order handling, and admin controls.',
    tech: ['Html', 'Tailwind Css', 'Python', 'Django'],
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&auto=format&fit=crop',
    size: 'medium',
    link: 'https://restaurant-management-system-five-theta.vercel.app/',
    github: 'https://github.com/parthu7990/Restaurant-Management-System',
  },
  {
    title: 'PSK Future Innovation FZE',
    category: 'Full Stack',
    description:
      'PSK Company — a modern full-stack service booking platform with responsive design, secure backend integration, and seamless customer service request management.',
    tech: ['Django', 'Python', 'Bootstrap', 'Html', 'Tailwind Css', 'Mysql lite 3'],
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&auto=format&fit=crop',
    size: 'medium',
    link: 'https://parth-psk-project.up.railway.app/',
    github: 'https://github.com/parthu7990/SSM-PROJECT',
  },
  {
    title: 'College-Management-System',
    category: 'Management Website',
    description:
      'College Management System built using Django, designed to manage students, staff, and academic operations with a centralized web-based platform.',
    tech: ['Django', 'Python', 'Bootstrap', 'Html', 'Tailwind Css', 'Mysql lite 3'],
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&auto=format&fit=crop',
    size: 'medium',
    link: 'https://github.com/parthu7990',
    github: 'https://github.com/parthu7990/College-Management-System',
  },
];
