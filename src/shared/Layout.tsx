import React from "react";
import * as S from "../styles/Layout.styled";
import { Link } from "react-router-dom";

type OwnProps = {
  children: React.ReactNode;
};

const Layout: React.FC<OwnProps> = ({ children }) => {
  return (
    <S.LayoutBox>
      <header>
        <S.LayoutH1>
          <Link to={`/`}>My Todo List</Link>
        </S.LayoutH1>
      </header>

      <main>{children}</main>
    </S.LayoutBox>
  );
};

export default Layout;
