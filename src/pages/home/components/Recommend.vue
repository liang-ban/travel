<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
        <router-link tag="li" class="item border-bottom" v-for="item of list" :key="item.id" :to="'/detail/'+item.id">
            <img class="item-img" :src="item.imgUrl" />
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
            <button class="item-button">查看详情</button>
          </div>

        </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.recommend-title{
  margin-top .5rem
  line-height : 2.5rem
  background :#ccc
  text-indent:1.3rem
}
.item{
  display:flex
  height 5.5rem
  overflow :hidden
  }
  .item-img{
    width :9.7rem
    padding:.1rem
    }
  .item-info{
    flex:1
    padding :.1rem
    min-width :0
    }
  .item-title{
    line-height :1.9rem
    font-size 1.12rem
    ellipsis()
    }
  .item-desc{
    line-height :1.5rem
    color #ccc
    ellipsis()
    }
  .item-button{
    background :#ff9300
    padding 0 .2rem
    border-radius  .5rem
    margin-top :.16rem
    line-height : 1.2rem
    color :#fff
    }
</style>
