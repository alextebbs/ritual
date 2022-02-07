import {nanoid} from "nanoid";
import {useState, useEffect, useRef} from "react";
import Form from "components/molecules/Form";
import Task from "components/molecules/Task";
import styled from 'styled-components';
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "theme/theme"

const Wrap = styled.div`
  background: ${props => props.theme.background};
`

const List = styled.ul`
  margin: 0px;
  padding: 0px;
`

const Heading = styled.h2`
  color: ${props => props.theme.foreground};
`

export default function Ritual(props) {
  const [tasks, setTasksState] = useState(props.tasks);

  function setTasks(newTasks) {
    localStorage.setItem('tasks', JSON.stringify(newTasks));
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

  const ritual = tasks
    .map(task => (
      <Task
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    )
  );

  return (
    <ThemeProvider theme={props.theme == 'lightTheme' ? lightTheme : darkTheme}>
      <Wrap>
        <Heading>{props.name}</Heading>
        <List aria-labelledby="list-heading" >
          {ritual}
        </List>
        <Form addTask={addTask} />
      </Wrap>
    </ThemeProvider>
  );
}
