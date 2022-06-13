import React from 'react';
import PropTypes from 'prop-types';

import { WrapperBox } from './styled.components';

const Box = ({ children, ...props }) => (
  <WrapperBox {...props}>{children}</WrapperBox>
);

Box.propTypes = {
  children: PropTypes.node,
  flexBox: PropTypes.bool,
};

Box.defaultProps = {
  flexBox: false,
};

export default Box;
