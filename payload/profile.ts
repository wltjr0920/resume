import { faBlog, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/jiseok.jpg';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,
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
      title: 'Contact Me By Email',
      icon: faPhone,
      badge: true,
    },
    {
      title: 'Github (https://github.com/wltjr0920)',
      link: 'https://github.com/wltjr0920',
      icon: faGithub,
    },
    {
      title: 'Tistory Blog (https://kante-dev.tistory.com)',
      link: 'https://kante-dev.tistory.com',
      icon: faBlog,
    },
  ],
  notice: {
    title: '이메일로 연락 부탁드립니다.',
    icon: faBell,
  },
};

export default profile;
