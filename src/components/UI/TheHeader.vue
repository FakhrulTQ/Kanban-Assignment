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
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  margin-top: 1.5rem;
}
</style>