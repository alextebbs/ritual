import {useState, useEffect, useRef} from "react";
import styled from "styled-components";
import Ritual from "components/organisms/Ritual";

const Wrap = styled.div`
  max-width: 500px;
  margin: 0px auto;
`

const Heading = styled.h1`
  font-weight: normal;
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
    <Wrap>
      <Heading>RITUAL</Heading>

      {ritualList}
    </Wrap>
  );
}

export default App;
