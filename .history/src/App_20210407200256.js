import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Product from "./components/Product";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div>
        <Header />
        <Carousel />
        <Product />
      </div>
    </div>
  );
}

export default App;
