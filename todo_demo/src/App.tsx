import React, { useState } from "react";
import { AddTodo } from "./components/AddTodo";
import { TodoItem } from "./components/TodoItem";
import Badge from "react-bootstrap/Badge";

interface Todo {
  id: number;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  const handleAddTodo = (title: string) => {
    const newTodoItem: Todo = {
      id: todos.length + 1,
      title: title,
      isCompleted: false,
    };
    setTodos((prev) => [...prev, newTodoItem]);
  };

  const handleRemoveItem = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleEdit = (id: number, newTitle: string) => {
    const newArray = [...todos];
    const index = newArray.findIndex((todo) => todo.id === id);
    newArray[index] = { ...newArray[index], title: newTitle };
    setTodos(newArray);
  };

  const handleDone = (id: number) => {
    const newArray = [...todos];
    const index = newArray.findIndex((todo) => todo.id === id);
    newArray[index] = { ...newArray[index], isCompleted: true };
    setTodos(newArray);
    const completedTodos = newArray[index];
    setCompletedTodos((prev) => [...prev, completedTodos]);
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <table style={{ border: "1px solid" }}>
        <tr>
          <td style={{ border: "1px solid" }}>
            <section style={{ marginBottom: "10px" }}>
              <AddTodo handleAdd={handleAddTodo} />
            </section>
          </td>
          <td style={{ border: "1px solid" }}>
            <h2>Completed Todo</h2>
          </td>
        </tr>
        <tr>
          <td style={{ border: "1px solid" }}>
            <section>
              {todos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  id={todo.id}
                  title={todo.title}
                  isCompleted={todo.isCompleted}
                  onRemove={handleRemoveItem}
                  onEdit={handleEdit}
                  onDone={handleDone}
                />
              ))}
            </section>
          </td>
          <td style={{ border: "1px solid" }}>
            <section>
              {completedTodos.map((todo) => (
                <h3 key={todo.id}>
                  {todo.title} <Badge bg="success">Done</Badge>
                </h3>
              ))}
            </section>
          </td>
        </tr>
      </table>
      {/* <div style={{ padding: "1rem" }}>
        <section style={{ marginBottom: "10px" }}>
          <AddTodo handleAdd={handleAddTodo} />
        </section>
        <section>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              title={todo.title}
              isCompleted={todo.isCompleted}
              onRemove={handleRemoveItem}
              onEdit={handleEdit}
              onDone={handleDone}
            />
          ))}
        </section>
        <section>
          <h2>Completed Todo</h2>
          {completedTodos.map((todo) => (
            <h3 key={todo.id}>
              {todo.title} <Badge bg="success">Done</Badge>
            </h3>
          ))}
        </section>
      </div> */}
    </div>
  );
}

export default App;
