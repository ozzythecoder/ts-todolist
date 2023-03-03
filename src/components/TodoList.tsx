import { Todo } from "../Interfaces";
import TodoTask from "./TodoTask";

interface Props {
  todoList: Todo[];
  setTodos: (todos: Todo[]) => void;
}

export default function TodoList({ todoList, setTodos }: Props) {
  
  const completeTask = (id: number) => {
    setTodos(
      todoList.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: true,
          };
        } else return todo;
      })
    );
  };

  return (
    <ul
      className="todo-list"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        listStyle: 'none',
        padding: 0,
        margin: '1.5rem 0',
        width: '80%',
        maxWidth: '800px'
      }}
    >
      {todoList.map((todo) => {
        return (
          <TodoTask
            key={todo.id}
            todo={todo}
            completeTask={() => completeTask(todo.id)}
          />
        );
      })}
    </ul>
  );
}
