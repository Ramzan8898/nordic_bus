import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import './App.css';
import MainLayout from "./layouts/Layout";
import Page from "./pages/Page";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>

          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Page />} />

        </Route>
      </Routes>
    </>
  );
}

export default App;
