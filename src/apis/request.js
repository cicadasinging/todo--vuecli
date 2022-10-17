// 获取远程 todos
export const fetchTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
  return await response.json();
};

// 添加 todo
