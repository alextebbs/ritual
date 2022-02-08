import {useState} from "react";
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

function App(props) {
  const [rituals, setRitualsState] = useState(props.rituals);

  const ritualList = rituals
    .map(ritual => (
      <Ritual
        id={ritual.id}
        name={ritual.name}
        key={ritual.id}
        tasks={ritual.tasks}
        theme={ritual.theme}
      />
    )
  );


  return (
    <Wrap
      as={motion.div}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
    >
      {ritualList}
    </Wrap>
  );
}

export default App;
