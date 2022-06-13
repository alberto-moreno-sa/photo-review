import styled, { css } from 'styled-components';
import {
  borderRadius,
  transition,
  colors,
  base,
  theme,
} from 'components/theme/styles';
import { transparentize } from 'polished';

export const Wrapper = styled.button`
  align-self: center;
  text-align: center;
  position: relative;
  display: inline-block;
  padding: 11px 48px 12px;
  white-space: nowrap;
  border-radius: ${borderRadius.large}px;
  transition: ${transition.all};
  margin: 0;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  border: none;
  outline: 0;
  color: #ffffff;
  background: ${colors.primary};
  box-shadow: 0 24px 32px ${transparentize(0.86, colors.primary)};
  max-width: 200px;
  width: 100%;

  &:hover {
    background: ${colors.shades.primary[1]};
  }

  &:active,
  &:focus {
    color: ${colors.shades.primary[2]};
  }

  & + & {
    margin-left: ${props => props.theme?.space?.[2] || 4}px;
  }

  &:hover,
  &:focus {
    outline: none;
  }

  ${base};

  ${props =>
    props.accent &&
    css`
      color: ${colors.gray[7]};
      background: ${colors.accent};
      box-shadow: 0 24px 32px ${transparentize(0.86, colors.accent)};

      &:hover {
        background: ${colors.shades['accent'][1]};
      }

      &:active,
      &:focus {
        background: ${colors.shades['accent'][2]};
        box-shadow: none;
      }
    `}
`;
