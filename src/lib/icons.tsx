// Icons
export const ICONS = [
  // language
  { name: 'Javascript', link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Typescript', link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'HTML', link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Python', link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'C', link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
  { name: 'C#', link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
  { name: 'R', link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg' },

  // Runtime / Framework / library
  { name: 'Node JS', link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express JS', link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'Nest JS', link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg' },
  { name: 'React JS', link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next JS', link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Tailwind CSS', link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },

  // ORM & ODM
  { name: 'TypeORM', link: 'https://raw.githubusercontent.com/typeorm/typeorm/master/resources/logo_big.png' },
  { name: 'Mongoose', link: '/icons/mongoose_small.png' },

  // DB
  { name: 'MySQL', link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain.svg' },
  { name: 'Mongo DB', link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg' },
  { name: 'PostgreSQL', link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg' },

  // DevOps
  { name: 'Github', link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'npm', link: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/npm/npm.png' },
  { name: 'Docker', link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg' },
  { name: 'AWS EC2', link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
  { name: 'Nginx', link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg' },
  { name: 'Apache', link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg' },

  // SNS
  // { name: 'Instagram', link: '' },
  // { name: 'Linked In', link: '' },

  // GIS
  // { name: 'QGIS', link: '/icons/logo_qgis.png' },
  // { name: 'ArcGIS', link: '' },
] as const;

export type Icon = typeof ICONS[number];
export type IconName = Icon['name'];
