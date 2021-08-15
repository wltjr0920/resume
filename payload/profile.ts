import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faMicroblog } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/_sample.jpg';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '장지석',
    small: '(Jang Jiseok)',
  },
  contact: [
    {
      title: 'wltjr0920@ajou.ac.kr',
      link: '#',
      icon: faEnvelope,
    },
    {
      title: '010-8940-0910',
      icon: faPhone,
      badge: true,
    },
    {
      title: 'https://github.com/wltjr0920',
      link: 'https://github.com/wltjr0920',
      icon: faGithub,
    },
    {
      link: 'https://www.facebook.com/iu.loen',
      icon: faMicroblog,
    },
  ],
  notice: {
    title: "This resume is a sample page of 'https://github.com/uyu423/resume-nextjs'.",
    icon: faBell,
  },
};

export default profile;
