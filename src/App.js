// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Component/HomePage/HomePage";
import AboutPage from "./Component/AboutUs/AboutUsPage";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import CreateBooks from "./Component/CreateBooks/CreateBooks";
import UpdateBook from "./Component/UpdateBook/UpdateBook";
import HistoryRequest from "./Component/History/HistoryRequest";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/createBooks" element={<CreateBooks />} />
        <Route path="/updateBook/:id" element={<UpdateBook />} />
        <Route path="/historyRequest" element={<HistoryRequest />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
