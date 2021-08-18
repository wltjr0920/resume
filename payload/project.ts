import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'Mashup API Development',
      startedAt: '2018-02',
      where: 'Foo Company',
      descriptions: [
        { content: 'Development and operation of Mashup API of Aggregation Layer' },
        {
          content: 'Add Foo Feature in 2019',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Integer ut libero eu libero mattis rutrum at at urna' },
            { content: 'Integer non turpis ante' },
          ],
        },
        {
          content: 'Launched Bar Service in 2018',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Suspendisse vestibulum odio id libero facilisis gravida' },
            {
              content: 'In ipsum est, pellentesque vestibulum tortor eu, bibendum imperdiet metus',
            },
          ],
        },
      ],
    },
    {
      title: '졸업 프로젝트 - 캡스톤 디자인',
      startedAt: '2020-03',
      endedAt: '2020-07',
      where: '아주대학교',
      descriptions: [
        { content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
        { content: 'Integer massa magna, feugiat commodo arcu sed, sagittis sollicitudin tortor' },
        {
          content: 'Backend Repository',
          href: 'https://github.com/wltjr0920/SwCap1995_backend_api_server_Nodejs',
          weight: 'BOLD',
        },
        { content: 'Proin bibendum non nibh eu aliquet' },
      ],
    },
  ],
};

export default project;
