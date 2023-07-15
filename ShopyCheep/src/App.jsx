import './App.css'
import Navegacion from './Navegacion/Navegacion'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

function Layout(){
  return(<h1>Layout</h1>)
}

function Home(){
  return(<h1>Home</h1>)
}

function Blogs(){
  return(<h1>Blogs</h1>)
}

function NoPage(){
  return(<h1>NoPage</h1>)
}


  return (
    <>
      <Navegacion />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
