import styled from 'styled-components';
import { base } from 'components/utils';
import { transition, breakpoints, colors } from 'components/theme/styles';

import Box from 'components/box';
import { Image } from 'components/image';

export const Wrapper = styled.div`
  overflow: hidden;
  width: 100%;

  [class*='swiper-slide'] {
    width: fit-content;
  }

  [class*='swiper-pagination-bullet-active'] {
    background: red;
  }
`;

export const Bullet = styled.span`
  background: $color-cerulean-fill-light-70;
  border-radius: 8px;
  height: 4px;
  width: 34px;
  margin: 0 4px;
`;

export const Img = styled(Image)`
  position: relative;
  cursor: pointer;
  box-shadow: 0 20px 40px rgba(195, 107, 132, 0.1);
  transition: ${transition.all};
  transform: scale(0.8);
  border-radius: 20px;

  .slick-active & {
    z-index: 2;
  }

  ${base}

  width: 200px !important;
  height: 100px !important;

  &:hover {
    transform: scale(1) rotate(-1deg);
  }
`;
