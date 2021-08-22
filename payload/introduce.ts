import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '항상 성장하기 위해 고민을 하는 백엔드 개발자입니다.',
    '웹/앱 서비스 백엔드 개발과 스타트업 등 다양한 경험이 있습니다. Node.js, PHP, MySQL, AWS 등을 사용하여 서비스를 설계, 개발, 운영한 경험이 있습니다. 최근에 가장 고민하고, 가장 관심있어 하는 것은 어떻게 아키텍처를 구성하고, 확장성과 유지보수성을 높이 하여 개발을 할 수 있을지에 대한 것입니다.',
    '여러가지를 다양하게 경험하는 것도 좋아합니다. 컴파일러, Android, 네트워크 등을 공부해 보았고, 현재는 Google ML Bootcamp에 참여하여 머신러닝에 대해서 공부도 해보는 중입니다.',
    '개발자란 결국에 자신이 가지고 있는 것을 코드로 만들어야 하기에, 적극적으로 문제에도 부딪혀 보고 발전을 위해 끊임없이 고민해야 합니다. 저는 더 좋은 개발자로 성장하기 위해서 열심히 학습하고, 여러가지를 다양하게 경험하고, 끊임없이 노력하고 있습니다.',
  ],
  sign: 'Jiseok Jang',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
