import { data } from "./data.js";
import "./App.css";
import { Card } from "./card.js";

function App() {
  let cards = data.map((item) => {
    return <Card time={item.brewTime} color={item.color} name={item.brewType} />;
  });

  return <>{cards}</>;
}

export default App;
