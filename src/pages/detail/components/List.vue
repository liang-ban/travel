<template>
<div>
  <div class="item" v-for="(item,index) of list" :key="index">
    <div class="item-title border-bottom">
      <span class="item-title-icon">{{item.title}}</span>
    </div>
    <!-- 递归组件 -->
    <div v-if="item.children" class="item-children">
      <detail-list :list="item.children"></detail-list>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>
<style lang="stylus" scoped>
.item-title-icon
  display inline-block
  height 40px
  line-height 40px
  font-size 18px
  font-family homenode !important
  color #000
  margin-right 8px
  // display inline-block
  // width .46rem
  // height .46rem
.item-title
  line-height 1.8rem
  font-size .6rem
  padding 0 .5rem
.item-children
  padding 0 1.5rem
</style>
