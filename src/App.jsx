import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import CheckOut from "./pages/CheckOut";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
