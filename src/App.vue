<template>
  <main>
    <div class="container">
      <img alt="Vue logo" class="logo" src="./assets/logo.png" />
      <h1>欢迎使用 Todo 待办事项！</h1>
      <todo-add :tid="todos.length" @add-todo="addTodo" />
      <todo-filter :selected="filter" @change-filter="changeFilter" />
      <todo-list :todos="filteredTodos" />
    </div>
  </main>
</template>

<script setup>
import useFilteredTodos from "@/composables/useFilteredTodos.js";
import useTodos from "@/composables/useTodos.js";
import TodoAdd from "./components/TodoAdd.vue";
import TodoFilter from "./components/TodoFilter.vue";
import TodoList from "./components/TodoList.vue";

const { todos, addTodo } = useTodos();
const { filter, filteredTodos } = useFilteredTodos(todos);
const changeFilter = (value) => {
  filter.value = value;
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Helvetica, "PingFang SC", "Microsoft Yahei", sans-serif;
}

/* 整个页面 */
main {
  width: 100vw;
  min-height: 100vh;
  padding: 10vh 0;
  display: grid;
  align-items: start;
  justify-items: center;
  background: #d8dfff;

  .container {
    width: 60%;
    max-width: 400px;
    box-shadow: 0 0 24px rgba(0, 0, 0, 0.15);
    border-radius: 24px;
    padding: 38px 28px;
    background-color: rgb(245, 246, 252);

    .logo {
      width: 60px;
      display: block;
      margin: 0 auto;
    }

    h1 {
      margin: 12px 0 24px 0;
      font-size: 28px;
      color: #414873;
    }
  }
}
</style>
