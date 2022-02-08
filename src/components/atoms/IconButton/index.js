import styled from 'styled-components'

const IconButton = styled.button`
  background: #0078d7;
  color: #fff;
  border-radius: 0px;
  appearance: none;
  border: none;
  padding: 6px 12px;
  height: 60px;
  width: 60px;
  background: transparent;
  color: ${props => props.theme.foreground};
  border-left: 1px solid ${props => props.theme.borderColor};
  font-size: 18px;

  svg path {
    stroke: ${props => props.theme.foreground};
  }

  &:hover {
    background: ${props => props.theme.inputBackgroundFocus}
  }
`

export default IconButton;
