<template>
  <div>
    <h1>这些年走过的坑</h1>
    <table border="1" class="text">
      <tr>
        <td>1.租房的坑：中介（中介费），租房公司（押金，是否包水电气），房东直租</td>
        <td>2.相亲网站的坑：夸大效果</td>
        <td>3.各种贷款公司的坑：用低利息吸引，用各种方法让你违约</td>
        <td>4.各种会员的坑：有跑了庙的风险</td>
      </tr>
      <tr>
        <td>5.招聘的坑：借招聘之名，实则别有目的</td>
        <td>6.借出去的钱要有收不回的准备</td>
        <td>300</td>
        <td>300</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'testDemo',
  mounted () {
    console.log(this.$route.query.id)
  }
}
</script>
<style scoped>
.text {
  color: #42b983;
}
</style>
