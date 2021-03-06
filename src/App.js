import {React, useState} from "react";
import styled from "styled-components";
import Ritual from "components/organisms/Ritual";
import { motion } from "framer-motion";

const Wrap = styled.div`
  max-width: 500px;
  margin: 0px auto;

  @media screen and (max-width: 520px) {
    max-width: 100%;
  }
`

const Link = styled.a`
  text-align: center;
  margin-top: 48px;
  display: block;
  font-size: 13px;
  color: #bbb;
  font-weight: normal;
  text-decoration: none;

  &:hover {
    color: #fff;
  }
`


function App(props) {
  const [rituals, setRitualsState] = useState(props.rituals);

  return (
    <Wrap
      as={motion.div}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
    >
      {rituals.map(ritual => (
        <Ritual
          id={ritual.id}
          name={ritual.name}
          key={ritual.id}
          tasks={ritual.tasks}
          theme={ritual.theme}
        />
      ))}

      <Link href="https://github.com/alextebbs/ritual">View source code on Github</Link>

    </Wrap>
  );
}

export default App;
