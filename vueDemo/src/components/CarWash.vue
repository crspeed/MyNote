<template>
  <section>
    <h1>洗车系统</h1>
    <h2>二手车回收</h2>
    <h2>财务管理</h2>
    <h2>会员管理</h2>
    <h2>员工管理</h2>
    <h2>招商</h2>
    <button @click="back">返回</button>
  </section>
</template>

<script>
export default {
  name: 'CarWash',
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>

</style>
