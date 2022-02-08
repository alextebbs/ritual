import { FiCheck } from 'react-icons/fi'
import styled from 'styled-components'

const CheckboxWrapper = styled.div`
  height: 60px;
  width: 60px;

  input {
    display: none;
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

  &:hover {
    ${FakeCheckInner} {
      background-color: #0078d722;
      border: 1px solid #0078d7;
    }
  }
`

const Component = function (props) {
  return (
    <CheckboxWrapper>
      <input type='checkbox' {...props} />
      <FakeCheck htmlFor={props.id}>
        <FakeCheckInner>
          <FiCheck />
        </FakeCheckInner>
      </FakeCheck>
    </CheckboxWrapper>
  )
}

const Checkbox = styled(Component)``

export default Checkbox