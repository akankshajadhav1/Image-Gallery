import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Search from "./components/Search";
import SearchResult from "./components/SearchResult";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import UploadForm from "./components/UploadForm";
import PhotoCard from "./components/PhotoCard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/header" exact element={<Header />} />
        <Route path="/search" exact element={<Search />} />
        <Route path="/search" exact element={<UploadForm />} />
        <Route path="/searchresult" exact element={<SearchResult />} />
        {/* <Route path="/photocard" exact element={<PhotoCard />} /> */}
      </Routes>
    </Router>
  );
}

export default App;


