import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Orders from "./Components/Orders/Orders";
import Header from "./Components/Header/Header";
import Inventory from "./Components/Inventory/Inventory";
import Shop from "./Components/Shop/Shop";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop></Shop>}></Route>
        <Route path="/Shop" element={<Shop></Shop>}></Route>
        <Route path="/Orders" element={<Orders></Orders>}></Route>
        <Route path="/Inventory" element={<Inventory></Inventory>}></Route>
        <Route path="/About" element={<About></About>}></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path="/Register" element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
