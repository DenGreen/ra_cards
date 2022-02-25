import Cards from "./components/Cards/Cards";
import FullCards from "./components/FullCards/FullCards";

const cards = {
  title: "Привет мир!",
  text: "С другой стороны, глубокий уровень погружения не оставляет шанса для соответствующих условий активизации.",
  linkText: "Развернуть"
};

function App() {

  return (
    <div>
      <Cards {...cards}/>
      <Cards {...cards}>
        <FullCards img={"123.jpg"}/>
      </Cards>
    </div>
      
  );
}

export default App;
