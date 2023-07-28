import React from "react";
import * as S from "../styles/Input.styled";

const Input: React.FC = () => {
  return (
    <S.InputForm>
      <S.InputLabel>
        제목
        <S.InputInput></S.InputInput>
      </S.InputLabel>

      <S.InputLabel>
        내용
        <S.InputInput></S.InputInput>
      </S.InputLabel>

      <S.InputButton>추가하기</S.InputButton>
    </S.InputForm>
  );
};

export default Input;
