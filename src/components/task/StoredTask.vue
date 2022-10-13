<template>
  <div>
    <div v-for="task in tasks" :key="task.id">
      <task-item
        :id="task.id"
        :title="task.title"
        :desc="task.desc"
        :types="task.type"
      ></task-item>
    </div>
  </div>
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
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
