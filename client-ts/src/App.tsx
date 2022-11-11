import { useState } from "react";
import Header from "./views/components/header/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./views/screens/home/home.screen";
import ProductPage from "./views/components/product-page/product-page";
import Cart from "./views/components/cart/cart";

//cart context
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  const [count, setCount] = useState(0);

  return (
<<<<<<< HEAD
=======
    // <ShoppingCartProvider>
>>>>>>> 10912eb4172baca1f4ffc9e1cc6990781b013048
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:id" element={<ProductPage />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/cart/:id" element={<Cart />}></Route>
        </Routes>
      </div>
    </Router>
<<<<<<< HEAD
    // <ShoppingCartProvider>

=======
>>>>>>> 10912eb4172baca1f4ffc9e1cc6990781b013048
    // </ShoppingCartProvider>
  );
}

export default App;
