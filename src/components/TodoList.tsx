import React from "react";
import * as S from "../styles/TodoList.styled";
import { useAppDispatch, useAppSelector } from "../redux/config/hooks";
import { deleteTodo, toggleStatusTodo } from "../redux/modules/todosSlice";

type OwnProps = {
  listIsDone: boolean;
};

const TodoList: React.FC<OwnProps> = ({ listIsDone }) => {
  const dispatch = useAppDispatch();

  const todosData = useAppSelector(state => state.todos.todos);

  const clickDoneButtonHandler = (id: string) => {
    dispatch(toggleStatusTodo(id));
  };

  const clickRemoveButtonHandler = (id: string) => {
    dispatch(deleteTodo(id));
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
                <strong>{item.title}</strong>
                <p>{item.contents}</p>
                <S.TodoListBox>
                  <S.TodoListButton
                    onClick={() => clickRemoveButtonHandler(item.id)}
                  >
                    삭제하기
                  </S.TodoListButton>
                  <S.TodoListButton
                    $IsDone={item.isDone}
                    onClick={() => clickDoneButtonHandler(item.id)}
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
