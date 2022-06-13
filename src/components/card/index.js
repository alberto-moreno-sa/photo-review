import styled from 'styled-components';
import { boxShadow } from 'styled-system';
import { base, theme } from 'components/utils';
import { borderRadius, colors } from 'components/theme/styles';

const Card = styled.div`
  padding: 60px 30px;
  text-align: left;
  background-color: ${colors.gray[7]};
  border: none;
  border-radius: ${borderRadius.normal}px;
  outline: none !important;
  box-shadow: 0 20px 40px rgba(195, 107, 132, 0.1);

  button& {
    cursor: pointer;
  }

  ${boxShadow}
  ${base}

  page-break-inside: avoid;
  break-inside: avoid;
`;

export default Card;
