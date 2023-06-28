import ColorList from "./ColorList";
import Form from "./Form";
import Wrapper from "./Wrappers/App";
import { useGlobalContext } from "./context";

function App() {
  const { colorList } = useGlobalContext();
  return (
    <Wrapper>
      <Form />
      {colorList[0] ? <ColorList colorList={colorList} /> : null}
    </Wrapper>
  );
}

export default App;
