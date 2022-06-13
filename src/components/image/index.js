import styled from 'styled-components';

import { base } from 'components/utils';
import { borderRadius, transition } from 'components/theme/styles';

export const Wrapper = styled.div`
  position: relative;

  ${base};
`;

export const ImageWrapper = styled.div`
  position: relative;
  padding-top: 65%;
  overflow: hidden;
  border-radius: ${borderRadius.xxLarge}px;
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  transition: ${transition.all};

  &:hover {
    transform: scale(1.1) rotate(-1deg);
  }
`;
