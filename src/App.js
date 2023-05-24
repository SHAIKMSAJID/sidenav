import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Faculty from "./pages/Faculty";
import Student from "./pages/Student";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/Admin" exact element={<Admin />}></Route>
          <Route path="/Faculty" exact element={<Faculty />}></Route>
          <Route path="/Student" exact element={<Student />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
