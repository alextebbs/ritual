import {useState} from "react";
import HiddenText from "components/atoms/HiddenText";
import IconButton from "components/atoms/IconButton";
import {FiPlus} from "react-icons/fi";
import TextInput from "components/atoms/TextInput";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

const Wrap = styled.form`
  display: flex;

  ${TextInput} {
    height: 60px;
    flex-grow: 1;
  }

  ${IconButton} {
    height: 60px;
    width: 60px;
    background: transparent;
    color: ${props => props.theme.foreground};
    border-left: 1px solid ${props => props.theme.borderColor};

    &:hover {
      background: ${props => props.theme.inputBackgroundFocus}
    }
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
    <AnimatePresence>
      <Wrap
        as={motion.form}
        initial={{height:0}}
        animate={{height:61}}
        onSubmit={handleSubmit}
      >
        <TextInput
          id="new-todo-input"
          name="text"
          autoComplete="off"
          placeholder="Add a new Task"
          value={name}
          onChange={handleChange}
        />
        <IconButton type="submit">
          <FiPlus /><HiddenText>Add Task</HiddenText>
        </IconButton>
      </Wrap>
    </AnimatePresence>
  );
}
