<template>
  <div>
    <the-header mainTitle="Kanban Board"></the-header>
    <the-task></the-task>
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader";
import TheTask from "./components/task/TheTask";

export default {
  name: "App",
  components: {
    TheHeader,
    TheTask,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/vendors/bootstrap-vue/index";


</style>
