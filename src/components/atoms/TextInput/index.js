import React from 'react';
import styled from 'styled-components'

const Component = React.forwardRef((props, ref) => (
  <input ref={ref} {...props} />
));

const TextInput = styled(Component)`
  color: ${props => props.theme.foreground};
  background: transparent;
  padding: 12px 18px;
  border: none;
  border-radius: none;
  height: 60px;

  &[disabled]:hover {
    background: transparent;
  }

  &:hover {
    background: ${props => props.theme.inputBackgroundFocus};
  }

  &:focus {
    outline: none;
    background: ${props => props.theme.inputBackgroundFocus};
  }
`

export default TextInput