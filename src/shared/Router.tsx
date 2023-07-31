import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todo from "../pages/Todo";
import { GlobalStyles } from "../styles/GlobalStyles";
import Layout from "./Layout";
import Detail from "../pages/Detail";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<Todo />}></Route>
          <Route path="detail/:id" element={<Detail />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
