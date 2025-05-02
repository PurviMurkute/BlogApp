import { createRoot } from "react-dom/client";
import "./index.css";
import { Blogs } from "./views/Blogs";
import { BrowserRouter, Routes, Route } from "react-router";
import { Read } from "./views/Read";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Blogs />}></Route>
      <Route path="/read/:id/:category" element={<Read/>}></Route>
    </Routes>
  </BrowserRouter>
);
