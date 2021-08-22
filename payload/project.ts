import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'PHP Legacy Code -> MSA Nodejs Express API 서버로 포팅 작업',
      startedAt: '2020-11',
      where: 'Gabia',
      descriptions: [
        {
          weight: 'MEDIUM',
          content: 'Typescript Node.js Backend',
        },
        {
          weight: 'MEDIUM',
          content: 'Gitlab CI/CD',
          descriptions: [
            { content: 'Dev / Stage / Prod 환경별 Docker 환경변수 설정' },
            { content: 'Docker 이미지 빌드' },
            { content: 'K8s 배포' },
          ],
        },
        {
          weight: 'MEDIUM',
          content: '테스트 코드 작성',
          descriptions: [
            { content: 'jest를 이용한 유닛 테스트 작성' },
            { content: 'supertest를 이용한 통합 테스트 작성' },
          ],
        },
      ],
    },
    {
      title: '타인의 감시 아래, 자신의 목표를 공표하고 인증하는 애플리케이션 - planA',
      startedAt: '2020-03',
      endedAt: '2020-07',
      where: '아주대학교 - 캡스톤 디자인',
      descriptions: [
        {
          weight: 'MEDIUM',
          content: 'Node.js Backend / React Native Frontend / AWS / openCV',
          descriptions: [{ content: 'Backend 부분 혼자서 담당', weight: 'BOLD' }],
        },
        {
          weight: 'MEDIUM',
          content: 'Swagger를 통한 API 관리',
          descriptions: [{ content: 'API마다 Swagger 문서 작성' }],
        },
        {
          weight: 'MEDIUM',
          content: '반복적인 작업 필요한 경우 Cron job 설정',
        },
        {
          weight: 'MEDIUM',
          content: 'Repository',
          href: 'https://github.com/wltjr0920/SwCap1995_backend_api_server_Nodejs',
        },
      ],
    },
    {
      title: '패션 스타일 트렌드 분석의 의사 결정 시스템 개발',
      startedAt: '2019-09',
      endedAt: '2019-12',
      where: '아주대학교',
      descriptions: [
        {
          weight: 'MEDIUM',
          content: 'Django Backend / React Frontend',
        },
        {
          weight: 'MEDIUM',
          content: '웹페이지 링크 (닫혀있을 경우 메일로 연락주세요)',
          href: 'http://210.107.206.210:8000/',
        },
        {
          weight: 'MEDIUM',
          content: '30만장의 데이터 학습',
          descriptions: [
            { content: 'ResNet을 통한 모델 학습' },
            { content: 'Attribute 약 100여개 추출' },
            { content: 'maskRCNN 으로 배경 제거 후 분류작업' },
          ],
        },
        {
          weight: 'MEDIUM',
          content: 'StyleQ - 사용자의 이미지에 대한 Attribute 분석',
        },
        {
          weight: 'MEDIUM',
          content: 'TrendQ - 어떤 그룹과 Attribute를 섞을 지 선택',
        },
        {
          weight: 'MEDIUM',
          content:
            'FashionQ - 사용자의 이미지와, 선택한 그룹의 Intersection출력 및 패션쇼 링크 제공',
        },
        {
          weight: 'MEDIUM',
          content: '논문 링크',
          href: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE10499014',
        },
        {
          weight: 'MEDIUM',
          content: 'Repository(Private)',
          href: 'https://github.com/wltjr0920/FashionQ',
        },
      ],
    },
    {
      title: 'SNS기반, 발 모양에 따른 신발 추천 애플리케이션 - 신데렐라',
      startedAt: '2019-09',
      endedAt: '2019-12',
      where: '아주대학교',
      descriptions: [
        {
          weight: 'MEDIUM',
          content: '사용자의 발 모양에 맞는 신발 추천 애플리케이션 개발',
        },
        {
          weight: 'MEDIUM',
          content: 'HCI 요소 사용하여 사용자의 니즈 파악',
          descriptions: [
            { content: '설문조사 / 인터뷰를 이용한 사용자 니즈 파악' },
            { content: 'Low-Fi / Mid-Fi 프로토타입을 개발하면서 사용자의 요구를 충족시키는 개발' },
          ],
        },
        {
          weight: 'MEDIUM',
          content: 'Android Client / Firebase 서버 사용',
        },
        {
          weight: 'MEDIUM',
          content: 'Repository',
          href: 'https://github.com/wltjr0920/Sinderella',
        },
      ],
    },
    {
      title: 'Fasttext를 이용한 아이디어 추천 알고리즘 개발',
      startedAt: '2019-09',
      endedAt: '2019-11',
      where: '아주대학교',
      descriptions: [
        {
          weight: 'MEDIUM',
          content: '사용자가 키워드를 입력하면 랜덤 아이디어를 추천해주는 서비스 개발',
        },
        {
          weight: 'MEDIUM',
          content: '위키 백과 문서로 모델 학습 및 전처리',
          descriptions: [{ content: '약 1000 개의 형용사 / 700개의 명사 처리' }],
        },
        {
          weight: 'MEDIUM',
          content: 'Python Django 백엔드 머신러닝 서빙',
          descriptions: [{ content: 'Fasttext 모델 싱글턴 패턴 사용' }],
        },
        {
          weight: 'MEDIUM',
          content: '논문 링크',
          href: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE09346532',
        },
        {
          weight: 'MEDIUM',
          content: 'Repository',
          href: 'https://github.com/ajou-jipjung-2/D_AI_Server_Project',
        },
      ],
    },
    {
      title: '자취생 커뮤니티 Android App 개발',
      startedAt: '2019-03',
      endedAt: '2019-07',
      where: '아주대학교',
      descriptions: [
        {
          weight: 'MEDIUM',
          content: 'Android Client / Firebase Backend 개발',
        },
        {
          weight: 'MEDIUM',
          content: 'Repository',
          href: 'https://github.com/wltjr0920/live_alone',
        },
      ],
    },
    {
      title: 'IoT 환경에서의 QUIC 프로토콜 적용',
      startedAt: '2019-03',
      endedAt: '2019-07',
      where: '아주대학교',
      descriptions: [
        { content: 'QUIC 연구' },
        {
          weight: 'MEDIUM',
          content: 'NS-3 on Mac 시뮬레이션',
          descriptions: [
            {
              content: 'HandOver 상황 구현',
            },
            {
              content: 'HandOver 상황에서의 QUIC 적용',
            },
            {
              content: 'TCP와 QUIC의 비교',
            },
          ],
        },
      ],
    },
    {
      title: '컴파일러 프로젝트',
      startedAt: '2019-03',
      endedAt: '2019-07',
      where: '아주대학교',
      descriptions: [{ content: 'Mini-C언어 개발' }, { content: 'Lex / Yacc 사용' }],
    },
    {
      title: '핏츠 2.0 서버개발',
      startedAt: '2018-08',
      endedAt: '2019-02',
      where: 'Popone',
      descriptions: [
        {
          weight: 'MEDIUM',
          content: 'Ruby on rails 서버 개발',
          descriptions: [
            { content: 'HomeFeed API 내 체형/ 전체체형 나누기' },
            { content: '게시글 view 수 개선 등' },
          ],
        },
        {
          weight: 'MEDIUM',
          content: '배포 프로세스 경험',
          descriptions: [
            { content: 'AWS Elastic Beanstalk 을 사용' },
            { content: 'Docker Build 경험' },
          ],
        },
        {
          weight: 'MEDIUM',
          content: '테스트 코드 및 Swagger 작성',
          descriptions: [
            { content: 'Rails 빌드 전 테스트를 위한 테스트코드 작성' },
            { content: 'Android / iOS 개발자를 위한 Swagger 문서 작성' },
          ],
        },
        {
          weight: 'MEDIUM',
          content: '쇼핑몰 크롤링',
          descriptions: [
            { content: '메타쇼핑몰을 위한 타 쇼핑몰 제품 크롤링' },
            { content: 'Nokogiri / Selenium 사용' },
          ],
        },
      ],
    },
  ],
};

export default project;
