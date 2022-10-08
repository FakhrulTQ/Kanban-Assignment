<template>
  <ul>
    <task-item
      v-for="task in tasks"
      :key="task.id"
      :title="task.title"
      :desc="task.desc"
      :type="task.type"
    ></task-item>
  </ul>
</template>

<script>
import TaskItem from "./TaskItem.vue";

export default {
    props: ['tasks'],
    components: {
        TaskItem
    }
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
