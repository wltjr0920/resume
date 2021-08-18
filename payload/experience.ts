import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  list: [
    {
      title: 'Gabia',
      position: 'Backend Developer',
      startedAt: '2020-11',
      descriptions: [
        '하이웍스 서비스 유지보스 및 레거시 코드 개선',
        'Gitlab CI/CD 과정 경험',
        '레거시 코드 Typescript Nodejs Express API서버로 포팅작업',
      ],
      skillKeywords: [
        'PHP(Laravel, CodeIgniter)',
        'Node.js Express (Typescript)',
        'MySQL',
        'Memcached',
        'Gitlab CI/CD',
        'Docker',
        'Kubernetes',
      ],
    },
    {
      title: 'Popone',
      position: 'Backend Developer (인턴)',
      startedAt: '2018-08',
      endedAt: '2019-02',
      descriptions: [
        'Fitts 2.0 애플리케이션 Ruby on rails 서버개발',
        'Rails의 Blazer 툴 사용 -> 데이터 시각화',
      ],
      skillKeywords: ['Ruby on Rails', 'MySQL', 'Python', 'AWS EC2', 'AWS Elastic Beanstalk'],
    },
  ],
};

export default experience;
