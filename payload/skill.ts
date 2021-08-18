import { ISkill } from '../component/skill/ISkill';

const language: ISkill.Skill = {
  category: 'Language',
  items: [
    {
      title: 'C/C++',
      level: 2,
    },
    {
      title: 'Python',
      level: 2,
    },
  ],
};

const backend: ISkill.Skill = {
  category: 'Back-end',
  items: [
    {
      title: 'Node.js (Express)',
      level: 3,
    },
    {
      title: 'PHP',
      level: 3,
    },
    {
      title: 'Ruby on Rails',
      level: 2,
    },
    {
      title: 'Django',
      level: 2,
    },
  ],
};

const database: ISkill.Skill = {
  category: 'Database',
  items: [
    {
      title: 'MySQL',
      level: 3,
    },
    {
      title: 'Oracle',
      level: 1,
    },
    {
      title: 'Memcached',
      level: 2,
    },
    {
      title: 'Firebase Firestore',
      level: 1,
    },
  ],
};

const frontend: ISkill.Skill = {
  category: 'Front-end',
  items: [
    {
      title: 'Android',
      level: 2,
    },
    {
      title: 'React',
      level: 2,
    },
    {
      title: 'javascript',
      level: 2,
    },
    {
      title: 'HTML/CSS',
      level: 1,
    },
  ],
};

const etc: ISkill.Skill = {
  category: 'Etc',
  items: [
    {
      title: 'Docker',
    },
    {
      title: 'Kubernetes',
    },
    {
      title: 'Ubuntu',
    },
    {
      title: 'Vim',
    },
    {
      title: 'Redmine',
    },
    {
      title: 'Gitlab CI / CD',
    },
    {
      title: 'Confluence',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, database, frontend, language, etc],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
