import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todo from "../pages/Todo";
import { GlobalStyle } from "./GlobalStyles";

const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Todo />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
