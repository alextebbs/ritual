import { FiCheck } from 'react-icons/fi'
import styled from 'styled-components'
import HiddenText from '../HiddenText'

const CheckboxWrapper = styled.div`
  height: 60px;
  width: 60px;

  input {
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px 1px 1px 1px);
    clip: rect(1px, 1px, 1px, 1px);
    white-space: nowrap;
  }
`

const FakeCheckInner = styled.div`
  height: 40px;
  width: 40px;
  border: 2px solid ${props => props.theme.borderColor};
  border-radius: 5px;
  font-size: 30px;
  line-height: 48px;
  text-align: center;
  transition: all 0.2s;
`

const FakeCheck = styled.label`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  transition: all 0.2s;
  color: transparent;
  cursor: pointer;

  input:checked ~ & {
    ${FakeCheckInner} {
      color: #0078d7;
      border: 2px solid #0078d7;
    }
  }

  &:hover, input:focus ~ & {
    ${FakeCheckInner} {
      background-color: #0078d722;
      border: 2px solid #0078d7;
    }
  }
`

const Component = function (props) {
  return (
    <CheckboxWrapper>
      <input type='checkbox' {...props} />
      <FakeCheck htmlFor={props.id}>
        <FakeCheckInner>
          <FiCheck /><HiddenText>Toggle Task Completion</HiddenText>
        </FakeCheckInner>
      </FakeCheck>
    </CheckboxWrapper>
  )
}

const Checkbox = styled(Component)``

export default Checkbox