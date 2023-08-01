import React from "react";
import * as S from "../styles/TodoList.styled";
import { useAppDispatch, useAppSelector } from "../redux/config/hooks";
import { Link } from "react-router-dom";
import { __deleteTodo, __toggleStatusTodo } from "../redux/modules/todosSlice";

interface OwnProps {
  listIsDone: boolean;
}

const TodoList: React.FC<OwnProps> = ({ listIsDone }) => {
  const dispatch = useAppDispatch();

  const todosData = useAppSelector(state => state.todos.todos);

  const clickDoneButtonHandler = (id: string, isDone: boolean) => {
    dispatch(__toggleStatusTodo({ id, isDone }));
  };

  const clickRemoveButtonHandler = (id: string) => {
    dispatch(__deleteTodo(id));
  };

  return (
    <section>
      <S.TodoListH2>{listIsDone ? "Done..! 🎉" : "Working.. 🔥"}</S.TodoListH2>
      <S.TodoListList>
        {todosData
          .filter(item => item.isDone === listIsDone)
          .map(item => {
            return (
              <S.TodoListItem $IsDone={item.isDone} key={item.id}>
                <S.TodoListStrong>{item.title}</S.TodoListStrong>
                <S.TodoListParagraph>{item.contents}</S.TodoListParagraph>
                <Link to={`/detail/${item.id}`}>상세보기</Link>
                <S.TodoListBox>
                  <S.TodoListButton
                    onClick={() => clickRemoveButtonHandler(item.id)}
                  >
                    삭제하기
                  </S.TodoListButton>
                  <S.TodoListButton
                    $IsDone={item.isDone}
                    onClick={() => clickDoneButtonHandler(item.id, item.isDone)}
                  >
                    {item.isDone === false ? "완료" : "취소"}
                  </S.TodoListButton>
                </S.TodoListBox>
              </S.TodoListItem>
            );
          })}
      </S.TodoListList>
    </section>
  );
};

export default TodoList;
