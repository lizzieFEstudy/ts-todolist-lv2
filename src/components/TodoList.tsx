import React from "react";
import { TodoModel } from "../model/todo";
import * as S from "../styles/TodoList.styled";

type OwnProps = {
  todos: TodoModel[];
  setTodos: React.Dispatch<React.SetStateAction<TodoModel[]>>;
  listIsDone: boolean;
};

const TodoList: React.FC<OwnProps> = ({ todos, setTodos, listIsDone }) => {
  const clickDoneButtonHandler = (id: string) => {
    const updatedTodos = (initialTodos: TodoModel[]) => {
      return initialTodos.map(item => {
        if (item.id === id) {
          return { ...item, isDone: !item.isDone };
        }
        return item;
      });
    };

    setTodos(updatedTodos);
  };

  const clickRemoveButtonHandler = (id: string) => {
    const deletedTodos = todos.filter(item => item.id !== id);
    setTodos(deletedTodos);
  };

  return (
    <section>
      <S.TodoListH2>{listIsDone ? "Done..! 🎉" : "Working.. 🔥"}</S.TodoListH2>
      <S.TodoListList>
        {todos
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
