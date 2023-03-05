<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!--不带参数-->
    <router-link to="/testDemo">
      <button>判断女生是否对你有意思</button>
    </router-link>
    <!--带参数-->
    <router-link :to="{name:'testDemo2',params:{ id : 123}}">
      <button>这些年走过的坑</button>
    </router-link>
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
      msg: '女生的心思有你猜？-_-',
      id: 1
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
#draggable { width: 150px; height: 150px; padding: 0.5em; }
</style>
