import styled from 'styled-components';
import media from 'styled-media-query';
import { layout, flexbox } from 'styled-system';
import { base, theme } from 'components/utils';

/**
 * Container is used to specify main page width
 */
const Container = styled.div`
  position: relative;
  width: 100%;
  padding: 0 ${props => props.theme?.space?.[3] || 16}px;
  margin: 0 auto;

  ${media.greaterThan('medium')`
    width: 720px;
  `}

  ${media.greaterThan('large')`
    width: 1170px;
  `}

  ${base}
  ${layout}
  ${flexbox}
`;

export default Container;
