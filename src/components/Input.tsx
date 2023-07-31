import React, { useState } from "react";
import * as S from "../styles/Input.styled";
import { useAppDispatch } from "../redux/config/hooks";
import { addTodo } from "../redux/modules/todosSlice";

const Input: React.FC = () => {
  const dispatch = useAppDispatch();

  let [title, setTitle] = useState("");
  let [contents, setContents] = useState("");

  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    setState: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setState(e.target.value);
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title) return window.alert("제목을 입력해주세요");

    let newTodos = {
      title,
      contents
    };

    dispatch(addTodo(newTodos));

    setTitle("");
    setContents("");
  };

  return (
    <S.InputForm onSubmit={onSubmitHandler}>
      <S.InputLabel>
        제목
        <S.InputInput
          type="text"
          value={title}
          onChange={e => onChangeHandler(e, setTitle)}
        ></S.InputInput>
      </S.InputLabel>

      <S.InputLabel>
        내용
        <S.InputInput
          type="text"
          value={contents}
          onChange={e => onChangeHandler(e, setContents)}
        ></S.InputInput>
      </S.InputLabel>

      <S.InputButton>추가하기</S.InputButton>
    </S.InputForm>
  );
};

export default Input;
