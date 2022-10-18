import { getTodos, postTodo } from "@/apis/request";
import { onMounted, ref } from "vue";

export default () => {
  const todos = ref([]);

  // 添加 todo
  const addTodo = (todo) => {
    todos.value.push(todo);
    postTodo(todo);
  };

  onMounted(() => {
    getTodos().then((r) => (todos.value = r));
  });

  return { todos, addTodo };
};
