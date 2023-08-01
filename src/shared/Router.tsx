import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todo from "../pages/Todo";
import { GlobalStyles } from "../styles/GlobalStyles";
import Layout from "./Layout";
import Detail from "../pages/Detail";
import { __getTodos } from "../redux/modules/todosSlice";
import { useAppDispatch } from "../redux/config/hooks";

const Router: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(__getTodos());
  }, []);

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
