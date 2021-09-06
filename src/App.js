import { data } from "./data.js";
import "./styles/App.css";
import { Card } from "./components/card.js";

function App() {
  let cards = data.map((item, index) => {
    return <Card time={item.brewTime} color={item.color} name={item.brewType} key={index} />;
  });

  return <>{cards}</>;
}

export default App;
