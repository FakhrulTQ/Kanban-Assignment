<template>
  <b-card>
    <slot></slot>
  </b-card>
</template>

<script>
export default {
  name: "BaseCard"
};
</script>

<style lang="scss" scoped>
.card {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  border-radius: .5rem;
  padding: 1rem;
  margin: auto;
  max-width: 45rem;
}
</style>
