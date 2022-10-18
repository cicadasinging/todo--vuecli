// 获取远程 todos
export const fetchTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
  const rawTodos = await response.json();
  return rawTodos.map((todo) => ({
    id: todo.id,
    content: todo.title,
    completed: todo.completed,
  }));
};

// 获取 todos
export const getTodos = async () => {
  // localStorage
  return JSON.parse(sessionStorage.getItem("todos")) || (await fetchTodos()) || [];
};

// 添加 todo
export const postTodo = (todo) => {
  // localStorage
  const todos = JSON.parse(sessionStorage.getItem("todos")) || [];
  todos.push(todo);
  sessionStorage.setItem("todos", JSON.stringify(todos));
};
