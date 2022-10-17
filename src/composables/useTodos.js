import { onMounted, ref } from "vue";
import { fetchTodos } from "@/apis/request";

export default () => {
  const todos = ref([]);

  // 添加 todo
  const addTodo = (todo) => todos.value.push(todo);

  onMounted(() => {
    fetchTodos().then((rawTodos) => {
      todos.value = rawTodos.map((todo) => ({
        id: todo.id,
        content: todo.title,
        completed: todo.completed,
      }));
    });
  });

  return { todos, addTodo };
};
