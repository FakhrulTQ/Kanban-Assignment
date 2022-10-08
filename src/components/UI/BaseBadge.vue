<template>
  <b-badge :class="type">
    <slot></slot>
  </b-badge>
</template>

<script>
export default {
  props: ['type', 'badgeType'],
};
</script>

<style lang="scss" scoped>
.badge {
  background-color: #ccc;
  font-size: 1rem;
  color: #252525;
  border-radius: 30px;
  padding: 0.3rem 1rem;
  display: inline-block;
  margin-right: 0.5rem;
}

.todo {
  background-color: #3d008d;
  color: white;
}

.inProgress {
  background-color: #71008d;
  color: white;
}

.done {
  background-color: #8d006e;
  color: white;
}
</style>
