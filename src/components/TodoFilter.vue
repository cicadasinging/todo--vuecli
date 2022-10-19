<template>
  <div class="filters">
    <span
      v-for="filter in filters"
      :key="filter.value"
      :class="{ active: selected === filter.value }"
      class="filter"
      @click="emitChangeFilter(filter.value)"
      >{{ filter.label }}
    </span>
  </div>
</template>

<script setup>
defineProps({ selected: String });
const filters = [
  { label: "全部", value: "all" },
  { label: "已完成", value: "done" },
  { label: "未完成", value: "todo" },
];
const emit = defineEmits(["change-filter"]);
const emitChangeFilter = (value) => emit("change-filter", value);
</script>

<style lang="scss" scoped>
.filters {
  display: flex;
  margin: 1.5rem 0.125rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: rgb(148 163 184);

  .filter {
    margin-right: 0.875rem;
    transition-duration: 500ms;
    cursor: pointer;

    &.active {
      transform: scale(1.25);
      color: rgb(139 92 246);
      font-weight: 500;
    }
  }
}
</style>
