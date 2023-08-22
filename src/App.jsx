import NavBar from "./components/navBar/NavBar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";

const App = () => {
  const greetings = "Welcome to LS Motorstore."
  return (
    <>
      <NavBar />
      <ItemListContainer greetings={greetings} />
    </>
  );
}
export default App
