import {nanoid} from "nanoid";
import {useState, useEffect, useRef} from "react";
import Form from "components/molecules/Form";
import Task from "components/molecules/Task";
import styled from 'styled-components';
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "theme/theme"
import IconButton from "components/atoms/IconButton";
import HiddenText from "components/atoms/HiddenText";
import { GrLock, GrUnlock } from "react-icons/gr";
import { AnimatePresence, motion } from "framer-motion";

const Wrap = styled.div`
  background: ${props => props.theme.background};
  border-radius: 10px;
  margin-bottom: 48px;
  margin-top: 48px;
  overflow: hidden;
`

const List = styled.ul`
  margin: 0px;
  padding: 0px;
`

const Heading = styled.h2`
  color: ${props => props.theme.foreground};
`

const HeadingWrap = styled.div`
  display: flex;
  border-bottom: 1px solid ${props => props.theme.borderColor};

  ${Heading} {
    flex-grow: 1;
    font-size: 13px;
    font-weight: normal;
    text-transform: uppercase;
    line-height: 60px;
    padding-left: 18px;
    margin: 0px;
  }
`

const ListItem = styled.li`
  list-style-type: none;
  overflow: hidden;
`

export default function Ritual(props) {
  const [tasks, setTasksState] = useState(props.tasks);

  const [isEditable, setIsEditable] = useState(false);

  function setTasks(newTasks) {
    localStorage.setItem('tasks', JSON.stringify(newTasks));
    console.log(newTasks);
    setTasksState(newTasks);
  }

  function addTask(name) {
    const newTasks = [...tasks, {
      id: "todo" + nanoid(),
      name: name,
      completed: false
    }];
    setTasks(newTasks);
  }

  function toggleTaskCompleted(id) {
    const newTasks = tasks.map(task => {
      if (id === task.id) {
        return {...task, completed: !task.completed}
      }
      return task;
    });
    setTasks(newTasks);
  }

  function editTask(id, newName) {
    const newTasks = tasks.map(task => {
      if (id === task.id) {
        return {...task, name: newName}
      }
      return task;
    });
    setTasks(newTasks);
  }

  function deleteTask(id) {
    const newTasks = tasks.filter(task => id !== task.id);
    setTasks(newTasks);
  }

  function toggleIsEditable() {
    if (isEditable == true) {
      setIsEditable(false);
    } else {
      setIsEditable(true);
    }
  }

  const ritual = tasks
    .map(task => (
      <AnimatePresence>
        <ListItem
          as={motion.li}
          initial={{ height: 0 }}
          animate={{ height: 61 }}
          exit={{ height: 0 }}
        >
          <Task
            id={task.id}
            name={task.name}
            completed={task.completed}
            key={task.id}
            toggleTaskCompleted={toggleTaskCompleted}
            deleteTask={deleteTask}
            editTask={editTask}
            isEditable={isEditable}
          />
        </ListItem>
      </AnimatePresence>
    )
  );

  return (
    <ThemeProvider theme={props.theme == 'lightTheme' ? lightTheme : darkTheme}>
      <Wrap>
        <HeadingWrap>
          <Heading>{props.name}</Heading>

          <IconButton onClick={() => toggleIsEditable()}>
            {isEditable == true &&
              <><GrUnlock /><HiddenText>Lock Changes</HiddenText></>
            }

            {isEditable == false &&
              <><GrLock /><HiddenText>Make Changes</HiddenText></>
            }
          </IconButton>
        </HeadingWrap>

        <List aria-labelledby="list-heading" >
          {ritual}
        </List>

        {isEditable && 
          <Form addTask={addTask} />
        }
      </Wrap>
    </ThemeProvider>
  );
}
