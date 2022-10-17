<template>
  <div :class="{ done: todoItem.completed }" class="todo-item">
    <label>
      <input :checked="todoItem.completed" type="checkbox" @click="emitChangeState" />
      {{ todoItem.content }}
      <span class="check-button" />
    </label>
  </div>
</template>

<script setup>
defineProps({ todoItem: Object });
const emit = defineEmits(["change-state"]);
const emitChangeState = (event) => emit("change-state", event);
</script>

<style lang="scss">
.todo-item {
  background: white;
  padding: 16px;
  border-radius: 8px;
  color: #626262;

  label {
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;

    input {
      margin-right: 16px;
      opacity: 0;
    }

    span {
      &.check-button {
        position: absolute;
        top: 0;
      }

      &.check-button::before,
      &.check-button::after {
        content: "";
        display: block;
        position: absolute;
        width: 18px;
        height: 18px;
        border-radius: 50%;
      }

      &.check-button::before {
        border: 1px solid #b382f9;
      }

      &.check-button::after {
        transition: 0.4s;
        background: #b382f9;
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
      text-decoration: line-through;
      font-style: italic;
    }
  }
}
</style>
