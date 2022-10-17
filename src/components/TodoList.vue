<template>
  <div class="todo-list">
    <todo-list-item
      v-for="todo in todos"
      :key="todo.id"
      :todo-item="todo"
      @change-state="todo.completed = $event.target.checked"
    />
  </div>
</template>

<script setup>
import TodoListItem from "./TodoListItem";

defineProps({ todos: Array });
</script>

<style lang="scss">
.todo-list {
  display: grid;
  row-gap: 14px;
}
</style>
