import { data } from "./data.js";
import "./styles/App.css";
import { Card } from "./components/card.js";

function App() {
  let cards = data.map((item, index) => {
    return <Card data={item} key={index} z={index + 1} />;
  });

  return <>{cards}</>;
}

export default App;
