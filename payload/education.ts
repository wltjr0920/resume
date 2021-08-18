import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '아주대학교',
      subTitle: '소프트웨어학과',
      startedAt: '2014-03',
      endedAt: '2021-02',
    },
    {
      title: '경산고등학교 (경상북도 경산시)',
      subTitle: '자연계 졸업',
      startedAt: '2011-03',
      endedAt: '2014-02',
    },
  ],
};

export default education;
