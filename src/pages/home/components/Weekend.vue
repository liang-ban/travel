<template>
  <div>
    <div class="recommend-title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">
          <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>

      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.recommend-title{
  line-height : 2.5rem
  background :#ccc
  text-indent:1.3rem
}
  .item-img{
    width :100%
    }
  .item-img-wrapper{
    overflow :hidden
    height :0
    padding-bottom 37.09%

    }
  .item-info{
    padding :.1rem
    }
  .item-title{
    line-height :1.9rem
    font-size 1.32rem
    ellipsis()
    }
  .item-desc{
    line-height :1.5rem
    color #ccc
    ellipsis()
    }
</style>
