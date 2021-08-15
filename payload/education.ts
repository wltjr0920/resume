import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: 'Ajou University',
      subTitle: 'Software Engineer',
      startedAt: '2014-03',
      endedAt: '2021-02',
    },
    {
      title: 'Gyeongsan Highschool',
      subTitle: 'Graduated',
      startedAt: '2011-03',
      endedAt: '2014-02',
    },
  ],
};

export default education;
