import styled, { css } from 'styled-components';
import { typography } from 'styled-system';
import { base } from 'components/utils';
import { body } from 'components/theme/styles';

export const Wrapper = styled.p`
  padding: 0;
  margin: 0;
  font: inherit;
  color: inherit;

  font-family: ${body.fontFamily};
  font-size: ${body.fontSize}px;
  font-weight: 400;
  line-height: ${body.lineHeight};

  label& {
    cursor: pointer;
    user-select: none;
  }

  ${base}
  ${typography}

  ${props =>
    props.h1 &&
    css`
      font-size: 48px;
      font-weight: 800;
      line-height: 1.1;
    `}

  ${props =>
    props.h2 &&
    css`
      font-size: 32px;
      font-weight: 800;
      line-height: 1.2;
    `}

    ${props =>
    props.h3 &&
    css`
      font-size: 24px;
      font-weight: 800;
      line-height: 1.6;
    `}
`;
