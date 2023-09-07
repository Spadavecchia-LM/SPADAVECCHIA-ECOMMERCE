import NavBar from "./components/navBar/NavBar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/category/:categoryId" element={<ItemListContainer/>}/>
        <Route exact path="/product/:productId" element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App
