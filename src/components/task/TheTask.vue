<template>
  <div>
    <base-card>
      <add-task></add-task>
    </base-card>
    <component :is="selectedTab"></component>
  </div>
</template>

<script>
import StoredTask from "./StoredTask.vue";
import AddTask from "./AddTask.vue";
// import BaseButton from "../UI/BaseButton.vue";
import BaseCard from "../UI/BaseCard.vue";


export default {
  name: "TheTask",
  components: {
    StoredTask,
    AddTask,
    // BaseButton,
    BaseCard,
  },
  data() {
    return {
      selectedTab: "stored-task",
      storedTask: [
        { id: "s", title: "Sleep", desc: "Sleep 12 hours", types: "Todo" },
        { id: "e", title: "Eat", desc: "Eat more", types: "Done" },
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
      // if (this.newTask) {
      //   Swal.fire({})
      // }
      this.storedTask.unshift(newTask);
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
