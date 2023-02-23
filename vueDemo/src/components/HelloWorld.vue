<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <table border="1">
      <tr class="">
        <td>1.不经意间的肢体触碰. (陌生人：100cm，熟人：50cm 亲密关系：20cm)</td>
        <td>2.每次聊天回复字数比你多.(不希望你产生误解)</td>
        <td>3.秒回你的信息.(在等你回信息)</td>
        <td>4.主动找你聊天.(每时每秒都想陪在你身边，没有你让她抓狂)</td>
      </tr>
      <tr>
        <td>100</td>
        <td>200</td>
        <td>300</td>
        <td>300</td>
      </tr>
    </table>
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
    <div id="draggable" class="ui-widget-content">
      <p>请拖动我！</p>
    </div>
  </div>
</template>

<script>
// 引用jquery
import $ from 'jquery'
import 'jquery-ui/themes/base/resizable.css' // 使用resizable功能
import 'jquery-ui/ui/widgets/draggable' // 直接引用，import 'jquery-ui'这样的引用无效
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '女生的心思有你猜？-_-'
    }
  },
  methods: {
  },
  created () {
    $('#draggable').draggable()
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.text {
  color: #42b983;
}
#draggable { width: 150px; height: 150px; padding: 0.5em; }
</style>
