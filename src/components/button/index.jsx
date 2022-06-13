import React from 'react';
import PropTypes from 'prop-types';
import { IconWrapper, TextWrapper, Wrapper } from './styled.components';

const Button = ({ children, ...props }) => (
  <Wrapper {...props}>{children}</Wrapper>
);

Button.propTypes = {
  /**
   * Content of the button
   */
  children: PropTypes.node.isRequired,
  /**
   * Component which will be used instead of default
   */
  as: PropTypes.elementType,
};

Button.defaultProps = {
  as: 'button',
};

export default Button;
