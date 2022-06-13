import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styled.components';

/**
 * Text utilities
 */
const Typography = ({ children, ...props }) => (
  <Wrapper {...props}>{children}</Wrapper>
);

Typography.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.elementType,
  variant: PropTypes.oneOfType([
    PropTypes.oneOf(['h2', 'h3']),
    PropTypes.object,
  ]),
};

Typography.defaultProps = {
  variant: null,
  as: null,
};

export default Typography;
