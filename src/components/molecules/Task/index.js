import {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import { FiTrash } from "react-icons/fi";
import HiddenText from "components/atoms/HiddenText";
import IconButton from "components/atoms/IconButton";
import TextInput from "components/atoms/TextInput";
import Checkbox from "components/atoms/Checkbox";

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const Wrap = styled.div`
  border-bottom: 1px solid ${props => props.theme.borderColor};
  position: relative;
  display: flex;
`

const ContentWrap = styled.div`
  display: flex;
  width: 100%;

  ${TextInput} {
    flex-grow: 1;
  }
`

const ActionsWrap = styled.div`
  display: flex;
`


export default function Task(props) {

  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState(props.name);

  const editFieldRef = useRef(null);
  const editButtonRef = useRef(null);

  const wasEditing = usePrevious(isEditing);

  function handleChange(e) {
    setNewName(e.target.value);
    props.editTask(props.id, newName);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  useEffect(() => {
    if (!wasEditing && isEditing) {
      editFieldRef.current.focus();
    }
    if (wasEditing && !isEditing) {
      editButtonRef.current.focus();
    }
  }, [wasEditing, isEditing]);

  return (
    <Wrap as='form' onSubmit={handleSubmit}>
      <ContentWrap>
        <Checkbox
          id={props.id}
          defaultChecked={props.completed}
          onChange={() => props.toggleTaskCompleted(props.id)}
        />
        <TextInput
          id={props.id}
          value={newName}
          onChange={handleChange}
          ref={editFieldRef}
          disabled={!props.isEditable}
        />
      </ContentWrap>
      {props.isEditable && 
        <ActionsWrap>
          <IconButton
            type="button"
            onClick={() => props.deleteTask(props.id)}
          >
            <FiTrash /><HiddenText>Delete {props.name}</HiddenText>
          </IconButton>
        </ActionsWrap>
      }
    </Wrap>
  );
}
