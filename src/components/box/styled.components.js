import styled, { css } from 'styled-components';
import { base } from 'components/utils';

export const WrapperBox = styled.div`
  ${base}

  ${props =>
    props.flexBox &&
    css`
      display: flex;
    `}
`;
