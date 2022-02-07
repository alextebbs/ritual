import {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import { FiEdit3, FiSlash, FiThumbsUp, FiTrash } from "react-icons/fi";
import HiddenText from "components/atoms/HiddenText";
import Button from "components/atoms/Button";
import TextInput from "components/atoms/TextInput";

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
`

const ActionsWrap = styled.div`
  display: flex;

  ${Button} {
    background: transparent;
    border-left: 1px solid ${props => props.theme.borderColor};
    color: ${props => props.theme.foreground}
  }
`

const ListItem = styled.li`
  list-style-type: none;
`

const Label = styled.label`
  color: ${props => props.theme.foreground};
  padding: 12px;
  display: block;
`

export default function Task(props) {

  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState(props.name);

  const editFieldRef = useRef(null);
  const editButtonRef = useRef(null);

  const wasEditing = usePrevious(isEditing);

  function handleChange(e) {
    setNewName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.editTask(props.id, newName);
    setNewName(props.name);
    setEditing(false);
  }

  const editingTemplate = (
    <Wrap as='form' onSubmit={handleSubmit}>
      <ContentWrap>
        <HiddenText as='label' htmlFor={props.id}>
          New name for {props.name}
        </HiddenText>
        <TextInput
          id={props.id}
          value={newName}
          onChange={handleChange}
          ref={editFieldRef}
        />
      </ContentWrap>
      <ActionsWrap>
        <Button
          type="button"
          onClick={() => setEditing(false)}
        >
          <FiSlash /><HiddenText>Cancel renaming {props.name}</HiddenText>
        </Button>
        <Button type="submit">
          <FiThumbsUp /><HiddenText>Save new name for {props.name}</HiddenText>
        </Button>
      </ActionsWrap>
    </Wrap>
  );

  const viewTemplate = (
    <Wrap>
      <ContentWrap>
        <input
          id={props.id}
          type="checkbox"
          defaultChecked={props.completed}
          onChange={() => props.toggleTaskCompleted(props.id)}
        />
        <Label className="todo-label" htmlFor={props.id}>
          {props.name}
        </Label>
      </ContentWrap>
      <ActionsWrap>
        <Button
          type="button"
          onClick={() => setEditing(true)}
          ref={editButtonRef}
        >
          <FiEdit3 /><HiddenText>Edit {props.name}</HiddenText>
        </Button>
        <Button
          type="button"
          onClick={() => props.deleteTask(props.id)}
        >
          <FiTrash /><HiddenText>Delete {props.name}</HiddenText>
        </Button>
      </ActionsWrap>
    </Wrap>
  );

  useEffect(() => {
    if (!wasEditing && isEditing) {
      editFieldRef.current.focus();
    }
    if (wasEditing && !isEditing) {
      editButtonRef.current.focus();
    }
  }, [wasEditing, isEditing]);

  return <ListItem>{isEditing ? editingTemplate : viewTemplate}</ListItem>;
}
