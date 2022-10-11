<template>
  <ul>
    <task-item
      v-for="task in tasks"
      :key="task.id"
      :id="task.id"
      :title="task.title"
      :desc="task.desc"
      :types="task.types"
    ></task-item>
  </ul>
</template>

<script>
import TaskItem from "./TaskItem.vue";

export default {
    inject: ['tasks'],
    components: {
        TaskItem
    },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
