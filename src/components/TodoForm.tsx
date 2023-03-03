import { SetStateAction, useState } from "react";
import { Todo } from "../Interfaces";
import Button from "./Button";
import TextInput from "./TextInput";

interface Props {
  todoList: Todo[];
  setTodos: React.Dispatch<SetStateAction<Todo[]>>;
}

const TodoForm = ({ todoList, setTodos }: Props) => {
  const [newTaskIn, setNewTask] = useState<string>("");
  const [urgentIn, setUrgent] = useState<boolean>(false);

  const addTodo = (text: string) => {
    setTodos([
      ...todoList,
      {
        id: todoList.length + 1,
        text: text,
        urgent: urgentIn,
        complete: false,
      },
    ]);
    setNewTask("");
    setUrgent(false);
  };

  return (
    <form
      style={{
        display: "grid",
        gap: "0.5rem",
        placeItems: "center",
      }}
      onSubmit={(e) => e.preventDefault()}
    >
      <TextInput
        placeholder="New Task"
        value={newTaskIn}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <label>
        <input
          style={{
            height: '1rem',
            aspectRatio: '1/1',
            marginRight: '10px'
          }}
          type="checkbox"
          name=""
          id=""
          checked={urgentIn}
          onChange={() => setUrgent(!urgentIn)}
        />
        Urgent
      </label>
      <Button text="Add Task" callback={() => addTodo(newTaskIn)} />
    </form>
  );
};

export default TodoForm;
