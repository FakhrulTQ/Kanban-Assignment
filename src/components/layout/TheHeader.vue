<template>
  <header>
    <h1>{{ mainTitle }}</h1>
  </header>
</template>

<script>
export default {
    props: ['mainTitle']
}
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
}
</style>