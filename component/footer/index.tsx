import { Col, Row } from 'reactstrap';
import { PropsWithChildren } from 'react';
import { EmptyRowCol, HrefTargetBlank } from '../common';

import { IFooter } from './IFooter';
import { Style } from '../common/Style';

export const Footer = {
  Component,
};

function Component({ payload }: PropsWithChildren<{ payload: IFooter.Payload }>) {
  return (
    <Row>
      <Col style={Style.footerCover}>
        <div style={Style.footer} className="text-center mt-2">
          <EmptyRowCol>
            <small>
              v.{`${payload.version} / `}
              {/* Github 주소는 origin repository 의 주소를 넣는다. */}
              <HrefTargetBlank url="https://github.com/wltjr0920" text="Github" />
            </small>
          </EmptyRowCol>
          <EmptyRowCol>
            <small>
              <HrefTargetBlank url="https://nextjs.org/" text="Next.js" /> v{payload.nextVersion}
              {' / '}
              <HrefTargetBlank url="https://reactjs.org/" text="React.js" /> v{payload.reactVersion}
              {' / '}
              <HrefTargetBlank url="https://getbootstrap.com" text="Bootstrap" /> v
              {payload.bootstrapVersion}
            </small>
          </EmptyRowCol>
          <br />
        </div>
      </Col>
    </Row>
  );
}
