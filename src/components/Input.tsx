import React, { useState } from "react";
import * as S from "../styles/Input.styled";
import { TodoModel } from "../model/todo";
import { v4 as uuid } from "uuid";

type OwnProps = {
  todos: TodoModel[];
  setTodos: React.Dispatch<React.SetStateAction<TodoModel[]>>;
};

const Input: React.FC<OwnProps> = ({ todos, setTodos }) => {
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
      id: uuid(),
      title,
      contents,
      isDone: false
    };

    setTodos([...todos, newTodos]);

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
