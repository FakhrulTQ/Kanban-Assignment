<template>
  <div>
    <the-header mainTitle="Kanban Board"></the-header>
    <stored-task :tasks="storedTask"></stored-task>
  </div>
</template>

<script>
import StoredTask from "./components/task/StoredTask.vue";
import TheHeader from "./components/layout/TheHeader.vue";

export default {
  name: "App",
  components: {
    StoredTask,
    TheHeader,
  },
  data() {
    return {
      storedTask: [
        { id: "s", title: "Sleep", desc: "Sleep 12 hours", type: "todo" },
        { id: "e", title: "Eat", desc: "Eat more", type: "done" },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/vendors/bootstrap-vue/index";
</style>
