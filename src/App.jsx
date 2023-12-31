import NavBar from "./components/navBar/NavBar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import Cart from "./components/cart/Cart";
import ShoppingCartProvider from "./context/ShoppingCartProvider";
import Form from "./components/cart/Form"
import "./index.css"
import OrderContainer from "./components/orderContainer/OrderContainer";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <ShoppingCartProvider>
        <NavBar />
        <Routes>
          <Route exact path="/myorders" element={<OrderContainer />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/category/:categoryId" element={<ItemListContainer />} />
          <Route exact path="/product/:productId" element={<ItemDetailContainer />} />
          <Route exact path="/checkout" element={<Form />} />
        </Routes>
      </ShoppingCartProvider>
      <Footer />
    </BrowserRouter>


  );
}
export default App
