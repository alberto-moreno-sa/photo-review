import {
  borders,
  color,
  background,
  compose,
  space,
  layout,
  position,
  flexbox,
  typography,
  gridArea,
  gridColumn,
  gridRow,
} from 'styled-system';

export const base = compose(
  background,
  borders,
  color,
  space,
  flexbox,
  typography,
  layout,
  position,
  gridArea,
  gridColumn,
  gridRow
);

export const smoothLinkProps = {
  smooth: true,
  spy: true,
  offset: -80,
  duration: 700,
};
