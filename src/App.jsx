import "./App.css";
import Header from "./components/header/Header";
import HomePage from "./pages/homePage/HomePage";
import { Route, Routes } from "react-router-dom";
import BookPage from "./pages/bookPage/BookPage";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bookinfo" element={<BookPage />} />
      </Routes>
    </div>
  );
}

export default App;
