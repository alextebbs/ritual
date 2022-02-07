import {useState} from "react";
import HiddenText from "components/atoms/HiddenText";
import Button from "components/atoms/Button";
import {FiPlus} from "react-icons/fi";
import TextInput from "components/atoms/TextInput";
import styled from "styled-components";

const Wrap = styled.form`
  display: flex;

  ${TextInput} {
    width: 100%;
  }
`

export default function Form(props) {
  const [name, setName] = useState('')

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (name !== '') {
      props.addTask(name);
      setName('');
    }
  }

  return (
    <Wrap onSubmit={handleSubmit}>
      <TextInput
        id="new-todo-input"
        name="text"
        autoComplete="off"
        placeholder="Add a new Task"
        value={name}
        onChange={handleChange}
      />
      <Button type="submit">
        <FiPlus /><HiddenText>Add Task</HiddenText>
      </Button>
    </Wrap>
  );
}
