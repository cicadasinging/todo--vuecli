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

<style lang="scss">
.filters {
  display: flex;
  margin: 24px 2px;
  color: #c0c2ce;
  font-size: 14px;

  .filter {
    margin-right: 14px;
    transition: 0.8s;
    cursor: pointer;

    &.active {
      color: #6b729c;
      transform: scale(1.2);
    }
  }
}
</style>
