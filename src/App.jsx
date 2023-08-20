import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

export default function App() {
  const greetings = "Welcome to LS Motorstore."
  return (
    <>
      <NavBar />
      <ItemListContainer greetings={greetings} />
    </>
  );
}
