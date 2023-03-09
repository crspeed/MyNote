<template>
  <div>
    <h1>学习网站</h1>
    <a href="https://www.runoob.com/">访问菜鸟教程</a>
    <a href="https://segmentfault.com/a/1190000020084110">跳转方式</a>
    <a href="Main.vue">回到主画面</a>
    <button @click="go">跳到待定事项页面</button>
    <button @click="back">返回</button>
  </div>
</template>

<script>
export default {
  name: 'Learning',
  id: '123',
  methods: {
    back () {
      this.$router.go(-1)
    },
    go () {
      this.$router.replace({
        path: '/waitingTask',
        params: {
          id: this.id
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
