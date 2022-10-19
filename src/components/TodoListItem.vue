<template>
  <div :class="{ done: todoItem.completed }" class="todo-item">
    <label>
      <input :checked="todoItem.completed" type="checkbox" @click="emitChangeState" />
      <span class="check-button" />
      {{ todoItem.content }}
    </label>
  </div>
</template>

<script setup>
defineProps({ todoItem: Object });
const emit = defineEmits(["change-state"]);
const emitChangeState = (event) => emit("change-state", event);
</script>

<style lang="scss" scoped>
.todo-item {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  color: rgb(82 82 82);

  label {
    position: relative;
    display: flex;
    place-items: center;
    cursor: pointer;
    line-height: 1rem;

    input {
      margin-right: 1rem;
      opacity: 0;
    }

    span {
      &.check-button {
        position: absolute;
        top: 0;
      }

      &.check-button::before,
      &.check-button::after {
        position: absolute;
        display: block;
        width: 1rem;
        height: 1rem;
        border-radius: 9999px;
        content: "";
      }

      &.check-button::before {
        border: 1px solid rgb(139 92 246);
      }

      &.check-button::after {
        transition: 0.4s;
        background: rgb(139 92 246);
        transform: translate(1px, 1px) scale(0.8);
        opacity: 0;
      }
    }

    input:checked + span.check-button::after {
      opacity: 1;
    }
  }

  &.done {
    label {
      text-decoration-line: line-through;
      font-style: italic;
      color: rgb(113 113 122);
    }
  }
}
</style>
