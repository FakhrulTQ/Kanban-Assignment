<template>
  <div>
    <base-card>
      <add-task></add-task>
    </base-card>
    <stored-task></stored-task>
  </div>
</template>

<script>
import StoredTask from "./StoredTask.vue";
import AddTask from "./AddTask.vue";
import BaseCard from "../UI/BaseCard.vue";


export default {
  name: "TheTask",
  components: {
    StoredTask,
    AddTask,
    BaseCard,
  },
  data() {
    return {
      storedTask: [
        { id: "s", title: "Sleep", desc: "Sleep 12 hours", types: "Todo" },
        { id: "e", title: "Eat", desc: "Eat more", types: "Todo" },
      ],
    };
  },
  provide() {
    return {
      tasks: this.storedTask,
      addTask: this.addTask,
      deleteTask: this.removeTask,
    };
  },
  methods: {
    addTask(title, desc, types) {
      const newTask = {
        id: new Date().toISOString(),
        title: title,
        desc: desc,
        types: types,
      };
      this.storedTask.push(newTask);
    },
    removeTask(taskId) {
      const taskIndex = this.storedTask.findIndex((task) => task.id === taskId);
      this.storedTask.splice(taskIndex, 1);
    },
    toggleSetType() {
      this.storedTask.types = "done";
    },
  },
};
</script>

<style lang="scss">
body {
  background-color: #f8f9fb;
}
</style>
