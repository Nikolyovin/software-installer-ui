import { Button } from "antd";
import ListProgramm from "./components/list-programm";

function App() {
  return (
    <div className="App">
      <ListProgramm />
      <Button type="primary">Начать установку</Button>
    </div>
  );
}

export default App;
