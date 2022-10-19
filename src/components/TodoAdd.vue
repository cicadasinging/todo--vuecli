<template>
  <div class="input-add">
    <input v-model.trim="todoContent" type="text" @keyup.enter="emitAddTodo" />
    <button @click="emitAddTodo">
      <i class="plus" />
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({ tid: Number });
const emit = defineEmits(["add-todo"]);
const todoContent = ref("");
const emitAddTodo = () => {
  if (todoContent.value.length === 0) return;
  const todo = {
    id: props.tid,
    content: todoContent.value,
    completed: false,
  };
  emit("add-todo", todo);
  todoContent.value = "";
};
</script>

<style lang="scss" scoped>
/* 添加框 */
.input-add {
  position: relative;
  display: flex;
  place-items: center;

  input {
    width: 100%;
    border-radius: 9999px;
    border-style: none;
    outline-style: none;
    padding: 1rem 3rem 1rem 1rem;
    font-size: 1rem;
    line-height: 1.5rem;
    color: rgb(71 85 105);

    &:hover {
      box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    }
  }

  button {
    position: absolute;
    right: 0;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 9999px;
    border-style: none;
    outline-style: none;
    background: linear-gradient(rgb(216 180 254), rgb(147 197 253));
    cursor: pointer;

    &:hover {
      filter: brightness(1.05);
    }

    .plus {
      display: block;
      width: 100%;
      height: 100%;
      background: linear-gradient(#fff, #fff) no-repeat center, linear-gradient(#fff, #fff) no-repeat center;
      background-size: 50% 0.25rem, 0.25rem 50%;
    }
  }
}
</style>
