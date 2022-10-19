<template>
  <main>
    <div class="container">
      <img alt="Vue logo" class="logo" src="./assets/logo.png" />
      <h1>欢迎使用 Todo App！</h1>
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
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Helvetica, "PingFang SC", "Microsoft Yahei", sans-serif;
}

/* 整个页面 */
main {
  min-height: 100vh;
  width: 100vw;
  background-color: rgb(224 231 255);
  padding: 7rem 0;
  display: grid;
  align-items: start;
  justify-items: center;

  .container {
    width: 640px;
    border-radius: 1.5rem;
    background-color: rgb(248, 250, 252);
    padding: 2.25rem 1.75rem;
    box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);

    .logo {
      width: 4rem;
      height: 4rem;
      display: block;
      margin: 0 auto;
    }

    h1 {
      margin: 1.5rem 0;
      font-size: 1.875rem;
      line-height: 2.25rem;
      font-weight: 700;
      color: rgb(71 85 105);
    }
  }
}
</style>
