import "./App.css";
import { MyDataProvider } from "./Context/MyDataContext";
import Navegacion from "./Navegacion/Navegacion";
import Places from "./Places/Places";
import Products from "./Products/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchView from "./Products/SearchView/SearchView";
import About from "./About/About";

MyDataProvider;

function App() {
  function NoPage() {
    return <h1>NoPage</h1>;
  }

  return (
    <BrowserRouter>
      <MyDataProvider>
        <Navegacion />
        <Routes>
          <Route path="/" element={<Places />} />
          <Route path="/about" element={<About />} />
          <Route path="/productos/:supermercado" element={<Products />} />
          <Route path="/search/productos" element={<SearchView />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </MyDataProvider>
    </BrowserRouter>
  );
}

export default App;
