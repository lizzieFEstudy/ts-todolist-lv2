import React from "react";
import { useNavigate, useParams } from "react-router";
import { useAppSelector } from "../redux/config/hooks";
import * as S from "../styles/Detail.styled";

const Detail: React.FC = () => {
  const navigate = useNavigate();

  const paramId = useParams().id;

  const todosData = useAppSelector(state => state.todos.todos);
  const detailData = todosData?.find(todo => todo.id === paramId); // Q:: 구조분해할당으로 가져오고 싶었는데 에러 Type 'TodoModel | undefined' is not assignable...

  return (
    <S.DetailBox>
      <S.DetailSpan>id: {detailData?.id}</S.DetailSpan>
      <S.DetailStrong>{detailData?.title}</S.DetailStrong>
      <S.DetailParagraph>{detailData?.contents}</S.DetailParagraph>
      <S.DetailButton
        onClick={() => {
          navigate(-1);
        }}
      >
        이전으로
      </S.DetailButton>
    </S.DetailBox>
  );
};

export default Detail;
