<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon" >&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点</div>
      <router-link to='/city'>
            <div class="header-right">
              {{this.city}}
              <span class="iconfont arrow-icon">&#xe62d;</span></div>
      </router-link>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>
<style lang="stylus" scoped>
/* 1rem = html font-size =50px */
    @import '~styles/varibles.styl'
.header{
  display: flex
  height: $headerHeight
  line-height: $headerHeight
  background: $bgColor
  color:#fff
}
.header-left{
  width: 2.2rem
  float: left
}
.header-left .back-icon{
  text-align: center
  font-size: 1.4rem
}
.header-input{
  flex:1
  background: #fff
  border-radius: .3rem
  margin-top: .3rem
  height: 2.2rem
  line-height: 2.2rem
  color:#ccc
  padding-left: .5rem
}
.header-right{
  min-width: 4.5rem
  padding:0 .3rem
  float:right
  text-align: center
  color:#fff
}
.iconfont .arrow-icon{
  font-size: 4.5rem
}
</style>
