import React from 'react';
import styled from 'styled-components'

const Component = React.forwardRef((props, ref) => (
  <input ref={ref} {...props} />
));

const TextInput = styled(Component)`
  color: ${props => props.theme.foreground};
  background: ${props => props.theme.inputBackground};
  padding: 12px 12px;
  border: none;
  border-radius: none;
`

export default TextInput