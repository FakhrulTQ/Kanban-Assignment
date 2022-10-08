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
  background-color: #002f64;
  display: flex;
  justify-content: center;
  align-items: center;
}

header h1 {
  color: white;
  margin: 0;
}
</style>