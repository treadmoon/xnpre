<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    this.$store.dispatch("addfund", { name: "大河基金" });
    console.log(this.$store.state.fundList);
  }
};
</script>

<style lang="less" scoped>
* {
  font-size: 1rem;
}
</style>

